<template>
  <header class="header">
    <span class="header__text h1">
      TODO List
    </span>

    <div class="header__inputs inputs">
      <input
        v-model="task"
        type="text"
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
    }
  },

  methods: {
    //Create new task
    createTask() {
      if (!this.task) {
        return
      }

      this.$emit('create', {
        id: Date.now(),
        value: this.task,
      })
      this.task = ''
    },
  },
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
