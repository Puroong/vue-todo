<template>
  <div id="app">
    <div class="ui stacked segments sixteen wide column">
      <TodoInput :showCheckbox="showFilterAndCheck" @add="addTodo" @toggleAll="toggleAll"></TodoInput>
      <Todo v-for="todo in todos" v-if="filterBy(todo)" :todo="todo" @remove="removeTodo(todo)" @changeStatus="changeStatus(todo)"></Todo>
      <Options v-if="showFilterAndCheck" :cntActiveTodo="cntActiveTodo" :cntCompletedTodo="todos.length-cntActiveTodo" @setFilter="setFilter" @removeCompletedTodos="removeCompletedTodos"></Options>
    </div>
  </div>
</template>

<script>
  import TodoInput from './components/TodoInput.vue';
  import Todo from './components/Todo.vue';
  import Options from './components/Options.vue';

  var todos = [];

  export default {
    name: 'app',
    data: function () {
      return {
        todos: todos,
        by: 'All',
      }
    },
    computed: {
      cntActiveTodo: function () {
        let cnt = 0;

        for(let i = 0;i<this.todos.length;i++){
          if(this.todos[i].isActive){
            cnt++;
          }
        }

        return cnt;
      },
      showFilterAndCheck: function(){
        return this.todos.length > 0;
      },
    },
    methods: {
      addTodo: function (todo) {
        this.todos.push(todo);
      },
      changeStatus: function(todo){
        if(todo.isActive){
          this.completeTodo(todo);
        }
        else
          this.activateTodo(todo);
      },
      activateTodo: function(todo){
          todo.isActive = true;
      },
      completeTodo: function(todo){
        todo.isActive = false;
      },
      removeTodo: function (todo) {
        let index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
      },
      toggleAll: function(){
        let allTodoSelected = (this.cntActiveTodo == 0)
        let nextStatus = (allTodoSelected)?true:false

        for(let i=0;i<this.todos.length;i++){
          this.todos[i].isActive = nextStatus;
        }
      },
      setFilter: function (by) {
        this.by = by;
      },
      filterBy: function(todo){
        if(this.by === "All")
          return true;
        else if(this.by === "Active")
          return todo.isActive;
        else if(this.by === "Completed")
          return !todo.isActive;
      },
      removeCompletedTodos: function () {
        for(let i=0;i<this.todos.length;i++){
          if(!this.todos[i].isActive){
            this.todos.splice(i,1);
            i--;
          }
        }
      }
    },
    components: {
      TodoInput,
      Todo,
      Options
    }
  }
</script>
