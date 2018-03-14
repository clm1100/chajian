
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
  render(h){
    console.log("888888888888")
    return h('div')
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


