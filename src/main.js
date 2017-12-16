// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
console.log("Vue",Vue)
console.log("App",App)
let Abc =Vue.extend();

console.log("Abc",Abc)

let abc = new Abc({
  name:"abc",
  template:'<h1>222</h1>'

});
console.log("abc",abc)
// console.log(<App/>)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
