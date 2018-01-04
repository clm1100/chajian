<template>
  <div id="app">
    <div>
      <router-link :to="{name:'home',query:{tab:'ask'}}" >
        问答
      </router-link>
      <router-link :to="{name:'home',query:{tab:'job'}}" >
        招聘
      </router-link>
      <router-link :to="{name:'home',query:{tab:'share'}}" >
        分享
      </router-link>
      <router-link :to="{name:'home',query:{tab:'good'}}" >
        精品
      </router-link>
    </div>
    <router-view>
    </router-view>

  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },

};
</script>
<style>

</style>
