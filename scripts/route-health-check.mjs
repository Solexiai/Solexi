import http from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const publicDir = join(process.cwd(), 'public');
const { redirects = [] } = JSON.parse(
  readFileSync(join(process.cwd(), 'vercel.json'), 'utf8')
);

function findRedirect(pathname) {
  return redirects.find((rule) => rule.source === pathname);
}

function resolveFile(pathname) {
  if (pathname === '/') return join(publicDir, 'index.html');

  const clean = pathname.replace(/^\//, '');
  const asFile = join(publicDir, clean);
  const asHtml = join(publicDir, `${clean}.html`);
  const asIndex = join(publicDir, clean, 'index.html');

  if (existsSync(asFile) && statSync(asFile).isFile()) return asFile;
  if (existsSync(asHtml) && statSync(asHtml).isFile()) return asHtml;
  if (existsSync(asIndex) && statSync(asIndex).isFile()) return asIndex;

  return null;
}

function contentType(filePath) {
  const ext = extname(filePath).toLowerCase();

  switch (ext) {
    case '.html':
      return 'text/html; charset=utf-8';
    case '.xml':
      return 'application/xml; charset=utf-8';
    case '.json':
      return 'application/json; charset=utf-8';
    case '.css':
      return 'text/css; charset=utf-8';
    case '.js':
      return 'text/javascript; charset=utf-8';
    case '.svg':
      return 'image/svg+xml';
    case '.txt':
      return 'text/plain; charset=utf-8';
    default:
      return 'application/octet-stream';
  }
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const redirect = findRedirect(url.pathname);

  if (redirect) {
    res.statusCode = redirect.permanent ? 308 : 307;
    if (redirect.permanent === undefined) {
      res.statusCode = 301;
    }
    res.setHeader('Location', redirect.destination);
    res.end();
    return;
  }

  const filePath = resolveFile(url.pathname);

  if (!filePath) {
    const custom404 = join(publicDir, '404.html');

    res.statusCode = 404;
    if (existsSync(custom404)) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(readFileSync(custom404));
    } else {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Not found');
    }
    return;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', contentType(filePath));
  res.end(readFileSync(filePath));
});

const checks = [
  { path: '/understand/', ok: (r) => r.status === 200 },
  { path: '/comprendre/', ok: (r) => r.status === 200 || (r.status === 301 && r.location === '/understand/') || (r.status === 308 && r.location === '/understand/') },

  { path: '/problems/', ok: (r) => r.status === 200 },
  { path: '/problem/', ok: (r) => (r.status === 301 || r.status === 308) && r.location === '/problems/' },

  { path: '/solutions/', ok: (r) => r.status === 200 },
  { path: '/solution/', ok: (r) => (r.status === 301 || r.status === 308) && r.location === '/solutions/' },

  { path: '/use-cases/', ok: (r) => r.status === 200 },
  { path: '/research/', ok: (r) => r.status === 200 },

  { path: '/faq', ok: (r) => r.status === 200 },
  { path: '/celebrities/', ok: (r) => r.status === 200 },
  { path: '/vedette/', ok: (r) => r.status === 200 },
  { path: '/how-it-works/', ok: (r) => r.status === 200 },

  { path: '/privacy-policy/', ok: (r) => (r.status === 301 || r.status === 308) && r.location === '/privacy/' },
  { path: '/terms-of-use-2/', ok: (r) => (r.status === 301 || r.status === 308) && r.location === '/terms/' },
  { path: '/contact', ok: (r) => (r.status === 301 || r.status === 308) && r.location === '/contact/' }
];

const listener = await new Promise((resolve) => {
  const s = server.listen(0, () => resolve(s));
});

const { port } = listener.address();
let hasError = false;

for (const check of checks) {
  const response = await fetch(`http://127.0.0.1:${port}${check.path}`, {
    redirect: 'manual'
  });

  const result = {
    status: response.status,
    location: response.headers.get('location'),
    contentType: response.headers.get('content-type')
  };

  if (!check.ok(result)) {
    hasError = true;
    console.error(
      `FAIL ${check.path} -> status ${result.status}` +
      `${result.location ? ` location ${result.location}` : ''}` +
      `${result.contentType ? ` content-type ${result.contentType}` : ''}`
    );
  } else {
    console.log(
      `PASS ${check.path} -> status ${result.status}` +
      `${result.location ? ` location ${result.location}` : ''}`
    );
  }
}

listener.close();
if (hasError) process.exit(1);
