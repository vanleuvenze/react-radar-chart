const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: [
    path.resolve(ROOT_PATH, '../src/index.js')
  ],
  output: {
    path: path.resolve(ROOT_PATH, '../lib'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'babel-loader',
      },
      {
       test: /\.css$/,
       exclude: /node_modules/,
       use: [
        {loader: 'style-loader'},
        {loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'}
       ]
     }
   ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
      ignoreOrder: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
