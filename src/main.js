import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './api/mock'
import Cookie from "js-cookie";

Vue.config.productionTip = false
Vue.use(ElementUI);

//添加全局前置导航守卫
router.beforeEach((to,from ,next) => {
  // 判断 token 是否存在
  const token = Cookie.get('token')
  if(!token && to.name !== 'login'){  // 当前用户未登录，应该跳转登录页
    next({ name: 'login'} )
  }else if(token && to.name === 'login'){  // 当前已经登录，跳转至首页
    next({name: 'home'})
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  created() {
    store.commit('addMenu',router)
  },
  render: h => h(App)
}).$mount('#app')
