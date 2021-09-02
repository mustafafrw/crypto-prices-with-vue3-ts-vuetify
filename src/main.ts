import { createApp } from 'vue';
import vuetify from './plugins/vuetify';
import './plugins/axios';
import App from './App.vue';

createApp(App)
  .use(vuetify)
  .mount('#app');
