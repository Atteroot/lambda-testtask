<template>
  <div class="app">
    <todo-header @create="createTask" />
    <task-list
      :tasks="tasks"
      :last-action="lastAction"
      @create-task="createTask"
      @update-task="updateTask"
      @delete-task="deleteTask"
    />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TaskList from './components/TaskList.vue';

export default {
  components: {
    TodoHeader,
    TaskList,
  },

  data() {
    return {
      tasks: [],
      lastAction: '',
    }
  },

  methods: {
    createTask(task, redo = false) {
      this.lastAction = !redo ? 'create' : ''
      this.tasks.unshift(task)
      this.saveTasks()
    },

    updateTask(data) {
      const taskId = this.tasks.findIndex(task => task.id === data.task)
      this.tasks[taskId].value = data.value
      this.saveTasks()
    },

    deleteTask(task, redo = false) {
      this.lastAction = !redo ? 'delete' : ''
      this.tasks = this.tasks.filter(el => el.id !== task.id)
      this.saveTasks()
    },

    //Save all tasks into local storage
    saveTasks() {
      const parsed = JSON.stringify(this.tasks)
      localStorage.setItem('tasks', parsed)
    },
  },

  mounted() {
    //Checking local store for existing tasks
    if (localStorage.getItem('tasks')) {
      try {
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
      } catch (error) {
        localStorage.removeItem('tasks');
      }
    }
  },
}
</script>

<style>
  .app {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
