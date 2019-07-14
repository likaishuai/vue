import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index'

import Home from './views/home/Home'
import Classes from './views/classesPage/Classes'
import Search from './views/search/Search'
import Prefile from './views/prefile/Prefile'

import Recommend from './views/home/Recommend'
import Stadium from './views/home/Stadium'

import Detail from './page/Detail'
import FAQ from './page/FAQ'

import LocalDetail from './page/localDetail/LocalDetail'
Vue.use(Router)

let routes = [
    {
      path: '/',
      redirect:'/home',
      component: Index,
      children:[
      {
        path: 'home',
        name: 'home',
        component: Home,
        redirect: 'home/recommend',
        children: [
          {
            path: 'recommend',
            name:'recommend',
            component: Recommend
          },
          {
            path: 'stadium',
            name:'stadium',
            component: Stadium
          }
        ]
      } , 
      {
        path:'classes',
        name: 'classes',
        component: Classes
      },
      {
        path: 'search',
        name: 'search',
        component: Search
      },
      {
        path:'prefile',
        name: 'prefile',
        component: Prefile
      },
    ]
  },
  {
    path:"/detail/:id",
    name:'detail',
    component:Detail
  },
  {
    path:"/FAQ/:id",
    name: 'FAQ',
    component:FAQ
  },
  {
    path:"/localDetail/:id",
    name:"localDetail",
    component: LocalDetail
  }

]



export default new Router({
  routes
})

