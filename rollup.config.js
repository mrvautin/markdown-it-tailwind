import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "./index.js",
    watch: true,
    output: {
      file: "./dist/markdownItTailwind.umd.js",
      format: "umd",
      name: "markdownItTailwind",
    },
    plugins: [commonjs()],
  }
];
