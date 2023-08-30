<template>
  <ul>
    <learning-resource
      v-for="item in storedResources"
      :key="item.id"
      :title="item.title"
      :des="item.description"
      :resLink="item.link"
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
  inject: ['storedResources'],
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
