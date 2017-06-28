<template>
  <div id="options" class="ui segment">
    <i v-if="cntActiveTodo === 1">
      1 item left
    </i>
    <i v-else>
      {{cntActiveTodo}} items left
    </i>

    <button v-on:click="setFilter('All')">All</button>
    <button v-on:click="setFilter('Active')">Active</button>
    <button v-on:click="setFilter('Completed')">Completed</button>
    <button v-if="cntCompletedTodo>0" v-on:click="removeCompletedTodos">Remove Completed</button>
  </div>
</template>
<script>
  export default {
    props: {
      cntActiveTodo: {
        type: Number
      },
      cntCompletedTodo: {
        type: Number
      }
    },
    methods: {
      setFilter: function(by){
        this.$emit('setFilter', by);
      },
      removeCompletedTodos: function () {
        this.$emit('removeCompletedTodos');
      }
    }
  }
</script>
