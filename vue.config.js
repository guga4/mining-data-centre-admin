const path = require('path');
const webpack = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV == 'production' ? '/admin-assets' : '/',
  outputDir: '../bitcoin-converter/public/admin-assets',
  indexPath: '../../resources/views/admin.blade.php',
}