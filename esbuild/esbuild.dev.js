import esbuildServe from 'esbuild-serve';

try {
  await esbuildServe(
    {
      entryPoints: ['./src/index.tsx'],
      bundle: true,
      minify: true,
      sourcemap: true,
      outdir: './dist',
      define: {
        'process.env.NODE_ENV': '"development"',
        'process.env.DEBUG': 'false'
      }
    },
    {
      port: 3002,
      root: 'dist'
    }
  );
} catch { process.exit(1); }
