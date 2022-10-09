const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpackEnv = process.env.NODE_ENV || 'development';
const appDirectory = path.resolve(__dirname, '../');

module.exports = {
  entry: [path.resolve(appDirectory, 'web/index.web.js')],

  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'web/dist'),
    clean: true,
  },

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
  },

  mode: webpackEnv,

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [
          path.resolve(appDirectory, 'web/index.web.js'),
          path.resolve(appDirectory, 'src'),
        ],

        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(appDirectory, 'babel.config.js'),
            },
          },
        ],
      },

      {
        test: /\.(gif|jpe?g|png|svg)$/,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],

  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },

    extensions: ['.web.js', '.js', '.jsx', '.ts', '.tsx'],
  },
};
