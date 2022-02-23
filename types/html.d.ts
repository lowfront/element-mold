export type CSSStylePartial = Partial<
  Record<keyof CSSStyleDeclaration, unknown>
>;
export type HTMLProperties<T> = Partial<{
  [K in keyof T]: K extends "style"
    ? CSSStylePartial
    : K extends "children"
    ? (string | Node)[]
    : K extends "class"
    ? string
    : T[K];
}>;

export type HTMLElementTagNameMapExtra<K extends keyof HTMLElementTagNameMap> =
  HTMLElementTagNameMap[K] & {};
export type SVGElementTagNameMapExtra<K extends keyof SVGElementTagNameMap> =
  SVGElementTagNameMap[K] & {};

type HTMLElementFactory<K extends keyof HTMLElementTagNameMap> = (
  ...properties: (
    | HTMLProperties<HTMLElementTagNameMapExtra<K>>
    | (string | Node)[]
    | string
  )[]
) => HTMLElementTagNameMap[K];

export const a: HTMLElementFactory<"a">;
export const aTag: HTMLElementFactory<"a">;
export const abbr: HTMLElementFactory<"abbr">;
export const address: HTMLElementFactory<"address">;
export const applet: HTMLElementFactory<any>;
export const area: HTMLElementFactory<"area">;
export const article: HTMLElementFactory<"article">;
export const aside: HTMLElementFactory<"aside">;
export const audio: HTMLElementFactory<"audio">;
export const b: HTMLElementFactory<"b">;
export const bTag: typeof b;
export const base: HTMLElementFactory<"base">;
export const bdi: HTMLElementFactory<"bdi">;
export const bdo: HTMLElementFactory<"bdo">;
export const blockquote: HTMLElementFactory<"blockquote">;
export const body: HTMLElementFactory<"body">;
export const br: HTMLElementFactory<"br">;
export const button: HTMLElementFactory<"button">;
export const canvas: HTMLElementFactory<"canvas">;
export const caption: HTMLElementFactory<"caption">;
export const cite: HTMLElementFactory<"cite">;
export const code: HTMLElementFactory<"code">;
export const col: HTMLElementFactory<"col">;
export const colgroup: HTMLElementFactory<"colgroup">;
export const data: HTMLElementFactory<"data">;
export const datalist: HTMLElementFactory<"datalist">;
export const dd: HTMLElementFactory<"dd">;
export const del: HTMLElementFactory<"del">;
export const details: HTMLElementFactory<"details">;
export const dfn: HTMLElementFactory<"dfn">;
export const dialog: HTMLElementFactory<"dialog">;
export const dir: HTMLElementFactory<"dir">;
export const div: HTMLElementFactory<"div">;
export const dl: HTMLElementFactory<"dl">;
export const dt: HTMLElementFactory<"dt">;
export const em: HTMLElementFactory<"em">;
export const embed: HTMLElementFactory<"embed">;
export const fieldset: HTMLElementFactory<"fieldset">;
export const figcaption: HTMLElementFactory<"figcaption">;
export const figure: HTMLElementFactory<"figure">;
export const font: HTMLElementFactory<"font">;
export const footer: HTMLElementFactory<"footer">;
export const form: HTMLElementFactory<"form">;
export const frame: HTMLElementFactory<"frame">;
export const frameset: HTMLElementFactory<"frameset">;
export const h1: HTMLElementFactory<"h1">;
export const h2: HTMLElementFactory<"h2">;
export const h3: HTMLElementFactory<"h3">;
export const h4: HTMLElementFactory<"h4">;
export const h5: HTMLElementFactory<"h5">;
export const h6: HTMLElementFactory<"h6">;
export const head: HTMLElementFactory<"head">;
export const header: HTMLElementFactory<"header">;
export const hgroup: HTMLElementFactory<"hgroup">;
export const hr: HTMLElementFactory<"hr">;
export const html: HTMLElementFactory<"html">;
export const i: HTMLElementFactory<"i">;
export const iTag: typeof i;
export const iframe: HTMLElementFactory<"iframe">;
export const img: HTMLElementFactory<"img">;
export const input: HTMLElementFactory<"input">;
export const ins: HTMLElementFactory<"ins">;
export const kbd: HTMLElementFactory<"kbd">;
export const label: HTMLElementFactory<"label">;
export const legend: HTMLElementFactory<"legend">;
export const li: HTMLElementFactory<"li">;
export const link: HTMLElementFactory<"link">;
export const main: HTMLElementFactory<"main">;
export const map: HTMLElementFactory<"map">;
export const mark: HTMLElementFactory<"mark">;
export const marquee: HTMLElementFactory<"marquee">;
export const menu: HTMLElementFactory<"menu">;
export const meta: HTMLElementFactory<"meta">;
export const meter: HTMLElementFactory<"meter">;
export const nav: HTMLElementFactory<"nav">;
export const noscript: HTMLElementFactory<"noscript">;
export const object: HTMLElementFactory<"object">;
export const objectTag: typeof object;
export const ol: HTMLElementFactory<"ol">;
export const optgroup: HTMLElementFactory<"optgroup">;
export const option: HTMLElementFactory<"option">;
export const output: HTMLElementFactory<"output">;
export const p: HTMLElementFactory<"p">;
export const pTag: typeof p;
export const param: HTMLElementFactory<"param">;
export const picture: HTMLElementFactory<"picture">;
export const pre: HTMLElementFactory<"pre">;
export const progress: HTMLElementFactory<"progress">;
export const q: HTMLElementFactory<"q">;
export const qTag: typeof q;
export const rp: HTMLElementFactory<"rp">;
export const rt: HTMLElementFactory<"rt">;
export const ruby: HTMLElementFactory<"ruby">;
export const s: HTMLElementFactory<"s">;
export const sTag: typeof s;
export const samp: HTMLElementFactory<"samp">;
export const script: HTMLElementFactory<"script">;
export const section: HTMLElementFactory<"section">;
export const select: HTMLElementFactory<"select">;
export const slot: HTMLElementFactory<"slot">;
export const small: HTMLElementFactory<"small">;
export const source: HTMLElementFactory<"source">;
export const span: HTMLElementFactory<"span">;
export const strong: HTMLElementFactory<"strong">;
export const style: HTMLElementFactory<"style">;
export const sub: HTMLElementFactory<"sub">;
export const summary: HTMLElementFactory<"summary">;
export const sup: HTMLElementFactory<"sup">;
export const table: HTMLElementFactory<"table">;
export const tbody: HTMLElementFactory<"tbody">;
export const td: HTMLElementFactory<"td">;
export const template: HTMLElementFactory<"template">;
export const textarea: HTMLElementFactory<"textarea">;
export const tfoot: HTMLElementFactory<"tfoot">;
export const th: HTMLElementFactory<"th">;
export const thead: HTMLElementFactory<"thead">;
export const time: HTMLElementFactory<"time">;
export const title: HTMLElementFactory<"title">;
export const tr: HTMLElementFactory<"tr">;
export const track: HTMLElementFactory<"track">;
export const u: HTMLElementFactory<"u">;
export const uTag: typeof u;
export const ul: HTMLElementFactory<"ul">;
export const varTag: HTMLElementFactory<"var">;
export const video: HTMLElementFactory<"video">;
export const wbr: HTMLElementFactory<"wbr">;
