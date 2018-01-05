<template>
	<div class="row">
		<div class="col-md-2 column">
			<ul class="nav nav-pills nav-stacked" >
                <li  :class="{active:showindex==1}">
                    <a href="#" @click="active(1)">关于nodejs</a>
                </li>
                <li  :class="{active:showindex==2}">
                    <a href="#" @click="active(2)">关于nodejs</a>
                </li>
                <li  :class="{active:showindex==3}">
                    <a href="#" @click="active(3)">关于nodejs</a>
                </li>
                <li  :class="{active:showindex==4}">
                    <a href="#" @click="active(4)">Action</a>
                </li>
			</ul>
		</div>
		<div class="col-md-10 column">
		</div>
	</div>
</template>
<script>
export default {
    data(){
        return {
            showindex:1
        }
    },
  created () {
    console.log("初始化")
  },
  methods: {
    active(i){
      this.showindex = i
    }
  }
}
</script>
<style>

</style>