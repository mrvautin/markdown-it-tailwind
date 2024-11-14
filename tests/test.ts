import { EOL } from "os";
import fs from "fs";
import path from "path";
import md from "markdown-it";
import tailwind from "../src/index";
import styles from "./styles";

it("default", () => {
  expect(md().use(tailwind).render(`# H1${EOL}${EOL}## H2`)).toEqual(
    `<h1 class="text-5xl">H1</h1>${EOL}<h2 class="text-4xl">H2</h2>${EOL}`,
  );
});

it("Styles from file", () => {
  expect(
    md().use(tailwind, { styles }).render(`# H1${EOL}${EOL}## H2`),
  ).toEqual(
    `<h1 class="text-5xl">H1</h1>${EOL}<h2 class="text-4xl">H2</h2>${EOL}`,
  );
});

it("Set classAttribute as className", () => {
  expect(
    md()
      .use(tailwind, { styles, classAttribute: "className" })
      .render(`# H1${EOL}${EOL}## H2`),
  ).toEqual(
    `<h1 className="text-5xl">H1</h1>${EOL}<h2 className="text-4xl">H2</h2>${EOL}`,
  );
});

it("Leave default classAttribute as class", () => {
  expect(
    md().use(tailwind, { styles }).render(`# H1${EOL}${EOL}## H2`),
  ).toEqual(
    `<h1 class="text-5xl">H1</h1>${EOL}<h2 class="text-4xl">H2</h2>${EOL}`,
  );
});

it("Set multiple styles on element", () => {
  expect(
    md()
      .use(tailwind, {
        styles: { h1: "text-5xl text-gray-900", h2: "text-4xl text-red-900" },
      })
      .render(`# H1${EOL}${EOL}## H2`),
  ).toEqual(
    `<h1 class="text-5xl text-gray-900">H1</h1>${EOL}<h2 class="text-4xl text-red-900">H2</h2>${EOL}`,
  );
});

it("Include unstyles elements", () => {
  expect(
    md()
      .use(tailwind, { styles: { h1: "text-5xl" } })
      .render(`# H1${EOL}${EOL}## H2`),
  ).toEqual(`<h1 class="text-5xl">H1</h1>${EOL}<h2>H2</h2>${EOL}`);
});

it("Style code block", () => {
  const codeblock = fs.readFileSync(
    path.join(__dirname, "./", "codeblock.md"),
    "utf-8",
  );
  expect(
    md()
      .use(tailwind, {
        styles: { code: "text-green-600" },
        classAttribute: "class",
      })
      .render(codeblock),
  ).toEqual(
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
