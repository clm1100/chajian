<template>
<div>
  <h1>{{$t("message.hello")}}</h1>
  <input type="text" v-model="msg">
  </div>  
</template>
<script>
export default {
  template:'',
  data() {
    return {
      msg: "2222",
      url: "../static/33.jpg",
      logo: "./assets/logo.png"
    };
  },
  render(){
    console.log('999999999999999')
  },
  created() {
    console.log(this.$t("message.hello"));
  },
  beforeMount () {
    console.log("挂载钱")
  },
  mounted () {
    console.log('mounted瓜子啊')
  },
  beforeUpdate() {
    console.log("之前beforeUpdate");
  },
  updated () {
    console.log("创建update")
  }
};
</script>
<style>

</style>


