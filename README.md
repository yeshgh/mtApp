# mtApp

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
### 打包中容易出现的坑：
- vue项目build打包访问空白。  
解决方法：  
  - build config index.js下修改： 
  build: {
    assetsPublicPath: './'
  }   
  - 路由配置修改：  
mode: 'history'改为 hash
- 第三方样式没有生效。   
解决方法：
  - build utils.js下增加（publicPath: '../../'）：  
if (options.extract) {
    return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader',
    publicPath: '../../'
    })
} 
- 样式不匹配。  
  - 可能是被引入的第三方样式覆盖了，可以将main.js下router的导入放到最后
