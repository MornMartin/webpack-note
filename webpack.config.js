
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/doc-2-example/html-loader.index.js',
  output: {
    path: path.resolve(__dirname, 'dist/doc-2-example'),
    filename: 'webpack.bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.(html)$/,
            use: [ 'html-loader' ]
        }
    ]
  }
};