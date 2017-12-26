# ut

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

***
## Project structure / 项目结构
```bash
udui-shop
    |
    |- index.html                       // HTML页面
    |
    |- package.json                     // NPM依赖环境 / NPM 运行命令
    |
    |- webpack.config.js                // Webpack配置文件
    |
    |- .editorconfig                    // 编辑器统一风格样式文件
    |
    |- dist/                            // 打包
    |
    |- src/                             // 开发
        |
        |- api/                         // 接口文件
        |
        |- assets/                      // 静态资源
        |
        |- component/                   // Vue组件
        |
        |- filter/                      // Vue过滤器
        |
        |- router/                      // Vue路由
        |
        |- App.vue                      // 根组件
        |
        |- main.js                      // Webpack处理文件
        |
        |- vuex/                        // Vue状态
            |
            |- modules/                 // 模块状态
                |
                |- indexComtent.js      // 首页内容
                |
                |- indexData.js         // 首页数据
                |
                |- mall.js              // 购物
                |
                |- tcShop.js            // 未知
                |
                |- userInfo.js          // 用户信息数据
            |
            |- actions.js
            |
            |- getters.js
            |
            |- mutation-types.js
            |
            |- store.js


```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
