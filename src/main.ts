// Import libraries and plugins
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useShoppingStore } from './stores/shopping'

import App from './App.vue'
import router from './router/index'

// Import styles
import '@/assets/styles/main.scss';

const app = createApp(App);
app.use(createPinia());
app.use(router);

// use store globally
const shoppingStore = useShoppingStore()
app.config.globalProperties.$shoppingStore = shoppingStore

app.mount('#app');