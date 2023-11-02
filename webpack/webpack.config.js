const path = require('node:path');
const htmlWebpackPlugin = require('html-webpack-plugin')

/**@type {import('webpack').Configuration} */

module.exports = {
  // Entry
  entry: './src/index.js',
  // Output
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
  },
  mode: 'production',
  resolve: {
    extensions: ['.tsx', '.ts', 'jsx', '.js'],
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
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    })
  ],
  // devServer: {
  //   static: 'dist',
  //   watchContentBase: true,
  // },
}