import Vue from 'vue'
import App from './App'
import router from './router'

// import loading from './plug/loading'
// Vue.use(loading);
import VueResource from 'vue-resource'
// Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created(){
    console.log(this.$router);
    console.log(this.$route)
    for(var key in this.$router){
      if(typeof this.$router[key] == 'function'){
        console.log(key);
      }
    }
  }
})
