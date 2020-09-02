const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'redux-algolia',
    libraryTarget: 'commonjs2'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          babelrc: true
        },
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    port: 8080,
  }
};