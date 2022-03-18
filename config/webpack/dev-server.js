const pc = require('picocolors');
const logSymbols = require('log-symbols');

const { PORT } = require('./constants');

module.exports = {
  host: '0.0.0.0',
  port: PORT,
  open: false,
  hot: true,
  onListening: () => {
    // eslint-disable-next-line no-console
    console.log(
      `\n${logSymbols.success}`,
      `${pc.green(pc.bold(`Running on ${process.env.NODE_ENV}`))}`,
    );
  },
};
