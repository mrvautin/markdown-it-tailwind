const test = require("ava");
const { EOL } = require("os");
const fs = require("fs");
const path = require("path");
const md = require("markdown-it");
const tailwind = require("../index");
const styles = require("./styles");

test("default", (t) => {
  t.is(
    md().use(tailwind).render(`# H1${EOL}${EOL}## H2`),
    `<h1 class="text-5xl">H1</h1>${EOL}<h2 class="text-4xl">H2</h2>${EOL}`,
  );
});

test("Styles from file", (t) => {
  t.is(
    md().use(tailwind, { styles }).render(`# H1${EOL}${EOL}## H2`),
    `<h1 class="text-5xl">H1</h1>${EOL}<h2 class="text-4xl">H2</h2>${EOL}`,
  );
});

test("Set classAttribute as className", (t) => {
  t.is(
    md()
      .use(tailwind, { styles, classAttribute: "className" })
      .render(`# H1${EOL}${EOL}## H2`),
    `<h1 className="text-5xl">H1</h1>${EOL}<h2 className="text-4xl">H2</h2>${EOL}`,
  );
});

test("Leave default classAttribute as class", (t) => {
  t.is(
    md().use(tailwind, { styles }).render(`# H1${EOL}${EOL}## H2`),
    `<h1 class="text-5xl">H1</h1>${EOL}<h2 class="text-4xl">H2</h2>${EOL}`,
  );
});

test("Set multiple styles on element", (t) => {
  t.is(
    md()
      .use(tailwind, {
        styles: { h1: "text-5xl text-gray-900", h2: "text-4xl text-red-900" },
      })
      .render(`# H1${EOL}${EOL}## H2`),
    `<h1 class="text-5xl text-gray-900">H1</h1>${EOL}<h2 class="text-4xl text-red-900">H2</h2>${EOL}`,
  );
});

test("Include unstyles elements", (t) => {
  t.is(
    md()
      .use(tailwind, { styles: { h1: "text-5xl" } })
      .render(`# H1${EOL}${EOL}## H2`),
    `<h1 class="text-5xl">H1</h1>${EOL}<h2>H2</h2>${EOL}`,
  );
});

test("Style code block", (t) => {
  const codeblock = fs.readFileSync(
    path.join(__dirname, "./", "codeblock.md"),
    "utf-8",
  );
  t.is(
    md()
      .use(tailwind, {
        styles: { code: "text-green-600" },
        classAttribute: "class",
      })
      .render(codeblock),
    `<pre><code class="text-green-600 language-javascript">qwertyWysiwyg += 856673 / status;
boot = dslamOutput(storage_yahoo + ethicsOlap);
hdtv_widget.extension(1 + 4, bankruptcy);
if (redundancy + wildcard_digital_unicode) {
  newbie_character.multithreading /= soaUs;
  telecommunications -= thunderbolt;
} else {
  sequenceFat.smart_servlet +=
    dynamicUri.utilityViewAgp(1) - network_ipv_system + backside;
}
</code></pre>
`,
  );
});
