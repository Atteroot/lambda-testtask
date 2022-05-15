<template>
  <section class="todo-list">
    <b-list-group>
      <b-list-group-item
        v-for="task in tasks"
        :key="task.id"
        class="todo-list__item item"
      >
        <input
          type="text"
          class="item__tasktext"
          :value="task.value"
          contenteditable
          @input="updateTask(task.id, $event.target.value)"
        >
        <div class="item__buttons buttons">
          <delete-button
            class="buttons__button"
            :currentTask="task"
            @delete="$emit('delete-task', task)"
          />
          <input
            type="checkbox"
            class="btn-check"
            :id="task.id"
            autocomplete="off"
          >
          <label class="btn btn-outline-success buttons__button" :for="task.id">Done</label>
        </div>
      </b-list-group-item>
    </b-list-group>

    <!--This button shows when you did anything and hides when you click it once-->
    <button
      v-if="lastAction"
      class="btn btn-secondary todo-list__redo-button"
      @click="redoLastAction"
    >
      Redo
    </button>
  </section>
</template>

<script>
import DeleteButton from './ConfirmDeleteButton.vue'

export default {
  components: {
    DeleteButton
  },

  props: {
    tasks: {
      type: Array,
      required: true,
    },
    lastAction: {
      type: String,
      required: true,
    },
  },

  methods: {
    updateTask(taskId, value) {
      this.$emit('update-task', {
        task: taskId,
        value: value,
      })
    },

    //Redo button implementation
    redoLastAction() {
      switch (this.lastAction) {
        case 'delete':
          this.$emit(
            'delete-task',
            this.tasks.at(-1),
            true,
          )
          break
        case 'create':
          this.$emit(
            'create-task',
            {
              id: Date.now(),
              value: this.tasks[0].value,
            },
            true,
          )
          break
      }
    }
  }
}
</script>

<style scoped>
  .todo-list {
    margin: 0 50px;

    position: relative;
  }

  .list-group-item {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
  }

  .item__tasktext {
    resize: none;
    border: none;
    outline: none;
    background-color: white;

    width: 70%;
  }

  .item__buttons {
    display: flex
  }

  .buttons__button {
    margin-right: 5px;
  }

  .todo-list__redo-button {
    position: absolute;

    margin-top: 5px;
    right: 0;
  }
</style>
