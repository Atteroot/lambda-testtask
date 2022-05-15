<template>
  <header class="header">
    <span class="header__text h1">
      TODO List
    </span>

    <div class="header__inputs inputs">
      <input
        type="text"
        v-model="task"
        class="inputs__input"
      >
      <button
        class="btn btn-primary inputs__button"
        @click="createTask"
      >
        Create task
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      task: '',
      lastAction: {
        action: '',
        task: ''
      },
      newTask: {
        id: 0,
        task: ''
      }
    }
  },

  methods: {
    //Create new task
    createTask() {
      if (this.task.length > 0) {
        this.newTask.id = Date.now();
        this.newTask.task = this.task;
        this.$emit('create', this.newTask);
        this.lastAction.action = 'create';
        this.lastAction.task = this.newTask;
        this.newTask = {
          id: 0,
          task: ''
        };
        this.task = '';
      }
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 10px;
  }

  .inputs {
    display: flex;
  }

  .inputs__input {
    width: 450px;
  }

  .inputs__button,
  .inputs__input {
    margin-right: 5px;
  }
</style>
