const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const StyleLintFormatter = require('stylelint-formatter-pretty');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { NODE_ENV } = process.env;
const { DEV, ROOT_PATH, SRC_PATH, BUILD_PATH } = require('./constants');
const setStyleLoaders = require('./style-loaders');
const alias = require('./alias');

module.exports = () => ({
  devServer: {
    port: 1234,
    open: false,
    hot: true,
  },
  mode: NODE_ENV,
  entry: [`${SRC_PATH}/index.tsx`],
  stats: 'errors-warnings',
  devtool: NODE_ENV === DEV ? 'source-map' : false,
  context: ROOT_PATH,
  output: {
    path: BUILD_PATH,
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
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
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|tff|otf|eot)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(txt|md)/,
        type: 'asset/source',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
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
    // new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
  ],
});
