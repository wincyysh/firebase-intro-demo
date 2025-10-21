// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // your main JS file
  mode: 'development',
  output: {
    filename: 'bundle.js', // this is created in memory
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './public', // serve your HTML from here
    open: true, // open browser automatically
    hot: true, // live reload
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // enable importing CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // use your own HTML file
    }),
  ],
};
