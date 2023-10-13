import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect: '/home',  //重定向
    children:[
      /*{
        path: 'user',name: 'user',    
        component: () => import(/!* webpackChunkName: "about" *!/ '../views/User.vue')
      },
      {
        path: 'home',name: 'home',    
        component: HomeView
      },
      {
        path: 'mall',name: 'mall',    
        component: () => import('../views/Mall.vue')
      },
      {
        path: 'page1',name: 'page1',    
        component: () => import('../views/PageOne.vue')
      },
      {
        path: 'page2',name: 'page2',    
        component: () => import('../views/PageTwo.vue')
      }*/
    ]
  },
  {
    path:'/login',
    name: 'login',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  routes,
  
})

export default router
