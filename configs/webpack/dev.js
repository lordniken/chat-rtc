const {merge} = require('webpack-merge');
const commonConfig = require('./common');

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
        test: /\.js$/,
        exclude: /node_modules/,
        use: 
          ['eslint-loader',
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                    plugins: [
                      '@babel/plugin-proposal-class-properties'
                    ]
                  }
                }
          ]
      },
    ]
  }
});