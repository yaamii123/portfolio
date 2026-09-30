import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { projects, siteConfig } from './src/data/portfolio';
import { en } from './src/i18n/en';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * The site is a client-rendered SPA, so link-preview crawlers only ever see the
 * tags in index.html. After the build, emit a copy of index.html per project at
 * dist/projects/<id>/index.html with that project's title, description and URL.
 * Hosts serve real files before falling back to the SPA rewrite, and React
 * Router still takes over in the browser.
 */
function projectPages(): Plugin {
  let outDir = 'dist';
  return {
    name: 'project-pages',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf-8');

      for (const project of projects) {
        const content = en.projects.items[project.id];
        if (!content) continue;

        const title = escapeAttr(`${content.title} | ${siteConfig.name}`);
        const description = escapeAttr(content.description);
        const url = `${siteConfig.siteUrl}/projects/${project.id}`;

        const html = template
          .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
          .replace(/(<meta\s+name="description"\s+content=")[^"]*"/, `$1${description}"`)
          .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
          .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${title}"`)
          .replace(/(<meta\s+property="og:description"\s+content=")[^"]*"/, `$1${description}"`)
          .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
          .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${title}"`)
          .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*"/, `$1${description}"`);

        const dir = path.join(outDir, 'projects', project.id);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), html);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), projectPages()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
