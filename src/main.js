import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);

// global cmp
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('error-alert', BaseDialog);
app.mount('#app');
