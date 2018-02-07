import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

import pkg from '../package.json';

const globals = {
	'prop-types': 'PropTypes',
	'react': 'React',
};

const babelOptions = {
	babelrc: false,
	exclude: 'node_modules/**',
	presets: [['env', {'modules': false}], 'stage-0', 'react'],
	plugins: ['external-helpers', 'transform-object-rest-spread']
};

export default [
	// UMD build
	{
		input: 'src/index.js',
		output: {
			name: 'RadarChart',
			file: pkg.unpkg,
			format: 'umd'
		},
		external: Object.keys(globals),
		globals: globals,
		plugins: [
			postcss({modules: true, extract: true, minimize: true}),
			babel(babelOptions),
			resolve(),
			uglify({}, minify)
		]
	},
	// ESM build
	{
		input: 'src/index.js',
		output: {
			name: 'RadarChart',
			file: pkg.module,
			format: 'es'
		},
		external: Object.keys(globals),
		globals: globals,
		plugins: [
			postcss({modules: true}),
			babel(babelOptions),
			resolve()
		]
	},
	// CJS build
	{
		input: 'src/index.js',
		output: {
			name: 'RadarChart',
			file: pkg.main,
			format: 'cjs'
		},
		external: Object.keys(globals),
		globals: globals,
		plugins: [
			postcss({modules: true}),
			babel(babelOptions),
			resolve(),
			commonjs()
		]
	}
];
