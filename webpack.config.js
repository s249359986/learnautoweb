var webpack = require('webpack');
module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname+'/dist/',
    filename: '[name].js'
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash].min.js',
    })
  ]
}
