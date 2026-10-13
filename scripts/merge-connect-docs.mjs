// Junta o site do DS Connect (apps/connect-docs/dist) ao do JC Decor (apps/docs/dist) em /connect/
// e ensina o 404.html da raiz a encaminhar links diretos de /connect/<rota> para o SPA do Connect.
import { cpSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const docsDist = resolve(root, 'apps/docs/dist');
const connectDist = resolve(root, 'apps/connect-docs/dist');

for (const dir of [docsDist, connectDist]) {
  if (!existsSync(dir)) throw new Error(`Build ausente: ${dir}`);
}

cpSync(connectDist, resolve(docsDist, 'connect'), { recursive: true });

// O GitHub Pages serve o 404.html da raiz para qualquer caminho inexistente — inclusive /connect/<rota>.
// Esse 404 é o SPA do JC Decor; o script abaixo roda antes dele e manda a rota para /connect/?p=…,
// onde o index.html do Connect restaura a URL com history.replaceState.
const notFound = resolve(docsDist, '404.html');
const redirect = `<script>
      (function () {
        var i = location.pathname.indexOf('/connect/');
        if (i !== -1) location.replace(location.pathname.slice(0, i) + '/connect/?p=' + encodeURIComponent(location.pathname + location.search + location.hash));
      })();
    </script>`;
const html = readFileSync(notFound, 'utf8');
if (!html.includes("indexOf('/connect/')")) {
  writeFileSync(notFound, html.replace('<head>', `<head>\n    ${redirect}`));
}
console.log('connect-docs → apps/docs/dist/connect (404.html com redirecionamento)');
