#vue 项目 
 
新闻详情页 + 评论 + 评论输入框 + 产品稿没有提交按钮 目前用键盘的回车实现 

为了引导团队实施前后端分离  
vue-cli 脚手架 vue-router 处理前端路由 Axios的ajax请求 ，用了 Mint-ui header  项目需要嵌入原生app的webView header去掉了 

状态 ：
        1 测试服务器联调成功  

        2提交评论父组件重新ajax请求评论成功 子组件调用副组件的方法  通过实例 this.$parent.Function() 实现

vue 写项目 本地git server... 直接push上来了


# bee newspage & comments

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
