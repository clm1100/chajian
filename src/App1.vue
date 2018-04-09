<template>
<section class="todoapp">
			<header class="header">
				<h1>todos</h1>
				
        
        
        
        <input
         class="new-todo" 
         placeholder="What needs to be done?"
         v-model="msg"
         @keyup.enter="addTodo"
         autofocus>





			</header>
			<!-- This section should be hidden by default and shown when there are todos -->
			<template v-if="todos.length">
      <section class="main">
				
        
        
        <input 
        id="toggle-all" 
        class="toggle-all"  
        type="checkbox"
        @change="gai"
        :checked="toggleAll" >





        
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<!-- These are here just to show the structure of the list items -->
					<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
					<li
           :class="{
             'completed':todo.done,
             'editing': current.id === todo.id
             }"
            v-for="todo in filterTodos" 
            :key="todo.id">
						<div class="view">
							<input class="toggle" 
              type="checkbox"
               v-model="todo.done">
							<label
              @dblclick="toediting(todo)"
              >{{todo.title}}</label>
							<button 
              @click="removeTodo(todo.id)"
              class="destroy">
              </button>
						</div>
						<input 
            class="edit"
            type="text"
            @blur="saveEditing"
            @keyup="cancleEditing($event,todo)"
            @keyup.enter = "saveEditing"
            v-foucs="current.id===todo.id"
            v-model="todo.title">
					</li>
				</ul>
			</section>
			<!-- This footer should hidden by default and shown when there are todos -->
			<footer class="footer">
				<!-- This should be `0 items left` by default -->
				<span class="todo-count"><strong>{{remaningCount}}</strong> item left</span>
				<!-- Remove this if you don't implement routing -->
				<ul class="filters">
					<li>
						<a :class="{'selected':visibility==='all'}" href="#/">All</a>
					</li>
					<li>
						<a :class="{'selected':visibility==='active'}" href="#/active">Active</a>
					</li>
					<li>
						<a :class="{'selected':visibility==='completed'}" href="#/completed">Completed</a>
					</li>
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button
        @click="clearAllDone"
         class="clear-completed">
         Clear completed
         </button>
			</footer>
      </template>
		</section> 
</template>
<script>
export default {
  template:'',
  data() {
    return {
      current:{},
      visibility:'all',
      msg:'',
      todos:[
        {id:1,done:true,title:"abc"},
        {id:2,done:true,title:"21331"},
        {id:3,done:true,title:"ab3213c"},
        {id:4,done:true,title:"a312321bc"},
      ]
    }
  },
  computed: {
    filterTodos () {
    if (this.visibility === 'all') {
      return this.todos
    } else if (this.visibility === 'active') {
      return this.todos.filter(t => !t.done)
    } else if (this.visibility === 'completed') {
      return this.todos.filter(t => t.done)
    }
  },
    remaningCount () {
    return this.todos.filter(t => !t.done).length
  },
    toggleAll : {
    get:function (){
      return this.todos.every(t => t.done)
    },
    set:function(val){
      this.todos.forEach(t => t.done = val)
    }
  },

  },
methods: {
  cancleEditing(e,todo){

    const {keyCode, target} = e
    if (keyCode === 27) {
    todo.title = this.current.title;
    this.current = Object.assign({})
    console.log(this.current,2222)
    }
  },
  saveEditing(){
    console.log("333")
    this.current = {};
  },
  toediting(todo){
    console.log('toediting');
    this.current = Object.assign({},todo)
  },
    clearAllDone () {
    this.todos = this.todos.filter(t => !t.done)
  },
    hashchangeHandler () {
      console.log("3333333333333")
    // 当用户点击了锚点的时候，我们需要获取当前的锚点标识
      // 然后动态的将根组件中的 visibility 设置为当前点击的锚点标识
    const hash = window.location.hash.substr(1)
    console.log(hash)
    switch (hash) {
      case '/':
        this.visibility = 'all'
        break;
      case '/active':
        this.visibility = 'active'
        break;
      case '/completed':
        this.visibility = 'completed'
        break;
    }
  },
    removeTodo (id) {
    this.todos = this.todos.filter(e=>{return id!=e.id})
  },
  addTodo(){
        if (!this.msg.length) {
      return
    }
    const last = this.todos[this.todos.length - 1]  
    this.todos.push({
      id: last ? last.id + 1: 1,
      title: this.msg,
      done: false
    })
    // 清除文本框
   this.msg=''
  },
    gai(e){
    // console.log(e.target.checked)
    this.toggleAll = e.target.checked
  },
    abc(){
    console.log("render重新渲染了")
    return 2222
  }
},
  created() {
    console.log(this.$t("message.hello"));
  },
  beforeMount () {
    console.log("挂载钱")
  },
  mounted () {
    console.log('mounted瓜子啊')
    this.hashchangeHandler()
    window.onhashchange = this.hashchangeHandler.bind(this);
  },
  beforeUpdate() {
    console.log("之前beforeUpdate");
  },
  updated () {
    console.log("创建update")
  },
  directives: {
    foucs:function(el,binding){
      console.log()
      if(binding.value){
        el.focus()
      }
    }
  }
};
</script>
<style>

</style>


