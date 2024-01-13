const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Sass = require('sass');

const { PATHS, IS_PROD } = require('./constants');

/**
 * From: https://www.npmjs.com/package/style-loader
 *
 * For production builds it's recommended to extract the CSSfrom your
 * bundle being able to use parallel loading of CSS/JS resources later on.
 * This can be achieved by using the mini-css-extract-plugin, because it
 * creates separate css files.
 *
 * For development mode (including webpack-dev-server) you can use
 * style-loader, because it injects CSS into the DOM using multiple
 * <style></style> and works faster.
 */

const loaders = [
  IS_PROD
    ? { loader: MiniCssExtractPlugin.loader }
    : { loader: 'style-loader' },
  {
    loader: 'css-loader',
    options: {
      importLoaders: true,
      modules: {
        exportLocalsConvention: 'camelCase',
        localIdentName: '[name]_[local]--[hash:base64:5]',
      },
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        config: path.join(__dirname, 'postcss.config.js'),
      },
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        includePaths: [`${PATHS.src}/scss`],
      },
      implementation: Sass,
    },
  },
];

module.exports = loaders;
