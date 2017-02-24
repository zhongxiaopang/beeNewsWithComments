// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Mint from 'mint-ui'
import 'normalize.css/normalize.css'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import VueRouter from 'vue-router'
import Axios from 'axios'

Vue.prototype.$http = Axios // 类似于vue-resource的调用方法
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Mint)
    /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

