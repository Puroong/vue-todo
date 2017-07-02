<template>
  <div id="options" v-if="allTodos.length>0" class="ui segment">
    <i v-if="activeTodos.length === 1">
      1 item left
    </i>
    <i v-else>
      {{activeTodos.length}} items left
    </i>

    <button v-on:click="SET_FILTER('All')">All</button>
    <button v-on:click="SET_FILTER('Active')">Active</button>
    <button v-on:click="SET_FILTER('Completed')">Completed</button>
    <button v-if="completedTodos.length>0" v-on:click="REMOVE_COMPLETED_TODOS">Remove Completed</button>
  </div>
</template>
<script>

  export default {
    computed: {
      allTodos () {
        return this.$store.getters.allTodos
      },
      activeTodos () {
        return this.$store.getters.activeTodos
      },
      completedTodos () {
        return this.$store.getters.completedTodos
      },
    },
    methods: {
      REMOVE_COMPLETED_TODOS: function () {
        for(var i=0;i<this.allTodos.length;i++){
          if(this.allTodos[i].active === false){
            this.$store.commit('REMOVE_TODO', this.allTodos[i])
            i--
         }
        }
      },
      SET_FILTER(by) {
        this.$store.commit('SET_FILTER', by)
      }
    }
  }
</script>
