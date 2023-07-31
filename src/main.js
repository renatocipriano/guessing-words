import { createApp, computed } from 'vue';
import App from './App.vue';
import { useStore } from 'vuex';
import store from './store/index.js';
import router from './router/index.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "@/main.css"
import { numberToWords } from './directives/numberToWords'; // Substitua pelo caminho correto para o arquivo numberToWords.js

const app = createApp(App);
app.config.globalProperties.computed = computed;
app.config.globalProperties.$store = useStore();

app.use(store);
app.use(router);

app.directive('number-to-words', {
    mounted(el, binding) {
        el.textContent = numberToWords(binding.value);
    },
});
app.mount('#app');
import "bootstrap/dist/js/bootstrap.js"