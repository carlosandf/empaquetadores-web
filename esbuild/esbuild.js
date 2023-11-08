import { build } from 'esbuild';
import { htmlEsbuildPlugin } from './utils/html-plugin/index.js';

try {
  await build({
    entryPoints: ['./src/index.tsx'],
    bundle: true,
    minify: true,
    outdir: './dist',
    metafile: true,
    plugins: [
      htmlEsbuildPlugin({
        template: './public/index.html'
      })
    ]
  });
} catch { process.exit(1); }
