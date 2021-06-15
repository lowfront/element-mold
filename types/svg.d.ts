export type CSSStylePartial = Partial<Record<keyof CSSStyleDeclaration, unknown>>;
export type HTMLProperties<T> = Partial<{
  [K in keyof T]: K extends 'style' ? CSSStylePartial : 
    K extends 'children' ? (string | Node)[] : 
    K extends 'class' ? string :
    T[K];
}>;

export type HTMLElementTagNameMapExtra<K extends keyof HTMLElementTagNameMap> = HTMLElementTagNameMap[K] & 
  {};
export type SVGElementTagNameMapExtra<K extends keyof SVGElementTagNameMap> = SVGElementTagNameMap[K] & 
  {};

type SVGElementFactory<K extends keyof SVGElementTagNameMap> = (...properties: (HTMLProperties<SVGElementTagNameMapExtra<K>>|(string|Node)[])[]) => SVGElementTagNameMap[K];

export const a: SVGElementFactory<"a">;
export const aTag: typeof a;
export const circle: SVGElementFactory<"circle">;
export const clipPath: SVGElementFactory<"clipPath">;
export const defs: SVGElementFactory<"defs">;
export const desc: SVGElementFactory<"desc">;
export const ellipse: SVGElementFactory<"ellipse">;
export const feBlend: SVGElementFactory<"feBlend">;
export const feColorMatrix: SVGElementFactory<"feColorMatrix">;
export const feComponentTransfer: SVGElementFactory<"feComponentTransfer">;
export const feComposite: SVGElementFactory<"feComposite">;
export const feConvolveMatrix: SVGElementFactory<"feConvolveMatrix">;
export const feDiffuseLighting: SVGElementFactory<"feDiffuseLighting">;
export const feDisplacementMap: SVGElementFactory<"feDisplacementMap">;
export const feDistantLight: SVGElementFactory<"feDistantLight">;
export const feFlood: SVGElementFactory<"feFlood">;
export const feFuncA: SVGElementFactory<"feFuncA">;
export const feFuncB: SVGElementFactory<"feFuncB">;
export const feFuncG: SVGElementFactory<"feFuncG">;
export const feFuncR: SVGElementFactory<"feFuncR">;
export const feGaussianBlur: SVGElementFactory<"feGaussianBlur">;
export const feImage: SVGElementFactory<"feImage">;
export const feMerge: SVGElementFactory<"feMerge">;
export const feMergeNode: SVGElementFactory<"feMergeNode">;
export const feMorphology: SVGElementFactory<"feMorphology">;
export const feOffset: SVGElementFactory<"feOffset">;
export const fePointLight: SVGElementFactory<"fePointLight">;
export const feSpecularLighting: SVGElementFactory<"feSpecularLighting">;
export const feSpotLight: SVGElementFactory<"feSpotLight">;
export const feTile: SVGElementFactory<"feTile">;
export const feTurbulence: SVGElementFactory<"feTurbulence">;
export const filter: SVGElementFactory<"filter">;
export const foreignObject: SVGElementFactory<"foreignObject">;
export const g: SVGElementFactory<"g">;
export const gTag: typeof g;
export const image: SVGElementFactory<"image">;
export const line: SVGElementFactory<"line">;
export const linearGradient: SVGElementFactory<"linearGradient">;
export const marker: SVGElementFactory<"marker">;
export const mask: SVGElementFactory<"mask">;
export const metadata: SVGElementFactory<"metadata">;
export const path: SVGElementFactory<"path">;
export const pattern: SVGElementFactory<"pattern">;
export const polygon: SVGElementFactory<"polygon">;
export const polyline: SVGElementFactory<"polyline">;
export const radialGradient: SVGElementFactory<"radialGradient">;
export const rect: SVGElementFactory<"rect">;
export const script: SVGElementFactory<"script">;
export const stop: SVGElementFactory<"stop">;
export const style: SVGElementFactory<"style">;
export const svg: SVGElementFactory<"svg">;
export const switchTag: SVGElementFactory<"switch">;
export const symbol: SVGElementFactory<"symbol">;
export const text: SVGElementFactory<"text">;
export const textPath: SVGElementFactory<"textPath">;
export const title: SVGElementFactory<"title">;
export const tspan: SVGElementFactory<"tspan">;
export const use: SVGElementFactory<"use">;
export const view: SVGElementFactory<"view">;
