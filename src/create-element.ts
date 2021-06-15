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

const createElement = (tagName: any, ...properties: any): any => {
  const last = properties[properties.length - 1];
  let sliceIndex = properties.length
  let children: (string|Node)[] = [];
  if (Array.isArray(last)) {
    children = last;
    sliceIndex = -1;
  } else if (typeof last === 'string' || last instanceof Element) {
    children = [last];
    sliceIndex = -1;
  }
  const styles = {};
  const el: HTMLElement|SVGElement = Object.assign(document.createElement(tagName), ...properties.slice(0, sliceIndex).map(({style, ...properties}: any) => {
    Object.assign(styles, style);
    return properties;
  }));
  Object.assign(el.style, styles);
  el.append(...children);

  return el;
};

export default createElement;