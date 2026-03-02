import http from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const publicDir = join(process.cwd(), 'public');
const { redirects = [] } = JSON.parse(readFileSync(join(process.cwd(), 'vercel.json'), 'utf8'));

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

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const redirect = findRedirect(url.pathname);

  if (redirect) {
    res.statusCode = 301;
    res.setHeader('Location', redirect.destination);
    res.end();
    return;
  }

  const filePath = resolveFile(url.pathname);
  if (!filePath) {
    res.statusCode = 404;
    res.end('Not found');
    return;
  }

  res.statusCode = 200;
  res.end(readFileSync(filePath));
});

const checks = [
  { path: '/understand/', ok: (r) => r.status === 200 },
  { path: '/comprendre/', ok: (r) => r.status === 200 || (r.status === 301 && r.location === '/understand/') },
  { path: '/problems/', ok: (r) => r.status === 200 },
  { path: '/problem/', ok: (r) => r.status === 301 && r.location === '/problems/' },
  { path: '/solutions/', ok: (r) => r.status === 200 },
  { path: '/solution/', ok: (r) => r.status === 301 && r.location === '/solutions/' },
  { path: '/use-cases/', ok: (r) => r.status === 200 },
  { path: '/research/', ok: (r) => r.status === 200 }
];

const listener = await new Promise((resolve) => {
  const s = server.listen(0, () => resolve(s));
});

const { port } = listener.address();
let hasError = false;

for (const check of checks) {
  const response = await fetch(`http://127.0.0.1:${port}${check.path}`, { redirect: 'manual' });
  const result = {
    status: response.status,
    location: response.headers.get('location')
  };

  if (!check.ok(result)) {
    hasError = true;
    console.error(`FAIL ${check.path} -> status ${result.status}${result.location ? ` location ${result.location}` : ''}`);
  } else {
    console.log(`PASS ${check.path} -> status ${result.status}${result.location ? ` location ${result.location}` : ''}`);
  }
}

listener.close();
if (hasError) process.exit(1);
