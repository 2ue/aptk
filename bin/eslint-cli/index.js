const defaultConfig = require('../../config/eslint-cli');

const cli = (config) => {
  const options = { ...defaultConfig, ...config };
  console.table(options);
};

module.exports = cli;
