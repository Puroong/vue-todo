<template>
  <div id="todoInput" class="ui segment" >
    <div class="ui checkbox" v-if="allTodos.length > 0">
      <input type="checkbox" v-on:click="toggleAll">
      <label for=""></label>
    </div>
    <div id="todo-input" class="ui input">
      <input type="text" placeholder="todo" v-model="input" v-on:keyup.enter="add">
    </div>
  </div>
</template>

<script>

  export default {
    data: function(){
      return {
        input: ""
      }
    },
    computed: {
      allTodos () {
        return this.$store.getters.allTodos
      }
    },
    methods: {
      add: function () {
        console.log('add');
        let todo = {'text': this.input, 'active': true};

        this.$store.commit('ADD_TODO', todo)

        this.input = "";
      },
      toggleAll: function () {
        this.$store.commit('TOGGLE_STATUS')
      }
    }
  }
</script>

<style scoped>
#todo-input{
  width: 95%;
}
</style>
