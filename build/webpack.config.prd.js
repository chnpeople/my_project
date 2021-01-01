const path = require('path'); //nodeJs的基本包
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];

module.exports = {
  mode: 'production',

  devtool: false,
  // 入口文件，用绝对路径，保证我们不因为路径发生错误
  //path.join(__dirname, 'src/index.js')中__dirname表示当前文件的路径，path.join就是将当前文件的路径跟'src/index.js'拼接起来，形成一个绝对路径
  entry: path.join(__dirname, '../src/index.js'),
  //输出文件，取名为bundle.js，路径为dist文件夹
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'),
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
      },
      {
        // 后缀名为图片：
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        // 配置 babel
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      favicon: path.resolve('favicon.ico'),
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll/mydll.manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll/echart.manifest.json'),
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dll/mydll.dll.js'),
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dll/echart.dll.js'),
    }),
    new CleanWebpackPlugin(),
    // new UglifyJsPlugin({
    //   uglifyOptions: {
    //     compress: {
    //       drop_debugger: true, //debugger
    //       drop_console: true, // console
    //       pure_funcs: ['console.log'], // 移除console
    //     },
    //   },
    //   // cache: true, //启用/禁用文件缓存（类型可布尔也可是字符串）
    //   parallel: true, //行化可以显着加快构建速度，因此强烈建议使用
    //   sourceMap: false, //使用源映射将错误消息位置映射到模块（这会减慢编译速度,cheap-source-map选项不适用于此插件)
    // }),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'), //匹配文件名
      threshold: 10240, //对10K以上的数据进行压缩
      minRatio: 0.8,
      deleteOriginalAssets: true, //是否删除源文件
    }),
  ],
};
