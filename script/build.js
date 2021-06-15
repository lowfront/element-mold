const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');
execSync('tsc');

fs.copyFileSync(path.resolve(__dirname, '../types/html.d.ts'), path.resolve(__dirname, '../dist/html.d.ts'));
fs.copyFileSync(path.resolve(__dirname, '../types/svg.d.ts'), path.resolve(__dirname, '../dist/svg.d.ts'));
