<script setup>
import Navbar from './components/Navbar.vue';
import Projects from './components/Projects.vue'
import AboutMe from './components/AboutMe.vue'
import Contact from './components/Contact.vue'
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel, TransitionRoot } from '@headlessui/vue'

const isShowing = ref(true)

</script>

<template>
  <div class="w-full  px-2 py-16 sm:px-0 w-full justify-center">
    <TabGroup>
      <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1 justify-center gap-16">
        <Tab>
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white text-blue-700 shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            Projects 
          </button>
        </Tab>
        <Tab>
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white text-blue-700 shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            About me 
          </button>
        </Tab>
        <Tab>
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white text-blue-700 shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            Conatct me 
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">

        <TabPanel
        :class="[
            'rounded-xl bg-white p-3',
            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]">
          <Projects />
        </TabPanel>
        <TabPanel
        :class="[
            'rounded-xl bg-white p-3',
            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]">
          <AboutMe/>
        </TabPanel>
        <TabPanel
        :class="[
            'rounded-xl bg-white p-3',
            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]">
          <Contact></Contact>
        </TabPanel>
        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </TabPanels>
    </TabGroup>

    
  
 
  </div>
</template>

<style>

.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active{
  transition: all 0.3s ease-out;
}
.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active{
  transition: all 0.3s ease-out;
}

</style>
./components/Home.vue./components/Home.vue





<!-- 








<div class="about-content text-lg leading-relaxed px-3 bg-white rounded border py-3 lg:h-full overflow-hidden lg:flex lg:flex-col">
  <p>
    Hello! I'm {{ yourName }}, an aspiring web developer and video editor. I have a passion
    for creating visually appealing websites and bringing creative ideas to life.
  </p>
  <p>
    Hi, I am Sahet, I am from Turkmenistan and passionate about all things Frontend and Backend. I'm currently studying as an engineering student and actively expanding my skills in web
    development. My journey into the world of technology began with {{ yourBackground }}.
  </p>
  <p>I work hard, I care
    about writing clean code and I really like to learn about Web development. I am currently looking for opportunity
    to work in an environment
    that will help me progress into web developer role.</p>
  <p>
    In the realm of video editing and filmmaking, I enjoy {{ yourHobbies }}. Whether it's
    crafting engaging narratives or experimenting with visual effects, I love the creative
    process.
     
  </p>
</div> -->