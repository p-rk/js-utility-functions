const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'js-utility-functions',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.js/,
        exclude: /(node_modules|__tests__)/,
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};
