
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const manifest = JSON.parse(
    fs.readFileSync(toAbsolute('dist/client/.vite/ssr-manifest.json'), 'utf-8'),
);
const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

const { html } = render();

const appHtml = html;

const htmlWithApp = template.replace(`<!--app-html-->`, appHtml);

const filePath = `dist/client/index.html`;
fs.writeFileSync(toAbsolute(filePath), htmlWithApp);
console.log('Pre-rendered:', filePath);
