<template>
  <div>
    <b-button
      v-b-modal="'myModal' + currentTask.id"
    >
      Delete
    </b-button>

    <b-modal
      :id="'myModal' + currentTask.id"
      ref="myModal"
    >
      <p class="my-4">Are you sure that you want to delete "{{currentTask.task}}" task?</p>

      <template #modal-footer>
        <b-button variant="danger" @click="deleteTask">Yes</b-button>
        <b-button @click="hideModal">Later</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    currentTask: {
      type: Object,
      required: true
    }
  },

  methods: {
    hideModal() {
      this.$refs['myModal'].hide();
    },

    deleteTask() {
      this.$emit('delete');
    }
  },
}
</script>
