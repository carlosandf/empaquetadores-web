import fs from 'node:fs/promises';
import { HTMLTag } from './HTMLTag.js';
import path from 'node:path';

async function readHtml (path) {
  try {
    const html = await fs.readFile(path, 'utf8');
    return html;
  } catch {
    console.error(`Could not find ${path}`);
    return null;
  }
}

export function addTagsToHeadTag ({ html = null, tags = [] }) {
  if (html) {
    const elements = html.split('\r').join('').split('\n');
    const openHeadTagIndex = elements.findIndex(element => element === '<head>');
    const closeHeadTagIndex = elements.findIndex(element => element === '</head>');

    const contentHeadTag = elements.slice(openHeadTagIndex + 1, closeHeadTagIndex);
    elements.splice(openHeadTagIndex + 1, closeHeadTagIndex - 3, ...[...contentHeadTag, ...tags]);

    return elements.join('\n');
  } else {
    throw new Error('No HTML file found!');
  }
}

function createHtmlFile (path, html) {
  fs.writeFile(path, html)
    .catch(error => console.error(error));
}

export function htmlEsbuildPlugin ({
  template = '',
  outFile = 'index.html',
  defer = true
}) {
  return {
    name: 'html-esbuild-plugin',
    setup: async (build) => {
      const {
        // absWorkingDir: basedir = process.cwd(),
        outdir
      } = build.initialOptions;

      build.onEnd(async (result) => {
        try {
          const html = await readHtml(template);
          const filesPaths = Object.keys(result.metafile.outputs);
          const tags = [];
          for (const fileName of filesPaths) {
            // create script tag
            if (fileName.includes('.js')) {
              const tag = new HTMLTag('script');
              tag.setAttribute('src', path.relative(outdir, fileName));
              defer && tag.setAttribute('defer', defer);
              tags.push(tag.getElement());
            }
            // create Link css tag
            if (fileName.includes('.css')) {
              const tag = new HTMLTag('link');
              tag.setAttribute('href', path.relative(outdir, fileName));
              tag.setAttribute('rel', 'stylesheet');
              tags.push(tag.getElement());
            }
          }

          // create HTML file
          const newHtml = addTagsToHeadTag({ html, tags });
          createHtmlFile(`${outdir}/${outFile}`, newHtml);
        } catch (err) {
          console.error({ err });
        }
      });
    }
  };
}
