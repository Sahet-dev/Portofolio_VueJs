<template>
  <div>
      <p class="mt-8 big-text">KAKAJANOV  SAHETMYRAT </p>
        
    
    
    <p class="text-center   mt-4 bg-white shadow rounded m-2">
        I'm passionate about creating innovative solutions and bringing ideas to life through code and design. Explore my projects to see what I've been working on!
    </p>
    <div class="text-lg text-center   mt-6">
      With a strong foundation in web development and design, my skills include proficiency in
      <span class="font-bold">HTML, CSS, JavaScript, PHP</span> and frameworks like <span class="font-bold">Vue.js</span> and <span class="font-bold"> Laravel</span>. I specialize in creating responsive and visually appealing websites.
    </div>
    <div class="mt-8 flex justify-center">
      <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Featured Project 1 -->
          <div class=" bg-white p-4 rounded shadow-md">
              <h3 class="text-lg font-bold mb-2">Social Media Website  </h3>
              <p class="  mb-4">A social media website is an online platform that allows users to create profiles, share content, connect with others, and engage in various forms of interaction within a digital community. 
              </p>
              <a href="#" class="text-teal-500 hover:underline">View Project →</a>
          </div>
          <!-- Featured Project 2 (Repeat for other projects) -->
      </div>
    </div>

    <div class=" text-center mt-8 mb-8">
      <p class="text-lg mb-4">
          Ready to explore more? Dive into my portfolio and discover a collection of projects that highlight my technical skills and creative solutions.
      </p>
      <div class="flex justify-center space-x-4">
          <a href="#" class="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 gradient-text">Explore Projects</a>
          <a href="#" class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800">Contact Me</a>
      </div>
    </div>
  </div>
</template>

<script setup>
// const email = "your.email@example.com";
// const linkedin = "linkedin.com/in/yourprofile";
import { ref, onMounted, onBeforeUnmount } from 'vue';

const scrollDirection = ref('down');
let prevScrollPos = window.pageYOffset;

const handleScroll = () => {
  const currentScrollPos = window.pageYOffset;
  if (currentScrollPos > prevScrollPos) {
    // Scrolling down
    scrollDirection.value = 'down';
  } else {
    // Scrolling up
    scrollDirection.value = 'up';
  }
  prevScrollPos = currentScrollPos;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>



@keyframes moveUpToDown {
  /* 0% {
    transform: translateX(-10%);
  }
  25% {
    transform: translateX(10%);
  }
  50% {
    transform: translateX(-10%);
  }
  60% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(-10%);
  } */
}

@keyframes moveDownToUp {
  /* 0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-60%);
  } */
}

.big-text {
  background-image: linear-gradient(to right, #1e0a81, green, rgb(7, 79, 7), green, #1e0a81,  #eee896);
    -webkit-background-clip: text; /* For Safari */
    background-clip: text;
    color: transparent;
  font-weight: bold;
  text-align: center;
  /* color: #f7fafc; */
  font-size: 50px;
  will-change: transform;
 
}

.move-up-to-down {
  animation: moveUpToDown 25s linear infinite;
}

.move-down-to-up {
  animation: moveDownToUp 15s linear infinite;
}

.gradient-text {
    background-image: linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);
    -webkit-background-clip: text; /* For Safari */
    background-clip: text;
    color: transparent;
}



</style>
