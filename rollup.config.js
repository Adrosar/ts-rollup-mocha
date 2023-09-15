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

function root(..._args) {
	return path.resolve(__dirname, ..._args);
}

export default [
	{
		input: isTest ? root("test", "index.ts") : root("source", "index.ts"),
		output: {
			name: undefined,
			file: isTest ? root("web", "test.iife.js") : root("web", "bundle.iife.js"),
			format: 'iife',
			globals: {}
		},
		external: [
			'mocha'
		],
		plugins: [
			typescript({
				tsconfig: root("tsconfig.json"),
				tslib: require.resolve('tslib'),
				compilerOptions: {
					target: "ES5",
					module: "ES6"
				}

			}),
			nodeResolve(),
			commonjs(),
			isProduction && terser({
				ecma: 5,
				ie8: true,
				safari10: true,
				warnings: true
			})
		]
	}
];