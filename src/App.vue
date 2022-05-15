<template>
  <div class="app">
    <TodoHeader @create="createNewTask"/>
    <TaskList :task="newTask"/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TaskList from './components/TaskList.vue';

export default {
  components: {
    TodoHeader, TaskList
  },

  data() {
    return {
      newTask: {},
    };
  },

  methods: {
    //Take new task from TodoHeader
    createNewTask(task) {
      this.newTask = task;
    }
  }
}
</script>

<style>
  .app {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
