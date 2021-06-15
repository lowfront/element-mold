# Element mold
A collection of simple HTML/SVG Element generation functions. Supports typescript!

## example
```js
import {section, h1, div, span, b} from 'element-mold/dist/html';

let ref1, ref2;
const refSection = section({className: 'container'}, [
  ref1 = h1('Heading Text'), 
  ref2 = div({className: 'container-body'}, [
    'test',
    span({}, [
      ' text',
      b('bold'),
      ' text',
    ]),
  ]),
]);

console.log(refSection, ref1, ref2);
```