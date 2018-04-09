<template>
    <div>
        <h1>hhh</h1>
        <h2>{{www}}</h2>
        
    </div>
</template>
<script>
import { mapActions,mapGetters, mapMutations} from "vuex";
export default {
  created() {
      this.testMutation()
    console.log("=====$store=====");
    console.log(this.$store);
    console.log("=====$store.state=====");
    console.log(this.$store.state);
    console.log("=====$store.state.getters=====");
    console.log(this.$store.getters);
    this.testarg("测试的值")
  },
  methods: {
      ...mapActions([
          'testarg'
      ]),
      ...mapMutations([
          'testMutation'
      ])
  },
  computed: {
      ...mapGetters([
          'www'
      ])
  }
};
</script>
