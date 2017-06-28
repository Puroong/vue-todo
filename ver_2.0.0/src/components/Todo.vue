<template>
  <div id="todo" class="ui segment">
    <div class="ui checkbox">
      <div v-bind:class="todo.isActive?'active':'completed'">
        <input type="checkbox" v-on:click="changeStatus(todo)"  v-bind:checked="todo.isActive?'':'checked'"><!--checked가 어떻게 작동하는지 이해 안 감-->
        <label>{{todo.text}}</label>
      </div>
    </div>
    <div class="btn-remove" v-on:click="remove(todo)">&#10006;</div>
  </div>
</template>

<script>
  export default {
    name: 'Todo',
    props: {
      todo: {
        type: Object
      }
    },
    methods: {
      changeStatus: function(todo){
        this.$emit('changeStatus');
      },
      remove: function (todo) {
        this.$emit('remove');
      }
    }
  }
</script>

<style scoped>
.completed{
  text-decoration: line-through;
  color: gray;
}
.active{
  color: black;
}
.btn-remove{
  float: right;
  color: black;
  cursor: pointer;
}
</style>
