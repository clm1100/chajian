import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
const messages = {
 en: {
  message: {
   hello: 'world hello'
  }
 },
 zh: {
  message: {
   hello: '世界'
  }
 }
}

Vue.use(VueI18n)
const i18n = new VueI18n({
 locale: 'zh',
 messages
})
new Vue({
  i18n,
  template: '<App/>',
  components: { App },
}).$mount('#app')
