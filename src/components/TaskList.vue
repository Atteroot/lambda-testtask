<template>
  <section class="todo-list">
    <b-list-group>
      <b-list-group-item
        v-for="task in todoTasks"
        :key="task.id"
        class="todo-list__item item"
      >
        <input
          type="text"
          class="item__tasktext"
          :value="task.task"
          @focusout="handleFocusout()"
          contenteditable
          @input="editedTask = {val: $event.target.value, id: task.id}"
        >
        <div class="item__buttons buttons">
          <DeleteButton
            class="buttons__button"
            :currentTask="task"
            @delete="deleteTask(task)"
          />
          <input
            type="checkbox"
            class="btn-check"
            :id="task.id"
            autocomplete="off"
          >
          <label class="btn btn-outline-success buttons__button" :for="task.id">Done</label><br>
        </div>
      </b-list-group-item>
    </b-list-group>

    <!--This button shows when you did anything and hides when you click it once-->
    <button
      v-if="todoTasks && lastAction"
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
    task: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      editedTask: {
        val: '',
        id: 0
      },
      todoTasks: [],
      lastAction: ''
    }
  },

  mounted() {
    //Checking local store for existing tasks
    if (localStorage.getItem('tasks')) {
      try {
        this.todoTasks = JSON.parse(localStorage.getItem('tasks'));
      } catch (error) {
        localStorage.removeItem('tasks');
      }
    }
  },

  watch: {
    //Watching for new task from props
    task: function(newTask) {
      this.todoTasks.unshift(newTask);
      this.lastAction = 'create';
      this.saveTasks();
    },

    //Save edited task
    editedTask: function(task) {
      if (task.val) {
        const taskId = this.todoTasks.findIndex(el => el.id === task.id);
        this.todoTasks[taskId].task = this.editedTask.val;
        this.saveTasks();
      }
    }
  },

  methods: {
    //Clear edited task when unfocused
    handleFocusout() {
      this.editedTask = {
        val: '',
        id: 0
      }
    },

    //Delete task
    deleteTask(task) {
      this.todoTasks = this.todoTasks.filter(el => el.id !== task.id);
      this.lastAction = 'delete';
      this.saveTasks();
    },

    //Save all tasks into local storage
    saveTasks() {
      const parsed = JSON.stringify(this.todoTasks);
      localStorage.setItem('tasks', parsed);
    },

    //Clear last action
    clearAction() {
      this.lastAction = '';
      this.saveTasks();
    },

    //Redo button implementation
    redoLastAction() {
      switch (this.lastAction) {
        case "delete":
          this.todoTasks.shift();
          this.clearAction();
          break;
        case "create":
          this.todoTasks.unshift({
            id: Date.now(),
            task: this.todoTasks[0].task
          });
          this.clearAction();
          break;
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
