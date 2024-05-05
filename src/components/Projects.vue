<!-- src/components/Projects.vue -->
<template>
  <div class="container  px-4">
    <div class="flex flex-col items-center">
      <!-- Project 1 -->
      <div class="bg-white p-4 rounded shadow-md  mt-12 animated-element"><a href="https://laravel-postify.com/" class="hover:underline">
        <h3 class="text-lg font-bold mb-2">Laravel Social Media App </h3>

      </a>
        <p class="mb-4"> Social Media Website featuring user
          registration with email verification, customizable profile
          pages with tabs for posts, followers, followings, photos, and
          personal information.</p>
        <div class="flex justify-center items-center">

          <img :src="socialApp" :width="desiredWidth" :height="desiredHeight"></div>
        <a href="https://github.com/Sahet-dev/Laravel_Social_Media_webApp" class="text-teal-500 hover:underline">View Details →</a>
      </div>
      <!-- Project 2 -->
      <div class="bg-white p-4 rounded shadow-md mt-6 w-full animated-element">
        <h3 class="text-lg font-bold mb-2">Blog App. PHP Symfony 6 app</h3>
        <p class="mb-4">Creating account and Start Blog.</p>
        <div class="flex justify-center items-center">

        <a href="https://github.com/Sahet-dev/Symfony6BlogApp" class="text-teal-500 hover:underline">View Details →</a>
        </div>
      </div>

      <div class="bg-white p-4 rounded shadow-md mt-6 animated-element">
                <a href="" class="hover:underline">

        <h3 class="text-lg font-bold mb-2">
          Learn English & Take a quiz </h3></a>
        <p class="mb-4">English Grammar guide and workbook. The user fills in the fields
          manually and the answers are displayed.</p>
        <div class="flex justify-center items-center">
          <img :src="en" :width="desiredWidth" :height="desiredHeight" >

        </div>
        <a href="https://github.com/Sahet-dev/English-grammar-app" class="text-teal-500 hover:underline">View Details →</a>
      </div>
      <!-- Project 3 -->
      <div class="bg-white p-4 rounded shadow-md  mt-6 animated-element">
                <a href="https://sahet-dev.github.io/bootstrap_random_quote_generator/" class="hover:underline">


        <h3 class="text-lg font-bold mb-2">Random Quote Generator </h3></a>
        <p class="mb-4">The Random Quote Generator app is a simple yet engaging tool designed to provide users with thought-provoking and
          inspiring quotes at random. Ready to share on X
        </p>
        <div class="flex justify-center items-center">

          <img :src="randomQuote" :width="desiredWidth" :height="desiredHeight"></div>
        <a href="https://github.com/Sahet-dev/bootstrap_random_quote_generator" class="text-teal-500 hover:underline">View Details →</a>
      </div>
      <!-- Project 4 -->
      <div class="bg-white p-4 rounded shadow-md  mt-6 animated-element">
                <a href="https://sahet-dev.github.io/bootstrap_drum_machine/" class="hover:underline">


        <h3 class="text-lg font-bold mb-2">Drum Machine </h3></a>
        <p class="mb-4">The Drum Machine app is an interactive digital instrument that allows users to create rhythmic beats and
          music compositions with ease</p>
        <div class="flex justify-center items-center">

          <img :src="drumMachine" :width="desiredWidth" :height="desiredHeight"></div>
        <a href="https://github.com/Sahet-dev/bootstrap_drum_machine" class="text-teal-500 hover:underline">View Details →</a>
      </div>
      <!-- Project 5 -->
      <div class="bg-white p-4 rounded shadow-md  mt-6 animated-element">
        <a href="https://sahet-dev.github.io/markdown_previewer_react_bootstrap/" class="hover:underline">

        <h3 class="text-lg font-bold mb-2">Markdown Previewer </h3></a>
        <p class="mb-4">The Markdown Previewer is a web application designed to help users
          visualize and format Markdown syntax in real-time. Markdown is a lightweight markup language
          used for formatting plain text documents, commonly used in forums.</p>
        <div class="flex justify-center items-center">

          <img :src="markdown" :width="desiredWidth" :height="desiredHeight"></div>
        <a href="https://github.com/Sahet-dev/markdown_previewer_react_bootstrap" class="text-teal-500 hover:underline">View Details →</a>
      </div>
      <!-- Project 6 -->
      <div class="bg-white p-4 rounded shadow-md  mt-6 animated-element">
                <a href="https://sahet-dev.github.io/JS_calculator/" class="hover:underline">


        <h3 class="text-lg font-bold mb-2">JavaScript Calculator App </h3></a>
        <p class="mb-4">
          The JavaScript Calculator App is a web-based application that allows users to perform mathematical calculations directly within
          their web browser. It provides a convenient and intuitive interface for users to input mathematical expressions,
          execute calculations, and view results in real-time

        </p>
        <div class="flex justify-center items-center">

          <img :src="calculator" :width="desiredWidth" :height="desiredHeight"></div>
        <a href="https://github.com/Sahet-dev/JS_calculator" class="text-teal-500 hover:underline">View Details →</a>
      </div>
      <!-- Project 7 -->
      <div class="bg-white p-4 rounded shadow-md  mt-6 animated-element">
                <a href="https://sahet-dev.github.io/Pomodoro_clock_react/" class="hover:underline">


        <h3 class="text-lg font-bold mb-2">Pomodoro clock app </h3></a>
        <p class="mb-4">The Pomodoro Clock App is a productivity tool designed to help users manage their time effectively using the Pomodoro
          Technique. The technique involves breaking work into intervals, traditionally 25 minutes in length, separated by short breaks. </p>
        <div class="flex justify-center items-center">

          <img :src="pomodoro" :width="desiredWidth" :height="desiredHeight"></div>
        <a href="https://github.com/Sahet-dev/Pomodoro_clock_react" class="text-teal-500 hover:underline">View Details →</a>
      </div>
      <br>
      <br>
      <br>
      <br>

    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      desiredWidth: '300px', // Adjust as needed
      desiredHeight: 'auto',
      imagePath: "./public/img/background.png",
      socialApp: "./public/projectsImg/socialapp.png",
      blogApp: "./public/projectsImg/blogapp.png",
      en: "./public/projectsImg/engtm.png",
      randomQuote: "./public/projectsImg/randomquote.png",
      drumMachine: "./public/projectsImg/drummachine.png",
      markdown: "./public/projectsImg/markdown.png",
      calculator: "./public/projectsImg/calculator.png",
      pomodoro: "./public/projectsImg/pomodoro.png",
      showHello: true,};
  },
  setup() {
    const showTitle = ref(true);

    const beforeEnter = (el) => {
      el.style.transform = 'scale(0.1)'; // Start with smaller scale
      el.style.opacity = 0;
    };

    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1.5,
        scale: 1, // Scale to full size
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done,
      });
    };

    const afterEnter = () => {};

    return {
      showTitle,
      beforeEnter,
      enter,
      afterEnter,
    };
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      this.showHello = false;
    }, 4000);

    gsap.utils.toArray('.animated-element').forEach(element => {
      gsap.set(element, { opacity: 0, scale: 0.5 });

      gsap.to(element, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
          markers: false
        }
      });
    });

    gsap.to(this.$refs.image, {
      backgroundColor: "red", // Change the background color
      duration: 1,
      scrollTrigger: {
        trigger: this.$refs.image,
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
        markers: false,
      },
    });
  }


}

</script>

<style scoped>
/* Add your custom styling for the Projects component here */
</style>
