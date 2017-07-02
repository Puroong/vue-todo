<template>
  <div id="filteredTodos">
    <div id="todo" v-for="todo in allTodos" v-if="filterBy(todo)" class="ui segment">
      <div class="ui checkbox">
        <div v-bind:class="todo.active?'active':'completed'">
          <input type="checkbox" v-on:click="CHANGE_STATUS(todo)"  v-bind:checked="todo.active?'':'checked'"><!--checked가 어떻게 작동하는지 이해 안 감-->
          <label>{{todo.text}}</label>
        </div>
      </div>
      <div class="btn-remove" v-on:click="REMOVE_TODO(todo)">&#10006;</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"
  import { mapMutations } from "vuex"
  import store from '../store/index'

  export default {
    name: 'FilteredTodos',
    computed: {
      allTodos () {
        return store.getters.allTodos
      }
    },
    methods: {
      filterBy: (todo) => {
        if (store.state.by == 'All') { return true }
        else if (store.state.by == 'Active') { return todo.active == true }
        else if (store.state.by == 'Completed') { return todo.active == false }
      },
      REMOVE_TODO (todo) {
        store.commit('REMOVE_TODO', todo)
      },
      CHANGE_STATUS (todo) {
        store.commit('CHANGE_STATUS', todo)
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
