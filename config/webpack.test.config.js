const baseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');

const testConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
});

delete testConfig.entry;

module.exports = testConfig;
