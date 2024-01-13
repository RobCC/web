const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');
// const StyleLintFormatter = require('stylelint-formatter-pretty');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const Critters = require('critters-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { IS_PROD, PATHS } = require('./constants');
const styleLoaders = require('./style-loaders');

module.exports = {
  devServer: {
    port: 1234,
    open: false,
    hot: true,
  },
  mode: IS_PROD ? 'production' : 'development',
  entry: [`${PATHS.src}/index.tsx`],
  devtool: IS_PROD ? false : 'source-map',
  context: PATHS.root,
  output: {
    path: PATHS.build,
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: '',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~': PATHS.root,
      '#': PATHS.src,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          // { loader: 'babel-loader' },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: styleLoaders,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
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
  // performance: {
  //   maxEntrypointSize: 500000,
  // },
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
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    // new StyleLintPlugin({
    //   formatter: StyleLintFormatter,
    // }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/icons/favicon.ico',
    }),
    new MiniCssExtractPlugin({ filename: 'index.css' }),
    // new Critters(),
    // new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
  ],
  watchOptions: {
    // for some systems, watching many files can result in a lot of CPU or memory usage
    // https://webpack.js.org/configuration/watch/#watchoptionsignored
    // don't use this pattern, if you have a monorepo with linked packages
    ignored: /node_modules/,
  },
};
