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

module.exports = markdownItTailwind;
