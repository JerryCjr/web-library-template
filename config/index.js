const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

function entryPath() {
  // return path.join(__dirname, "/src/hmr/hmrtest.js");
  return resolve('src/index.ts');
}

function outputPath() {
  return resolve('dist');
}

function htmlTemplatePath() {
  return resolve('public/index.html');
}

module.exports = {
  entryPath,
  outputPath,
  htmlTemplatePath,
};
