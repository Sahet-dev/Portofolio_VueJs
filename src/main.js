
import { createApp } from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
import '@fontsource/koho/200.css';
import '@fontsource/koho/300.css';
import '@fontsource/koho/400.css';
import '@fontsource/koho/500.css';
import '@fontsource/koho/600.css';
import '@fontsource/koho/700.css';
import './assets/font.css'
import router from '../router'

createApp(App)
.use(router)
.mount('#app')
