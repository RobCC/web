const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const StyleLintFormatter = require('stylelint-formatter-pretty');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { NODE_ENV } = process.env;
const { DEV, ROOT_PATH, SRC_PATH, BUILD_PATH } = require('./constants');
const setStyleLoaders = require('./style-loaders');
const devServer = require('./dev-server');
const alias = require('./alias');
const listeningMsg = require('./listeningMsg');

module.exports = () => ({
  devServer,
  mode: NODE_ENV,
  entry: [
    'core-js/stable',
    'regenerator-runtime/runtime',
    `${SRC_PATH}/index.tsx`,
  ],
  stats: 'errors-warnings',
  devtool: NODE_ENV === DEV ? 'source-map' : false,
  context: ROOT_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'index.js',
    pathinfo: false,
    publicPath: '',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: setStyleLoaders(NODE_ENV),
      },
      {
        test: /\.(png|pje?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|tff|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new StyleLintPlugin({
      formatter: StyleLintFormatter,
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/icons/favicon.ico',
    }),
    new MiniCssExtractPlugin({ filename: 'index.css' }),
    new CleanTerminalPlugin({
      message: listeningMsg(),
    }),
  ],
});
