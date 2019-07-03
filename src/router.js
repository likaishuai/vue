import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Classes from './views/Classes'
import Search from './views/Search'
import Prefile from './views/Prefile'

import Recommend from './views/home/Recommend'

import Stadium from './views/home/Stadium'

Vue.use(Router)

let routes =  [
  {
    path:'/',
    redirect:'/home'
  },
 {
   path: '/home',
   name: 'home',
   component: Home,
   redirect: '/home/recommend',
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
 },
 {
   path:'/classes',
   name: 'classes',
   component: Classes
 },
 {
  path: '/search',
  name: 'search',
  component: Search
},
{
  path:'/prefile',
  name: 'prefile',
  component: Prefile
}
]

export default new Router({
  routes
})
