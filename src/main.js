import Vue from 'vue'
import VueI18n from 'vue-i18n'
import 'todomvc-app-css/index.css'
import 'todomvc-common/base.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import Abc from '@/components/Abc'
const Abc = ()=> import ('@/components/Abc')
import App from './App'

import store from "./store";

var router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/abc',
      name: 'abc',
      component: Abc
    }

  ]
})

new Vue({
  router,
  store,
  template: `
  <div id="app">
    <h1>Basic</h1>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/abc">/abc</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
`
}).$mount('#app')
