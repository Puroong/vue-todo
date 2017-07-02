<template>
  <div id="app">
    <div class="ui stacked segments sixteen wide column">
      <TodoInput></TodoInput>
      <FilteredTodos></FilteredTodos>
      <Options></Options>
    </div>
  </div>
</template>

<script>
  import TodoInput from './components/TodoInput.vue';
  import FilteredTodos from './components/FilteredTodos.vue';
  import Options from './components/Options.vue';

  export default {
    name: 'app',
    components: {
      TodoInput,
      FilteredTodos,
      Options
    },
  }
</script>
