<template>
    <ul>
        <li v-for="item in list" :key="item.id">
            <span>{{item.title}}</span>
        </li>
    </ul>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      tab: this.$route.query.tab
    };
  },
  created() {
    this.getData(this.tab);
  },
  methods: {
    getData(arg) {  
      this.axios
        .get("https://cnodejs.org/api/v1/topics", { params: { tab: arg } })
        .then(data => {
          this.list = data.data.data;
        });
    }
  },
  watch: {
    $route() {
      this.getData(this.$route.query.tab);
    }
  }
};
</script>
<style>

</style>