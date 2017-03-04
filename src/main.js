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

Axios.defaults.baseURL = 'http://10.1.1.245/api/1488448356513/10005/7127678a3c5625cd5ba7715ce470ce3d'

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

