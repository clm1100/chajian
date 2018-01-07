<template>
<div class="col-md-2 column">
    <ul class="nav nav-pills nav-stacked" >
        <li  :class="{active:showindex==1}" >
            <router-link :to='{path:"/vue/vuetest1"}'  @click.native="active(1)">vue实战</router-link>
        </li>
        <li  :class="{active:showindex==2}">
            <a href="#" @click="active(2)">vue基础</a>
        </li>
        <li  :class="{active:showindex==3}">
            <a href="#" @click="active(3)">vue案例</a>
        </li>
        <li  :class="{active:showindex==4}">
            <a href="#" @click="active(4)">vue精进</a>
        </li>
    </ul>
</div>
</template>
<script>
export default {
  data() {
    return {
      showindex: 1
    };
  },
  created() {
    console.log("初始化");
  },
  methods: {
    active(i) {
      this.showindex = i;
    }
  }
};
</script>
<style>

</style>