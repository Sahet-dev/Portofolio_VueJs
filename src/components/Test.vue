<template>
  <div>
    <p class="mt-8 big-text">KAKAJANOV SAHETMYRAT</p>
<!--    <div class="reveal-type text-center mt-4 bg-white shadow rounded m-2">-->
<!--      I'm passionate about creating innovative solutions and bringing ideas to life through code and design. Explore my projects to see what I've been working on!-->
<!--    </div>-->
    <div class="">
      <div class="bg-white mt-6 ml-4">
        With a strong foundation in web development and design, my skills include proficiency in
        <span class="font-bold">HTML, CSS, JavaScript, PHP</span> and frameworks like <span class="font-bold">Vue.js</span> and <span class="font-bold"> Laravel</span>. I specialize in creating responsive and visually appealing websites.
      </div>
    </div>

    <div class="mt-8 flex justify-center">
      <div class="max-w-screen-lg w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Featured Project 1 -->
          <div class=" bg-white p-4 rounded shadow-md">
            <h3 class="text-lg text-center font-bold mb-2">Social Media Website</h3>
            <p class="mb-4 text-center">A social media website is an online platform that allows users to create profiles, share content, connect with others, and engage in various forms of interaction within a digital community.</p>
            <a href="#" class="text-teal-500 hover:underline">View Project →</a>
          </div>
          <!-- Featured Project 2 (Repeat for other projects) -->
        </div>
      </div>
    </div>

    <div class="text-center mt-8 mb-8">
      <p ref="box4" class="text-lg mb-4">
        Ready to explore more? Dive into my portfolio and discover a collection of projects that highlight my technical skills and creative solutions.
      </p>
      <div ref="box5" class="flex justify-center space-x-4">
        <a href="#" class="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 gradient-text">Explore Projects</a>
        <a href="#" class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800">Contact Me</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//
// gsap.registerPlugin(ScrollTrigger);
//
// const elements = document.querySelectorAll(".reveal-type");
//
// elements.forEach(element => {
//   const chars = element.textContent.split("");
//   element.textContent = "";
//
//   chars.forEach((char, index) => {
//     const charSpan = document.createElement("span");
//     charSpan.textContent = char;
//     charSpan.style.opacity = "0.8";
//     element.appendChild(charSpan);
//
//     gsap.from(charSpan, {
//       opacity: 0.2,
//       scrollTrigger: {
//         trigger: element,
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true,
//         markers: true
//       },
//       delay: index * 0.1
//     });
//   });
// });





</script>

<style scoped>
.big-text {
  background-image: linear-gradient(to right, #1e0a81, green, rgb(7, 79, 7), green, #1e0a81,  #eee896);
  -webkit-background-clip: text; /* For Safari */
  background-clip: text;
  color: transparent;
  font-weight: bold;
  text-align: center;
  font-size: 50px;
  will-change: transform;
}

.gradient-text {
  background-image: linear-gradient(to right, #d9f373,  #055f2a);
  -webkit-background-clip: text; /* For Safari */
  background-clip: text;
  color: transparent;
}


section {
  height: 100vh;
  padding: 0 clamp(4rem, 12vw, 20rem);
  display: grid;
  place-content: center;
}

p{
  font-size: clamp(2rem, 5vw, 8rem);
}

&:nth-of-type(1){
  border-bottom: 1px solid #292901;
}
&:nth-of-type(3){
  background: #ffff00;
}
&:nth-of-type(4){
  background: rgb(29, 9, 29);
  color: white;
}

</style>
