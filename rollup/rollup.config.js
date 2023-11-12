import html from '@rollup/plugin-html';
import image from '@rollup/plugin-image';
import css from 'rollup-plugin-css-only';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    css({ output: 'bundle.css' }),
    copy({
      targets: [
        {
          src: 'src/assets/**/*',
          dest: 'dist/assets'
        }
      ]
    }),
    image(),
    html({
      meta: [
        { charset: 'UTF-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        }
      ],
      title: 'CF Shops'
    })
  ]
};
