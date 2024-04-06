<script setup>
import { RouterLink, RouterView } from 'vue-router';


import { ref } from 'vue'
const currentPageName = ref('');
const isTestShowing = ref(false);
const isShowing = ref(true);
const isShowingPageName = ref(false);




</script>
<template>
  <div class="flex justify-center items-center mt-4 w-full">
          
    <div id="navbar" class="fixed z-10 backdrop-filter backdrop-blur-md rounded-full">
      <router-link to="/"> Home </router-link> |   
      <router-link to="/projects"> Projects </router-link> |
      <router-link to="/about"> About </router-link>    |
      <router-link to="contact"> Contact </router-link> |
    </div>
  </div>
  <div class="">
    <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  </div>
  
</template>

<style>
body {
  
  text-align: center;
 
  /* color: #e1e4e7; */
  margin: 0;
  background: #ebeaea;
  /* background: black; */
  
}
#navbar {
  padding: 10px;
}
#navbar a {
  font-weight: bold;
  color: #e49e58;
}
#navbar a.router-link-exact-active {
  color: #5daeec;
  text-decoration-line: underline
}

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