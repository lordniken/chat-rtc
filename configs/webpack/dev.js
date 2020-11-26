const {merge} = require('webpack-merge');
const commonConfig = require('./common');
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    filename: '[name].js'
  },
  devServer: {
    hot: true
  },
  devtool: 'source-map',
  plugins: [
    new HTMLWebpackPlugin({
      template: '../../../public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 
          [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [
                  '@babel/plugin-proposal-class-properties'
                ],
              }
            }
          ]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              eslintPath: 'eslint',
            },
          },
        ],
      },
    ]
  }
});