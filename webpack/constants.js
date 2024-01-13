const path = require('path');

const IS_PROD = process.env.NODE_ENV === 'production';

const root = path.resolve(__dirname, '../');

const PATHS = {
  root,
  src: path.resolve(root, 'src'),
  build: path.resolve(root, 'build'),
};

module.exports = {
  IS_PROD,
  PATHS,
};
