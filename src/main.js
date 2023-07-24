import { createApp,computed } from 'vue';
import App from './App.vue';
import { useStore } from 'vuex';
import store from './store/index.js';

const app = createApp(App);
app.config.globalProperties.computed = computed;
app.config.globalProperties.$store = useStore();

app.use(store);
app.mount('#app');