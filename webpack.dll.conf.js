var path = require("path");
var webpack = require("webpack");

module.exports = {
    mode: 'production',
    // 你想要打包的模块
    entry: {
        vendor: [
            'axios',
            'vue-router',
            'vuex',
        ]
    },
    output: {
        path: path.join(__dirname, './src/static'), // 打包后文件输出的位置
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            //生成上文说到清单文件，此处放在当前build文件下面，你也可以放其他地方
            path: path.join(__dirname, '.', '[name]-manifest.json'),
            name: '[name]_library'
        }),

    ],
};