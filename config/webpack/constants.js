const path = require('path');

module.exports = {
  DEV: 'development',
  PROD: 'production',
  PORT: 1234,
  ROOT_PATH: path.resolve(__dirname, '../../'),
  CONFIG_PATH: path.resolve(__dirname, '../'),
  SRC_PATH: path.resolve(__dirname, '../../src'),
  BUILD_PATH: path.resolve(__dirname, '../../build'),
};
