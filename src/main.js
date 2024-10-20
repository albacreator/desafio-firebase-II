// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './firebaseConfig'; // Asegúrate de que esta línea esté presente

createApp(App)
  .use(router)
  .mount('#app');
