var path = require("path");
var distDir = path.join(__dirname, '/dist/');
var sourceDir = path.join(__dirname, '/src');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: sourceDir,
  output: {
    filename: 'bundle.js',
    path: distDir,
    publicPath: "/"
  },
  devServer: {
    contentBase: distDir
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.png$/, loader: 'url-loader?prefix=img/&limit=5000' },
      { test: /\.jpg$/, loader: 'url-loader?prefix=img/&limit=5000' },
      { test: /\.gif$/, loader: 'url-loader?prefix=img/&limit=5000' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      {
        test: /\.less/,
        exclude: /node_modules/,
        loaders: [ 'style', 'css', 'less' ]
      }

    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
