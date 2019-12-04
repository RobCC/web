const path = require('path');

const src = path.resolve(__dirname, '../../src');
const components = path.resolve(__dirname, '../../src/components');
const root = path.resolve(__dirname, '../..');

module.exports = {
  '#': src,
  '~': root,
  Components: components,
};
