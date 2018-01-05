<template>
  <div id="app">
    <div>
      <button @click="toshow">点击让子组件显示</button>  
      <!-- <keep-alive> -->
      <component v-bind:is="which_to_show"></component>  
      <!-- </keep-alive> -->
    </div>
    <router-view>
    </router-view>

  </div>
</template>
<script>
import first from '@/components/Abc'
export default {
  data(){
    return {
      which_to_show: "first"
    }
  },
  methods: {
    toshow: function() {
      //切换组件显示
      var arr = ["first", "second", "third", ""];
      var index = arr.indexOf(this.which_to_show);
      if (index < 2) {
        this.which_to_show = arr[index + 1];
      } else {
        this.which_to_show = arr[0];
      }
    }
  },
  components: {
    first: first,
    second: {
      //第二个子组件
      template: "<div>这里是子组件2</div>"
    },
    third: {
      //第三个子组件
      template: "<div>这里是子组件3</div>"
    }
  }
};
</script>
<style>

</style>
