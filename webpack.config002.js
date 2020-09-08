// 基于node的遵循commonj规范的
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let {CleanWebpackPlugin} = require('clean-webpack-plugin')

// 单页index.html引用了多个js
// 多页a.html index.js  /  b.html  a.js
module.exports = {
  // entry可以写一个数组
  // entry: './src/index.js', // 入口
  // entry: ['./src/index.js', './src/a.js'], // 入口
  
  entry: { // 多入口
    index: './src/index.js',
    a: './src/a.js'
  },
  output: {
    filename: "[name].[hash:8].js",
    // 这个路径必须是绝对路径
    path: path.resolve('./build')
  }, // 出口
  devServer: {
    contentBase: './build.js',
    port: 3004,
    compress: true, // 服务器压缩
    open: true, // 自动打开服务器
    hot: true
  }, // 开发服务器
  module: {
  
  }, // 模块配置
  plugins: [
    // 打包html插件
    new HtmlWebpackPlugin({
      filename: "a.html",
      template: './src/index.html',
      title: '珠峰架构',
      hash: true,
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: "b.html",
      template: './src/index.html',
      title: '珠峰架构',
      hash: true,
      chunks: ['a']
    }),
    new CleanWebpackPlugin()
  ], // 插件的配置
  mode: "development", // 可以更改的模式
  resolve: {
  
  } // 配置解析
}

// 在webpack中安装开发服务器 wepck-dev-server