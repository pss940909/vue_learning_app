<template>
  <base-card>
    <base-button
      @click.prevent="setTab('stored-resources')"
      :mode="storedBtnMode"
      >Stored Resources
    </base-button>
    <base-button @click.prevent="setTab('add-resource')" :mode="AddBtnMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  computed: {
    storedBtnMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    AddBtnMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  data() {
    return {
      selectedTab: 'stored-resources',
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
  provide() {
    return {
      storedResources: this.storedResources,
      addResource: this.addResource,
    };
  },
  methods: {
    setTab(cmp) {
      this.selectedTab = cmp;
      console.log(this.selectedTab);
    },
    addResource(title, description, link) {
      console.log(title, description, link);
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
  },
};
</script>
