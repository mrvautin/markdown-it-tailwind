# markdown-it-tailwind

> A markdown-it plugin that adds tailwind classes to HTML elements

[markdown-it]: https://github.com/markdown-it/markdown-it

## Overview

This plugin adds default tailwind classes to HTML elements to make your markdown look great.

## Usage

```js
const md = require('markdown-it');
const tailwind = require("markdown-it-tailwind");
md().use(tailwind, { styles: {}, classAttribute: "className" }).render("# H1\n\n## H2");
```

## Options

The `opts` object can contain:

| Name                   | Description                                                               |
| ---------------------- | ------------------------------------------------------------------------- | 
| `styles`               | Object. Comes with a set of defaults which are overwritten.               |
| `classAttribute`       | Defaults to `class`. Can also be `className` in React component.          |

## Styles

The styles object is list of Tailwind classes to be set for each element. The default style is set as:

```
styles: {
  h1: "text-5xl",
  h2: "text-4xl",
  h3: "text-3xl",
  h4: "text-2xl",
  h5: "text-xl",
  h6: "text-lg",
}
```

## Development

```sh
# Build the library in the `dist/` directory.
npm run build

# Watch file changes to update `dist/`.
npm run dev

# Run tests
npm run test
```
