import Vue from 'vue'
import Router from 'vue-router'
import article from 'components/Article'
// import commentItem from 'components/CommentWeibolike'

Vue.use(Router)
export default new Router({
  mode: 'history', // 开启HTML5的history模式，可以让地址栏的url长得跟正常页面跳转的url一样。（不过还需要后端配合，讲Koa的时候会说）
  base: __dirname,
  routes: [
    {
      path: '/',
      components: {
        default: article
      }
    },
    {
      path: '*',
      component: article
    }
  ]
})
