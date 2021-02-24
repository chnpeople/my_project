const path = require('path'); //nodeJs的基本包
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  // 入口文件，用绝对路径，保证我们不因为路径发生错误
  //path.join(__dirname, 'src/index.js')中__dirname表示当前文件的路径，path.join就是将当前文件的路径跟'src/index.js'拼接起来，形成一个绝对路径
  entry: path.join(__dirname, './src/index.js'),

  //输出文件，取名为bundle.js，路径为dist文件夹
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
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
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, 'src')], // 指定检查的目录
        options: {
          // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
          formatter: require('eslint-friendly-formatter'), // 指定错误报告的格式规范
        },
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: path.resolve('favicon.ico'),
    }),
  ],

  devServer: {
    disableHostCheck: true,
    contentBase: 'web',
    // contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    proxy: {
      '/json': {
        target: 'https://api.ithome.com/json',
        changeOrigin: true,
        pathRewrite: {
          '^/json': '',
        },
      },
      // '/api': {
      //   target: 'http://api.tim007.xyz:8383/api',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': '',
      //   },
      // },
      '/api': {
        target: 'http://www.snrthn.com/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
      '/version': {
        target: 'http://api.tim007.xyz:8383/version',
        changeOrigin: true,
        pathRewrite: {
          '^/version': '',
        },
      },
      '/upload': {
        target: 'http://api.tim007.xyz:8383/upload',
        changeOrigin: true,
        pathRewrite: {
          '^/upload': '',
        },
      },
      '/word': {
        target: 'http://api.tim007.xyz:8383/word',
        changeOrigin: true,
        pathRewrite: {
          '^/word': '',
        },
      },
      '/op': {
        target: 'https://view.officeapps.live.com',
        changeOrigin: true,
        pathRewrite: {
          '^/op': '',
        },
      },
    },
  },
};
