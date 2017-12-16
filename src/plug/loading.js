import vue from 'vue'
import loading from './loading.vue'
import { Vue } from 'vue';
let Vueloading = vue.extend(loading)
let Loading = {
  
}

Loading.install = function(vue,options){
    let loading = new Vueloading()
    console.log(loading)
    loading.$mount()
    vue.$show = vue.prototype.$show = function(){
        document.querySelector('body').appendChild(loading.$el)
    }
    vue.$hide = vue.prototype.$hide = function(){
        loading.hide()
    }
}
export default Loading