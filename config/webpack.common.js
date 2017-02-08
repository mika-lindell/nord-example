var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.jsx',
    'vendor': './src/vendor.jsx',
    'app': './src/index.jsx'
  },

  resolve: {
    extensions: ['','.jsx', '.js']
  },

  module: {
    loaders : [
      {
        test : /\.jsx$/,
        include : helpers.root('src'),
        loader : 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },

      // {
      //   test: /(\.jsx|\.js)$/,
      //   loader: "eslint-loader",
      //   exclude: /node_modules/
      // },

      {
        test: /\.(scss|css)$/,
        include : helpers.root('src'),
        loader: ExtractTextPlugin.extract('css!sass') // ExtractTextPlugin will make css to its own file
      },

      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      }

      // {
      //   test: /tests.*_test\.jsx$/,
      //   loader: 'mocha-loader!babel-loader'
      // },
      // {
      //   test: /node_modules\/(jsdom|node-fetch)/,
      //   loader: 'null-loader'
      // }]
    ]
  },

  plugins: [

    // new ExtractTextPlugin('public/style.css', {
    //   allChunks: true
    // }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html' // Make sure our generated scripts end up somewhere
    })
  ]

};