#!/usr/bin/env node

const utils = require('../utils');

const name = utils.params.name;

if (name) {
  const config = require(`../config/${name}-cli`);
  const cli = require(`./${name}-cli`);
  cli(config);
} else {
  console.error('请输入命令行名称！');
}
