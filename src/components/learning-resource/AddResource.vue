<template>
  <base-card>
    <form>
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="3"
          ref="desInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" name="link" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit" @click.prevent="submitForm"
          >Add Resource</base-button
        >
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
export default {
  components: { BaseCard, BaseButton },
  data() {
    return {
      newResource: {},
    };
  },
  methods: {
    submitForm() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDes = this.$refs.desInput.value;
      const enteredLink = this.$refs.linkInput.value;
      this.addResource(enteredTitle, enteredDes, enteredLink);
      this.$refs.titleInput.value = '';
      this.$refs.desInput.value = '';
      this.$refs.linkInput.value = '';
    },
  },
  inject: ['addResource'],
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
