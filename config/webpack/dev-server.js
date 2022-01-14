const pc = require('picocolors');
const logSymbols = require('log-symbols');

const { PORT, BUILD_PATH, ROOT_PATH } = require('./constants');

module.exports = {
  //   contentBase: BUILD_PATH,
  host: '0.0.0.0',
  // publicPath: '/',
  port: PORT,
  open: false,
  hot: true,
  historyApiFallback: true,
  onListening: () => {
    // eslint-disable-next-line no-console
    console.log(
      `\n${logSymbols.success}`,
      `${pc.green(pc.bold(`Running on ${process.env.NODE_ENV}`))}`,
    );
  },
};
