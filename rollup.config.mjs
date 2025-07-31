import resolve from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import sass from "sass";
import path from "path";

import packageJson from "./package.json" with { type: "json" };

const __dirname = path.resolve();

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      alias({
        entries: [
          { find: '@', replacement: path.resolve(__dirname, 'src') }
        ]
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        minimize: true,
        include: /\.module\.scss$/,
        extensions: ['.scss'],
        modules: {
          localsConvention: "camelCaseOnly",
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
        use: [
          ['sass', { implementation: sass }]
        ],
        extract: 'module.css',
        sourceMap: true,
      }),
      terser(),
      // scss({ output: "dist/index.css", failOnError: true, runtime: scss })
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts({
      tsconfig: "./tsconfig.json"
    })],
    external: [/\.(css|less|scss)$/],
  },
];