(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
      ? define(factory)
      : ((global =
          typeof globalThis !== "undefined" ? globalThis : global || self),
        (global.markdownItTailwind = factory()));
})(this, function () {
  "use strict";

  function getDefaultExportFromCjs(x) {
    return x &&
      x.__esModule &&
      Object.prototype.hasOwnProperty.call(x, "default")
      ? x["default"]
      : x;
  }

  var markdownItTailwind_1;
  var hasRequiredMarkdownItTailwind;

  function requireMarkdownItTailwind() {
    if (hasRequiredMarkdownItTailwind) return markdownItTailwind_1;
    hasRequiredMarkdownItTailwind = 1;
    const moduleDefaults = {
      classAttribute: "class",
      styles: {
        h1: "text-5xl",
        h2: "text-4xl",
        h3: "text-3xl",
        h4: "text-2xl",
        h5: "text-xl",
        h6: "text-lg",
      },
    };

    let defaults;

    const markdownItTailwind = (md, opts) => {
      defaults = Object.assign({}, moduleDefaults, opts);
      md.core.ruler.push("markdownItTailwind", processElement);
    };

    const getStyle = (token) => {
      return defaults.styles[token.tag] || "";
    };

    const addStyle = (token) => {
      // If there are inline tokens with children, loop them
      if (token.children && token.children.length > 0) {
        for (const child of token.children) {
          const style = getStyle(child);
          if (style) {
            setStyle(style, child);
          }
        }
      } else {
        // Set single token
        const style = getStyle(token);
        if (style) {
          setStyle(style, token);
        }
      }
    };

    // Set the class attribute
    const setStyle = (style, token) => {
      if (token.attrGet(defaults.classAttribute)) {
        style = ";" + style;
        token.attrJoin(defaults.classAttribute, style);
      } else {
        token.attrPush([defaults.classAttribute, style]);
      }
    };

    // Process the element/token
    function processElement(state) {
      state.tokens.forEach((token) => {
        if (
          /_open$/.test(token.type) ||
          token.type === "fence" ||
          token.type === "inline"
        ) {
          addStyle(token);
        }
      });
    }

    markdownItTailwind_1 = markdownItTailwind;
    return markdownItTailwind_1;
  }

  var markdownItTailwindExports = requireMarkdownItTailwind();
  var index = /*@__PURE__*/ getDefaultExportFromCjs(markdownItTailwindExports);

  return index;
});
