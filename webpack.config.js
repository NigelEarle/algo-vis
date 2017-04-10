const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: path.join(__dirname, 'src'),
      }
    ]
  }
};
