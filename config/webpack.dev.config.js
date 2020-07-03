const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');
const { outputPath, htmlTemplatePath } = require('./index.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
  devtool: 'source-map',
  devServer: {
    contentBase: outputPath(),
    compress: true,
    open: false,
    port: '3000',
    host: 'localhost',
    hot: true,
    inline: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: htmlTemplatePath(),
    }),
  ],
});
