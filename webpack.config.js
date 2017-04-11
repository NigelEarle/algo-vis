const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/app.js',
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [nodeModulesPath],
        loaders: ['react-hot-loader', 'babel-loader'],
        include: path.join(__dirname, 'src'),
      }
    ]
  }
};
