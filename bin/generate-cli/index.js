const defaultConfig = require('../../config/generate-cli');

const cli = (config) => {
  const options = { ...defaultConfig, ...config };
  console.table(options);
};

module.exports = cli;
