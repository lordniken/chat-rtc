const path = require('path')

const dotenv = require('dotenv')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const Dotenv = require('dotenv-webpack')
 
const getEnvFromDotEnvFile = dotenv.config()
let envKeys

if (getEnvFromDotEnvFile.error) {
  console.log('Getting environment variables from build args for production') // eslint-disable-line
  envKeys = {
    'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID),
    'process.env.DEMO': JSON.stringify(process.env.DEMO),
    'process.env.NODE_ENV': JSON.stringify('production'),
  }
} else {
  envKeys = {
    'process.env.CLIENT_ID': JSON.stringify(getEnvFromDotEnvFile.parsed['CLIENT_ID']),
    'process.env.DEMO': JSON.stringify(getEnvFromDotEnvFile.parsed['DEMO']),
  }
}

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: ['../src/index.tsx'],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[fullhash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      /**
       * TypeScript (.ts/.tsx files)
       *
       * The TypeScript loader will compile all .ts/.tsx files to .js. Babel is
       * not necessary here since TypeScript is taking care of all transpiling.
       */
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      // Fonts
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
      // Markdown
      {
        test: /\.md$/,
        type: 'asset/source',
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    // Resolve in this order
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.md'],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  plugins: [
    // Get environment variables in React
    new webpack.DefinePlugin(envKeys),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          globOptions: {
            ignore: ['*.DS_Store', 'favicon.ico', 'template.html'],
          },
        },
      ],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new Dotenv(),
  ],
}
