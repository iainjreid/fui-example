const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.CI ? 'production' : 'development',
  entry: './src/main/app.js',
  devServer: {
    contentBase: './dist'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin([
      'dist'
    ]),
    new HtmlWebpackPlugin({
      title: 'Fui Example'
    })
  ]
};
