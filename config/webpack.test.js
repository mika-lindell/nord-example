var helpers = require('./helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.jsx', '.js']
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],

  module: {
    loaders: [
      {
        test : /\.jsx$/,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },

      // {
      //   test: /(\.jsx|\.js)$/,
      //   loader: "eslint-loader",
      // },

      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('css!sass') // ExtractTextPlugin will make css to its own file
      },

      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },


    ]
  }
}
