const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { entryPath, outputPath } = require('./index.js');

module.exports = {
  entry: entryPath(),
  output: {
    filename: 'index.js',
    path: outputPath(),
    library: 'webLibrary', // library name
    libraryTarget: 'umd', // cmd amd var
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true },
          },
          { loader: 'ts-loader' },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [new CleanWebpackPlugin()],
};
