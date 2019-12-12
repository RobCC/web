const chalk = require('chalk');
const logSymbols = require('log-symbols');

const { log } = console;

const { PORT, BUILD_PATH, ROOT_PATH } = require('./constants');

module.exports = {
  contentBase: BUILD_PATH,
  host: '0.0.0.0',
  publicPath: '/',
  port: PORT,
  open: false,
  overlay: false,
  hot: true,
  inline: true,
  clientLogLevel: 'silent',
  // noInfo: true,
  historyApiFallback: true,
  stats: {
    all: undefined,
    assets: false,
    children: false,
    moduleTrace: false,
    chunk: false,
    chunkGroups: false,
    chunkModules: false,
    chunkOrigins: false,
    context: ROOT_PATH,
    entrypoints: false,
    env: false,
    hash: false,
    modules: false,
    logging: 'warn',
    outputPath: false,
    publicPath: false,
    usedExports: false,
    version: false,
  },
  onListening: () => {
    log(
      `\n${logSymbols.success}`,
      `${chalk.green.bold(`Running on ${process.env.NODE_ENV}`)}`,
    );
  },
};
