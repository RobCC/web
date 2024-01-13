const Autoprefixer = require('autoprefixer');
const CssNano = require('cssnano');

const { IS_PROD } = require('./constants');

const plugins = IS_PROD ? [Autoprefixer, CssNano] : [];

module.exports = plugins;
