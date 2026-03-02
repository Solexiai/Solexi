(function () {
  const PAGE_META = {
    understand: { label: 'Understand', path: '/understand/' },
    problems: { label: 'Problem', path: '/problems/' },
    solutions: { label: 'Solution', path: '/solutions/' },
    'use-cases': { label: 'Use cases', path: '/use-cases/' },
    research: { label: 'Research', path: '/research/' }
  };

  window.solexiPageMeta = PAGE_META;
  window.renderSolexiBreadcrumb = function renderSolexiBreadcrumb(pageKey) {
    const meta = PAGE_META[pageKey];
    const container = document.getElementById('breadcrumb');
    if (!meta || !container) return;

    container.innerHTML = `
      <a href="/" style="text-decoration:none;opacity:.8;">← Home</a>
      <span style="opacity:.4;"> / </span>
      <span style="opacity:.8;">${meta.label}</span>
    `;
  };
})();
