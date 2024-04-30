import Home from '@/components/Home.vue'
import AboutMe from '@/components/AboutMe.vue'
import Projects from '@/components/Projects.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Contact from '@/components/Contact.vue'
import Tests from '@/components/Tests.vue'

const routes =  [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: AboutMe},
    {path: '/projects', name: 'Projects', component: Projects},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/tests', name: 'Tests', component: Tests},
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router