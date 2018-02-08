import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'


import pkg from '../package.json'


const babelOptions = {
	babelrc: false,
	exclude: 'node_modules/**',
  presets: [['env', {'modules': false}], 'stage-0', 'react'],
  plugins: ['external-helpers', 'transform-object-rest-spread', 'transform-runtime'],
  runtimeHelpers: true
};

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: [
    'react',
    'react-dom',
    'prop-types'
  ],
  plugins: [
    postcss({
      modules: true
    }),
    babel(babelOptions),
    resolve(),
    commonjs(),
  ]
}












