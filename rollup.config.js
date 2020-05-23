import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import external from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

process.env.NODE_ENV = 'production';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: 'capitalroadkit',
    },
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    external({
      includeDependencies: true,
    }),
    url({
      include: ['**/*.ico', '**/*.jpg', '**/*.svg'],
      limit: 9999999,
    }),
    resolve(),
    babel({
      presets: [
        'react-app',
      ],
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    commonjs(),
  ],
};
