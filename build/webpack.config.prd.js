const path = require('path'); //nodeJs的基本包
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "production",

  devtool: false,
  // 入口文件，用绝对路径，保证我们不因为路径发生错误
  //path.join(__dirname, 'src/index.js')中__dirname表示当前文件的路径，path.join就是将当前文件的路径跟'src/index.js'拼接起来，形成一个绝对路径
  entry: path.join(__dirname, '../src/index.js'),
  //输出文件，取名为bundle.js，路径为dist文件夹
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../web')
  },

  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        // 后缀名为图片：
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        // 配置 babel
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    })
  ],

}