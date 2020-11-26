const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: true,
        reloadAll: true
      },
    },
    'css-loader'
  ]

  if (extra) {
    loaders.push(extra)
  }

  return loaders
}

const babelOptions = preset => {
  const opts = {
    presets: [
      '@babel/preset-env'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }

  if (preset) {
    opts.presets.push(preset)
  }

  return opts
}

module.exports = {
  context: path.resolve(__dirname, '../src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', '../src/index.tsx'],
  },
  output: {
    path: path.resolve(__dirname, '../build')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.jpg', '.png', '.svg', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
  },
  devServer: {
    port: 3000,
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(
      {
        patterns: [
          {
            from: path.resolve(__dirname, '../public/favicon.ico'),
            to: path.resolve(__dirname, '../build')
          }
        ]
      }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./assets/fonts/[name].[ext]'
          }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions('@babel/preset-typescript')
          }
        ]
      },
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
    ]
  }
}

/*

        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],

        */