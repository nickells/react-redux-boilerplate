const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = [{
  context: path.join(__dirname, 'src'),
  entry: './scripts/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
},
{
  context: path.join(__dirname, 'src'),
  entry: './styles/index.less',
  output: {
    path: __dirname,
    filename: 'styles.css',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
}]
