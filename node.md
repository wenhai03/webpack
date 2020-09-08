##在webpack中所有文件都是模块
- js模块  模块化(AMD, CMD)


## 直接运行webpack
会执行node_modules对应的bin下的webpack.md
```
 npx webpack

```

## webpack
- plugins
- loader


## css处理

```
cnpm i style-loader css-loader less-loader stylus-loader sass-loader sass less stylus -D

```

## 样式插件

```
 cnpm i extract-text-webpack-plugin@next mini-extract-plugin -D

```

```
去除无用的样式表  cnpm i purifycss-webpack purify-css glob -D

```

```
样式自动加上前缀 cnpm i postcss-loader autoprefixer -D

```

```
拷贝文件到目录下

 cnpm i copy-webpack-plugin -D
 
```