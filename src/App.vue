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
import LearningResource from './components/learning-resource/LearningResource.vue';
export default {
  components: {
    LearningResource,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official',
          title: 'The Offcial Guide',
          description: 'The officail Vue.js documentation',
          link: 'https://vuejs.org/',
        },
        {
          id: 'google',
          title: 'Google.com',
          description: 'Learn to google...',
          link: 'https://www.google.com.tw/?hl=zh_TW',
        },
      ],
    };
  },
};
</script>
