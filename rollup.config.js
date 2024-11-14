import typescript from "@rollup/plugin-typescript";
import flatDts from 'rollup-plugin-flat-dts';

export default [
  {
    input: "./src/index.ts",
    watch: true,
    output: [
      {
        file: "./dist/markdownItTailwind.umd.js",
        format: "umd",
        name: "markdownItTailwind",
      },
      {
        format: 'esm',
        sourcemap: true,
        file: './dist/index.ts',
        plugins: [flatDts()],
      }
    ],
    plugins: [typescript()],
  },
];
