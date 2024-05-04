<template>
  <div>
    <br><br><br>


    <br><br><br><br>
    <p class=" name text-gray-100 text-center text-6xl">KAKAJANOV SAHETMYRAT</p>
    <img :src="imagePath" alt="Your Image" class="animated-element" />

    <div class="">
      <div class="reveal-types text-gray-100 animated-element animated-element">
        <p class="p-4 text-gray-100 text-center text-4xl">
          I'm passionate about creating innovative solutions and bringing ideas to life through code and design. Explore my projects to see what I've been working on!
        </p>
      </div>






    </div>
    <div class="text-center animated-element animated-element" >
      <div class=" bg-white mt-6 h-screen p-0 sm:p-4 md:p-12 lg:p-20 grid place-content-center text-blue-900  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        With a strong foundation in web development and design, my skills include proficiency in
        <b>HTML, CSS, JavaScript, PHP</b>and frameworks like <b>Vue.js</b> and <b> Laravel</b>
        I am dedicated to continuous learning and staying up-to-date with the latest industry trends. I specialize in creating responsive and visually appealing websites.
      </div>
    </div>

    <div class="mt-8 flex justify-center animated-element">
      <div class="max-w-screen-lg w-full">
        <div class="flex items-center ">
          <!-- Featured Project 1 -->
          <div class=" bg-white p-4 rounded shadow-md m-2 " >
            <h3 class="text-lg text-center font-bold mb-2 ml-2">Social Media Website</h3>
            <p class="mb-4 text-center">A social media website is an online platform that allows users to create profiles, share content, connect with others, and engage in various forms of interaction within a digital community.</p>
            <a href="https://laravel-postify.com/" class="text-teal-500 hover:underline">View Project →</a>
          </div>

          <!-- Featured Project 2 (Repeat for other projects) -->

<!--          <div class=" bg-white p-4 rounded shadow-md animated-element m-2" >-->
<!--            <h3 class="text-lg text-center font-bold mb-2">Social Media Website</h3>-->
<!--            <p class="mb-4 text-center">A social media website is an online platform that allows users to create profiles, share content, connect with others, and engage in various forms of interaction within a digital community.</p>-->
<!--            <a href="https://laravel-postify.com/" class="text-teal-500 hover:underline">View Project →</a>-->
<!--          </div>-->
        </div>
      </div>
    </div>

    <div class="text-center mt-8 mb-8" >
      <p class="h-screen p-0 sm:p-4 md:p-12 lg:p-20 grid place-content-center text-gray-100 mt-6
      text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl animated-element"   >
        Ready to explore more? Dive into my portfolio and discover a collection of projects that highlight my technical skills and creative solutions.
      </p>
      <div ref="box5" class="flex justify-center space-x-4">

        <div   >
          <router-link to="/projects"
                       class="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 gradient-text">Explore Projects
          </router-link>
        </div>
        <div   >
          <router-link to="contact" class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 "> Contact</router-link>

        </div>
  <div>

  </div>
        <br>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ref} from "vue";





export default {
  data() {
    return {
      imagePath: "public/img/background.png", // Default image path
    };
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


  }


}




</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0.8); /* Start with a smaller scale */
}
.fade-enter-active {
  transform: scale(1); /* Scale to full size */
}
.hello-text {
  font-size: 2rem; /* Adjust font size as needed */
  /* Add any other styling for the hello text */
}



</style>
