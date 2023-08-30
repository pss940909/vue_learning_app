<template>
  <ul>
    <learning-resource
      v-for="item in storedResources"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :des="item.description"
      :resLink="item.link"
      @deleteResource="deleteResource"
    >
    </learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  components: {
    LearningResource,
  },
  inject: ['storedResources', 'removeResource'],
  methods: {
    deleteResource(id) {
      console.log(id);
      this.removeResource(id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
