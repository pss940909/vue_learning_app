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

  <base-dialog
    title="Input is invalid."
    v-if="inputIsInvalid"
    @close="closeDialog"
  >
    <template #default> Please enter all required information. </template>
    <template #actions>
      <base-button @click.prevent="closeDialog">Okay</base-button>
    </template>
  </base-dialog>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseCard, BaseButton, BaseDialog },
  data() {
    return {
      newResource: {},
      inputIsInvalid: false,
    };
  },
  methods: {
    submitForm() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDes = this.$refs.desInput.value;
      const enteredLink = this.$refs.linkInput.value;
      // 確認資料皆不為空值
      if (
        enteredTitle.trim() === '' ||
        enteredDes.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return; // 若有空值就不執行後續程式碼 直接返回
      }

      this.addResource(enteredTitle, enteredDes, enteredLink);
      this.$refs.titleInput.value = '';
      this.$refs.desInput.value = '';
      this.$refs.linkInput.value = '';
    },
    closeDialog() {
      this.inputIsInvalid = false;
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
