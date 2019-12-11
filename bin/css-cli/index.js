const defaultConfig = require('../../config/css-cli');

const cli = (config) => {
  const options = { ...defaultConfig, ...config };
  console.table(options);
};

module.exports = cli;
