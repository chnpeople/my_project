const webpack = require('webpack')
const {resolve} = require('path')

module.exports = {
  entry: {
    mydll: ['echarts', 'element-ui']
  },
  output: {
    filename: '[name].dll.js',
    library: '[name]_[hash]',
    path: resolve(__dirname, 'dll')
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: resolve(__dirname, 'dll/manifest.json')
    })
  ]
}