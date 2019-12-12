const chalk = require('chalk');
const logSymbols = require('log-symbols');
const internalIp = require('internal-ip');

const { PORT } = require('./constants');

module.exports = () => {
  const LOCAL = chalk.gray('｢loc｣:');
  const INT = chalk.gray('｢int｣:');
  const localIp = `http://localhost:${PORT}`;
  const intIp = `http://${internalIp.v4.sync()}:${PORT}`;
  const top = '┌───────────────────────────────────────┐';
  const bottom = '└───────────────────────────────────────┘';

  const lineInternal = `│ ${logSymbols.info} ${LOCAL} ${localIp}\t│`;
  const lineExternal = `│ ${logSymbols.info} ${INT} ${intIp}\t│`;

  return `${top}\n${lineInternal}\n${lineExternal}\n${bottom}`;
};
