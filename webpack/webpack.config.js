const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */

module.exports = {
  // Entry
  entry: './src/index.js',
  // Output
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js'
  },
  mode: 'production',
  resolve: {
    extensions: ['.tsx', '.ts', 'jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src', 'styles'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/index.[contenthash].css'
    })
  ]
  // devServer: {
  //   static: 'dist',
  //   watchContentBase: true,
  // },
};
