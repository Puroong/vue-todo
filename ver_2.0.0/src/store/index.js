import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // initial state
  state: {
    todos: [],
    by: 'All',
  },
  getters: {
    allTodos(state) {
      return state.todos
    },
    activeTodos (state) {
      return state.todos.filter(todo => todo.active == true)
    },
    completedTodos (state) {
      return state.todos.filter(todo => todo.active == false)
    }
  },
  mutations: {
    ADD_TODO: (state, todo) => {
      state.todos.push(todo)
    },
    REMOVE_TODO: (state, todo) => {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
    CHANGE_STATUS: (state, todo) => {
      todo.active = !todo.active
    },
    TOGGLE_STATUS: (state, todo) => {
      var activeTodos = state.todos.filter(todo => todo.active == true)

      var allCompleted = (activeTodos.length === 0)
      var isActive = (allCompleted)?true:false

      state.todos.map(todo => {todo.active = isActive})
    },
    SET_FILTER: (state, by) => {
      state.by = by
    }
  }
})
