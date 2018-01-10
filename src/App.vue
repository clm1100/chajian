<template>
  <h1>{{$t("message.hello")}}</h1>
</template>
<script>
export default {
  created () {
    console.log(this.$t("message.hello"))
  }
}
</script>
<style>
</style>


