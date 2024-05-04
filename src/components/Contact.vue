<template>
  <div class="r">
    <section class="container mx-auto py-8 ">
    <div class="max-w-2xl mx-auto mt-8 text-center">
      <Transition appear
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
      >
        <h2 v-if="showTitle" class="text-2xl font-bold mb-4 flex text-center text-white">Get in Touch</h2>

      </Transition>

    <p class="text-white  mb-4 animated-element">
        Feel free to drop me a message using the contact form below. I look forward to hearing from you!
    </p>


    <!-- Contact Form -->

  </div>


  <div class="max-w-2xl mx-auto mt-8 animated-element">
    <h2 class="flex items-center text-2xl font-bold mb-4 text-white">
      <InboxIcon class="mr-2 size-6 text-gray-400" />
      Contact Information </h2>

    <p class=" text-white mb-4">
        You can reach me via email at <span class="text-teal-500">kakajansahy@gmail.com</span>. Connect with me on LinkedIn and explore my projects on GitHub.
    </p>
  </div>

  <div class="max-w-2xl mx-auto mt-8 animated-element">
    <h2 class="flex items-center text-2xl font-bold mb-4 text-white">
      <LinkIcon class="mr-2 size-6 text-gray-400" />

      Connect with Me</h2>
    <div class="flex space-x-4 text-center">
        <a href="https://ro.linkedin.com/in/sahet-kakajanov-188639263" target="_blank" class="text-teal-500 hover:underline text-center">LinkedIn</a>
        <a href="https://github.com/Sahet-dev" target="_blank" class="  hover:underline text-white text-center">GitHub</a>
        <a :href="pdfCv" download="pdfCv" class="bg-teal-500 text-white py-1 px-2 rounded-sm hover:bg-teal-600 text-sm">Download CV</a>
    </div>
  </div>

  <div class="max-w-2xl mx-auto mt-8 ">
    <div class="animated-element">
      <h2 class="flex items-center text-2xl font-bold mb-4 text-white">
        <ClockIcon class="mr-2 size-6 text-gray-400" />

        Availability</h2>
      <p class="text-white  mb-4">
        I aim to respond to messages within 48 hours. If your inquiry is urgent, please mark it as such in the subject line for prompt attention.
      </p>

    </div>

  </div>


      <br>
      <br>
      <br>
  </section>
  </div>


</template>

<script>



import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {ref} from "vue";
import { BeakerIcon } from '@heroicons/vue/24/solid'
import { EnvelopeIcon, InboxIcon, LinkIcon, ClockIcon, BriefcaseIcon} from "@heroicons/vue/20/solid/index.js";

export default {
  components: {
    InboxIcon,
    EnvelopeIcon,
    LinkIcon,
    ClockIcon,
    BriefcaseIcon

  },

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

    gsap.utils.toArray('.animated-element').forEach(element => {
      gsap.set(element, { opacity: 0, filter: 'blur(2px)' });

      gsap.to(element, {
        opacity: 1,
        filter: 'blur(0)',
        duration: 1, // Animation duration in seconds
        scrollTrigger: {
          trigger: element,
          start: 'top 90%', // Start the animation when the top of the element is 80% in view
          end: 'bottom 83%', // End the animation when the bottom of the element is 20% in view
          scrub: true, // Smoothly animate as you scroll
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
  },
  data() {
    return {
      pdfCv: "src/assets/CVKakajanov.pdf",
    }
  }
}



</script>

<style scoped>


</style>
