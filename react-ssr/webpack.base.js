const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx',],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  devtool: process.env.NODE_ENV === 'development'? 'inline-source-map': false,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", [
            "@babel/preset-env", 
              { 
                "useBuiltIns": "entry", 
                "corejs": { "version": 3, "proposals": true }
              }
            ]
          ],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    ]
  }
}