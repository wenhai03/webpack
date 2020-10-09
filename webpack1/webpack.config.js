let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let {CleanWebpackPlugin} = require('clean-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'production',
  // 入口
  entry: {
    page1: './src/index.js',
    page2: './src/index2.js'
  },
  // 出口
  output: {
    // 输出的文件名
    filename: "[name].js",
    // 输出的目录必须是绝对路径
    path: path.resolve(__dirname, 'dist')
  },
  // module关于loader配置
  module: {
    rules: [
      /*{
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      },*/
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/public/path/to/',
            },
          },
          'css-loader',
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    
    new HtmlWebpackPlugin({
      chunks: ['page1'],
      filename: "index.html",
      template: "./src/index.html",
      title: "这是测试用的标题",
      hash: true,
      minify: false
    }),
    /*new HtmlWebpackPlugin({
      chunks: ['page2'],
      filename: "index2.html",
      template: "./src/index2.html",
      title: "这是测试用的标题",
      hash: true,
      minify: false
    })*/
  ],
  devServer: {
    // 服务器访问的文件地址
    contentBase: path.resolve(__dirname, 'dist'),
    // 服务器的ip地址
    host: 'localhost',
    // 端口
    port: 1234,
    // 自动打开
    open: true,
    hot: true
  }
  // 服务器的配置
}
