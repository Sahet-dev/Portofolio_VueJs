<template>
  <div class="text-gray-200">

    <section class="container mx-auto py-8">

  <div class="m-2">
    <div class="max-w-2xl mx-auto">
      <Transition appear
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
      >
        <h2 v-if="showTitle" class="text-3xl font-semibold mb-4 mt-4">About Me</h2>
      </Transition>
      <div class="background-image">
        <div class="content">
          <p class="mt-14 mb-14 pb-14 pt-14 ml-4 mr-4">
            Hi, I am Sahet, I am from Turkmenistan and passionate about all things Frontend and Backend. I work hard, I care
            about writing clean code and I really like to learn about Web development. I am currently looking for opportunity
            to work in an environment that will help me progress into web developer role.
          </p>
        </div>
      </div>

    </div>

    <div class="max-w-2xl mx-auto mt-8 animated-element">
      <h2 class="text-2xl font-bold mb-4">Skills and Expertise</h2>
      <p class="  mb-4">
        I possess a diverse set of skills, including proficiency in HTML, CSS, JavaScript, Vue.js, PHP, Laravel and more. My expertise lies in creating intuitive and visually appealing web applications.
      </p>


      <div class=" items-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="44px" height="44px" style="display: inline-block;"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"/><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="44px" height="44px" style="display: inline-block;"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"/><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="44px" height="44px" style="display: inline-block;"><path fill="#ffd600" d="M6,42V6h36v36H6z"/><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="44px" height="44px" style="display: inline-block;"><polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"/><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="45px" height="45px" style="display: inline-block;"><path fill="#dcd5f2" d="M40,61.5C18.22,61.5,0.5,51.855,0.5,40S18.22,18.5,40,18.5S79.5,28.145,79.5,40S61.78,61.5,40,61.5z"/><path fill="#8b75a1" d="M40,19c21.505,0,39,9.421,39,21S61.505,61,40,61S1,51.579,1,40S18.495,19,40,19 M40,18 C17.909,18,0,27.85,0,40s17.909,22,40,22s40-9.85,40-22S62.091,18,40,18L40,18z"/><path fill="#36404d" d="M25.112 34c1.725 0 3.214.622 4.084 1.706.749.934.981 2.171.668 3.577C29.023 43.074 27.395 44 21.57 44h-4.14l1.75-10H25.112M25.112 32H17.5L14 52h2l1.056-6h4.515c5.863 0 9.053-.905 10.246-6.284C32.842 35.096 29.436 32 25.112 32L25.112 32zM61.112 34c1.725 0 3.214.622 4.084 1.706.749.934.981 2.171.668 3.577C65.023 43.074 63.395 44 57.57 44h-4.14l1.75-10H61.112M61.112 32H53.5L50 52h2l1.056-6h4.515c5.863 0 9.053-.905 10.246-6.284C68.842 35.096 65.436 32 61.112 32L61.112 32z"/><g><path fill="#36404d" d="M49.072,33.212C48.193,32.348,46.644,32,44.334,32h-5.538L40,26h-2.1L34,46h1.99l2.388-12h0.419 h5.538c2.338,0,3.094,0.4,3.335,0.637c0.343,0.338,0.424,1.226,0.217,2.363l-1.767,9h2.106l1.626-8.63 C50.199,35.462,49.936,34.062,49.072,33.212z"/></g></svg>
       <svg xmlns="http://www.w3.org/2000/svg" height="54" width="54"  viewBox="-7.4481 -12.7791 64.5502 76.6746" style="display: inline-block;"><path fill-rule="evenodd" fill="#FF2D20" d="M49.626 11.5639a.809.809 0 01.028.209v10.972a.8.8 0 01-.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694L20.42 51.0099c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 01-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.9439a.801.801 0 01-.402-.694V6.3339c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 01.8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 01.028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 01.8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zM1.602 7.7189v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994l-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.7189l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325l-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zM20.02 38.3299l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z"/></svg>
      </div>
    </div>

    <div class="max-w-2xl mx-auto mt-8 animated-element">

      <!-- Add more work experience sections as needed -->
      <div class="animated-element">
        <h2 class="text-2xl font-bold ">Certifications and Achievements</h2>
        <ul class="">
          <li><a href="https://symfonycasts.com/certificates/9B3AB07FC146"  class="hover:underline">Doctrine, Symfony & the Database.</a></li>
          <li><a href="https://symfonycasts.com/certificates/507536ACC139" class="hover:underline">Symfony 5 Security: Authenticators</a></li>
          <li><a href="https://symfonycasts.com/certificates/7F544974C149" class="hover:underline">API Platform 3</a></li>
          <li><a href="https://symfonycasts.com/certificates/C9F320DBC150" class="hover:underline">API Platform: Secure your Treasures</a></li>
          <li><a href="https://www.freecodecamp.org/certification/Sahet/front-end-development-libraries" class="hover:underline">FreeCodeCamp certification</a></li>
          <li><a href="https://symfonycasts.com/certificates/3363E9EEC141" class="hover:underline">Harmonious Development with Symfony 6</a></li>
          <li><a href="https://symfonycasts.com/certificates/3C816F45C144" class="hover:underline">Symfony 6 Fundamentals: Services, Config & Environments</a></li>
        </ul>
      </div>
    </div>

    <div class="max-w-2xl mx-auto mt-8 animated-element">
      <h2 class="text-2xl font-bold mb-4">Education</h2>
      <div class="mb-4">
        <h3 class="text-lg font-bold mb-2">

          Bachelor's Degree -


          Technical University of Cluj-Napoca</h3>
        <p class=" ">Faculty of Industrial Engineering, Robotics and Production
          Management.</p>
        <div class="text-small text-gray-500" >2021 - current</div>
      </div>
      <!-- Add more education sections as needed -->
    </div>


    <!-- Add more certifications and achievements -->


    <div class="max-w-2xl mx-auto mt-8 animated-element">
      <h2 class="text-2xl font-bold mb-4">Interests and Hobbies</h2>
      <p class=" ">
        In addition to coding, I enjoy video Editing and Graphic Design. Whether it's exploring new technologies or Mnemonics, I always find joy in continuous learning and personal growth.
      </p>
    </div>

    <div class="max-w-2xl mx-auto mt-8 animated-element">
      <h2 class="text-2xl font-bold mb-4">Meet Kakajanov Sahetmyrat</h2>
      <img :src="imagePath" alt="Your Name" class="rounded-full w-32 h-32 object-cover mb-4">
      <p class=" ">
        Thank you for taking the time to learn more about me. If you have any questions or would like to connect, feel free to reach out!
      </p>
    </div>
  </div>
      <div ref="box5" class="flex justify-center space-x-4">

        <div   >
          <router-link to="/projects"
                       class="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 gradient-text">Explore Projects
          </router-link>
        </div>
        <div   >
          <router-link to="contact" class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 "> Contact</router-link>

        </div>
      </div>






      <br>
      <br>
      <br>
    </section>
  </div>


</template>

<script>


import { ref } from 'vue';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      imagePath: "public/img/img.png",

    };
  },
  setup() {
    const showHello = ref(true);
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
          markers: false,
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





.background-image {
  position: relative;
}

.background-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('public/img/Screenshot 2024-05-01 152859.png');
  background-size: cover; /* or contain, depending on your preference */
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.2;
}

.content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}





</style>
