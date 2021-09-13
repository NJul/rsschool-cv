const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

let mode = 'development';

let target = 'web';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,
  target: target,

  // entry not required if using `src/index.js` default
  entry: './src/index.js',

  // output not required if using `dist/main.js` default
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    // this places all images processed in an image folder
    assetModuleFilename: './assets/images/[name].[ext]',
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
          // sass-loader should be at the bottom
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        // type: 'asset/resource',
        loader: require.resolve('url-loader'),
        options: {
          // limit: 10000,
          name: './assets/images/[name].[ext]',
        },
      },
      {
        test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
        // type: 'asset/inline',
        loader: require.resolve('file-loader'),
        options: {
          name: './assets/images/[name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'assets/images' },
        { from: 'src/cv.md', to: 'cv.md' },
        { from: 'src/README.md', to: 'README.md' },
      ],
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),

  // devtool: 'source-map',
  devtool: false,

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
};
