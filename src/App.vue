<template>
<div id="app">
  <div class="container-fluid">
	<div class="row clearfix">
		<div class="col-md-12 column">
			<nav class="navbar navbar-default" role="navigation">
				<div class="navbar-header">
					 <span class="navbar-brand" >欢迎:admin</span>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li :class="{active:showindex==1}" @click='active(1)'>
							 <a >关于vue的导航</a>
						</li>
						<li :class="{active:showindex==2}" @click='active(2)'>
							 <a>关于nodejs的导航</a>
						</li>
            <li :class="{active:showindex==3}" @click='active(3)'>
							 <a>react的导航</a>
						</li>
            <li :class="{active:showindex==4}" @click='active(4)'>
              <a >其他导航</a>
            </li>
					</ul>
				</div>		
			</nav>
		</div>
	</div>
  <div class="row">
    <component v-bind:is="which_to_show">
    </component>
    <div class="col-md-10 column">
      <h1>我是路由组件暂时不切换</h1>
    </div>
  </div>
  </div>

  </div>
</template>
<script>
import first from '@/components/Abc'
import Aboutvue from '@/components/Aboutvue'
import Aboutvue1 from '@/components/Aboutvue1'
import Aboutvue2 from '@/components/Aboutvue2'
import Aboutvue3 from '@/components/Aboutvue3'
import 'bootstrap/dist/css/bootstrap.css'
export default {
  data(){
    return {
       which_to_show: "Aboutvue",
      showindex:1
    }
  },
  methods: {
    active(i){
      let arr = ['Aboutvue','Aboutvue1','Aboutvue2','Aboutvue3']
      this.showindex = i
      this.which_to_show = arr[this.showindex-1]
    }
  },
  components: {
    Aboutvue,
    Aboutvue1,
    Aboutvue2,
    Aboutvue3,
  }
};
</script>
<style>
*{margin: 0;padding:0}
</style>
