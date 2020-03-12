import path from "path";
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from "rollup-plugin-terser";

const isTest = (process.env.TEST === 'true');
const isProduction = (!process.env.ROLLUP_WATCH) && (!isTest);

console.log("# Rollup.js environment:");
console.log(" - TEST:", isTest);
console.log(" - PROD:", isProduction);

function getPath(_path) {
	return path.resolve(__dirname, _path);
}

export default [
	{
		input: isTest ? getPath("test/index.ts") : getPath("source/index.ts"),
		output: {
			name: undefined,
			file: isTest ? getPath("web/test.iife.js") : getPath("web/bundle.iife.js"),
			format: 'iife',
			globals: {}
		},
		external: [
			'mocha'
		],
		plugins: [
			typescript({
				verbosity: 1,
				clean: true,
				tsconfig: isTest ? getPath("tools/config/ts.test.json") : getPath("tools/config/ts.test.json"),
				tsconfigOverride: {
					compilerOptions: {
						target: "ES5",
						module: "ES6"
					}
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