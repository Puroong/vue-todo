<template>
  <div id="todoInput" class="ui segment" >
    <div class="ui checkbox" v-if="showCheckbox">
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
    props: {
      showCheckbox: {
          type: Boolean,
          default: false
      }
    },
    methods: {
      add: function () {
        console.log('add');
        let todo = {'text': this.input, 'isActive': true};
        this.$emit('add', todo);

        this.input = "";
      },
      toggleAll: function () {
        this.$emit('toggleAll');
      }
    }
  }
</script>

<style scoped>
#todo-input{
  width: 95%;
}
</style>
