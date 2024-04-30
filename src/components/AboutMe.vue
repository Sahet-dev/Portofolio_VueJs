<template>
  <div class="text-gray-200">

    <section class="container mx-auto py-8">
      <Transition appear
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
      >
        <h2 v-if="showTitle" class="text-3xl font-semibold mb-4 mt-4">About Me</h2>
      </Transition>

      <div class="max-w-2xl mx-auto">
        <p class="  mb-4">
          Hi, I am Sahet, I am from Turkmenistan and passionate about all things Frontend and Backend. I work hard, I care
          about writing clean code and I really like to learn about Web development. I am currently looking for opportunity
          to work in an environment
          that will help me progress into web developer role.

        </p>
      </div>

      <div class="max-w-2xl mx-auto mt-8 animated-element">
        <h2 class="text-2xl font-bold mb-4">Skills and Expertise</h2>
        <p class="  mb-4">
          I possess a diverse set of skills, including proficiency in HTML, CSS, JavaScript, Vue.js, PHP, Laravel and more. My expertise lies in creating intuitive and visually appealing web applications.
        </p>
      </div>

      <div class="max-w-2xl mx-auto mt-8 animated-element">
        <h2 class="text-2xl font-bold mb-4">Professional Experience</h2>
        <div class="mb-4">
          <h3 class="text-lg font-bold mb-2">Web Developer - [Company Name]</h3>
          <p class=" ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nisl eu neque sollicitudin, ac auctor purus mattis.</p>
        </div>
        <!-- Add more work experience sections as needed -->
      </div>
      <div class="animated-element">
        <h2 class="text-2xl font-bold mb-4 ">Certifications and Achievements</h2>
        <ul>
          <li><a href="https://symfonycasts.com/certificates/9B3AB07FC146"  class="hover:underline">Doctrine, Symfony & the Database.</a></li>
          <li><a href="https://symfonycasts.com/certificates/507536ACC139" class="hover:underline">Symfony 5 Security: Authenticators</a></li>
          <li><a href="https://symfonycasts.com/certificates/7F544974C149" class="hover:underline">API Platform 3</a></li>
          <li><a href="https://symfonycasts.com/certificates/C9F320DBC150" class="hover:underline">API Platform: Secure your Treasures</a></li>
          <li><a href="https://www.freecodecamp.org/certification/Sahet/front-end-development-libraries" class="hover:underline">FreeCodeCamp certification</a></li>
          <li><a href="https://symfonycasts.com/certificates/3363E9EEC141" class="hover:underline">Harmonious Development with Symfony 6</a></li>
          <li><a href="https://symfonycasts.com/certificates/3C816F45C144" class="hover:underline">Symfony 6 Fundamentals: Services, Config & Environments</a></li>
        </ul>
      </div>


      <!-- Add more certifications and achievements -->


      <div class="max-w-2xl mx-auto mt-8 animated-element">
        <h2 class="text-2xl font-bold mb-4">Interests and Hobbies</h2>
        <p class=" ">
          In addition to coding, I enjoy [Your Interests or Hobbies]. Whether it's exploring new technologies or [Another Interest], I always find joy in continuous learning and personal growth.
        </p>
      </div>

      <div class="max-w-2xl mx-auto mt-8 animated-element">
        <h2 class="text-2xl font-bold mb-4">Meet [Your Name]</h2>
        <img src="" alt="Your Name" class="rounded-full w-32 h-32 object-cover mb-4">
        <p class=" ">
          Thank you for taking the time to learn more about me. If you have any questions or would like to connect, feel free to reach out!
        </p>
      </div>
    </section>
  </div>


</template>

<script>


import { ref } from 'vue';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default {
  setup() {
    const showTitle = ref(true);

    const beforeEnter = (el) => {
      el.style.transform = 'translateY(-60px)';
      el.style.opacity = 0;
    };

    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1,
        y: 0,
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

    const elements = this.$el.querySelectorAll('.animated-element');

    elements.forEach(element => {
      gsap.set(element, { opacity: 0, skewX: 20 });

      gsap.to(element, {
        opacity: 1,
        skewX: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: true,
          markers: true,
          onEnter: () => {
            element.classList.add('animate');
          },
          onLeaveBack: () => {
            element.classList.remove('animate');
          }
        }
      });
    });

  }


};

</script>

<style scoped>

</style>
