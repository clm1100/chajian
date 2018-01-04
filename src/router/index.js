import Vue from 'vue'
import Router from 'vue-router'
import Userlist from '@/components/Userlist'
import Abc from '@/components/Abc'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Userlist
    },
    {
      path: '/abc',
      name: 'abc',
      component: Abc
    }

  ]
})
