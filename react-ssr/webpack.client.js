const path = require('path')
const { merge } = require('webpack-merge')
const base = require('./webpack.base')

const client = {
  mode: 'development',
  entry: "./src/client/index.js",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
}

module.exports = merge(base, client)