declare module "markdown-it-tailwind" {
    import MarkdownIt from "markdown-it";
    const markdownItTailwind: (md: MarkdownIt, opts: Options) => void;
    export interface Options {
        styles: any;
        classAttribute: string;
    }
    export default markdownItTailwind;
}
