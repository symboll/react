const path = require('path')
const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const base = require('./webpack.base')

const server = {
  mode: 'development',
  target: 'node',
  entry: "./src/server/index.js",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [ nodeExternals() ]
}

module.exports = merge(base, server)