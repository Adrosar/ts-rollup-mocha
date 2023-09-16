import path from "path";
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";

const isTest = (process.env.TEST === 'true');
const isProduction = (!process.env.ROLLUP_WATCH) && (!isTest);

console.log("# Rollup.js environment:");
console.log(" - TEST:", isTest);
console.log(" - PROD:", isProduction);

function createAbsPath(..._args) {
	return path.resolve(__dirname, ..._args);
}

export default [
	{
		input: isTest ? createAbsPath("test", "index.ts") : createAbsPath("source", "index.ts"),
		output: {
			name: isTest ? undefined : 'myLib',
			file: isTest ? createAbsPath("web", "test.iife.js") : createAbsPath("web", "bundle.iife.js"),
			format: 'iife',
			globals: {}
		},
		external: [
			'mocha'
		],
		plugins: [
			typescript({
				tsconfig: createAbsPath("tsconfig.json"),
				tslib: require.resolve('tslib'),
				compilerOptions: {
					target: "ES5",
					module: "ES6"
				}

			}),
			nodeResolve(),
			commonjs(),
			isProduction && terser({
				output: {
					comments: false,
					beautify: false,
					webkit: true,
				},
				mangle: {
					properties: {
						regex: /^\_.+\$\d$/,
					},
				},
				ecma: 5,
				ie8: true,
				safari10: true,
				warnings: true,
			})
		]
	}
];