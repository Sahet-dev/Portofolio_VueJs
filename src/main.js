
import { createApp } from 'vue'
import App from './App.vue'
import {MotionPlugin} from "@vueuse/motion";
import '@fontsource-variable/league-spartan';
import './assets/font.css'
import 'tailwindcss/tailwind.css'
import router from '../router'

createApp(App)
.use(router)
.use(MotionPlugin)
.mount('#app')
