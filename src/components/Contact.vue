<template>
  <div class="r">
    <section class="container mx-auto py-8 ">
    <div class="max-w-2xl mx-auto mt-8 text-center">
    <h2 class="text-2xl font-bold mb-4 flex text-center text-white">Get in Touch</h2>

    <p class="text-white  mb-4 animated-element">
        Feel free to drop me a message using the contact form below. I look forward to hearing from you!
    </p>


    <!-- Contact Form -->
    <form action="/submit-contact" method="POST" class="mb-4 animated-element">
        <!-- Include your form fields (name, email, message, etc.) -->
        <div class="mb-4">
            <label for="name" class="block font-bold mb-2 text-gray-300">Name:</label>
            <input type="text" id="name" name="name" class="border border-gray-300 p-2 w-full rounded">
        </div>
        <!-- Add other form fields as needed -->

        <button type="submit" class="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Send Message</button>
    </form>
  </div>


  <div class="max-w-2xl mx-auto mt-8 animated-element">
    <h2 class="text-2xl font-bold mb-4 text-white">Contact Information</h2>
    <p class=" text-white mb-4">
        You can reach me via email at <span class="text-teal-500">kakajansahy@gmail.com</span>. Connect with me on LinkedIn and explore my projects on GitHub.
    </p>
  </div>

  <div class="max-w-2xl mx-auto mt-8 animated-element">
    <h2 class="text-2xl font-bold mb-4 text-white">Connect with Me</h2>
    <div class="flex space-x-4">
        <a href="https://ro.linkedin.com/in/sahet-kakajanov-188639263" target="_blank" class="text-teal-500 hover:underline">LinkedIn</a>
        <a href="https://github.com/Sahet-dev" target="_blank" class="  hover:underline text-white">GitHub</a>
        <!-- Add other social media links as needed -->
    </div>
  </div>

  <div class="max-w-2xl mx-auto mt-8 animated-element">
    <h2 class="text-2xl font-bold mb-4 text-white">Availability</h2>
    <p class="text-white  mb-4">
        I aim to respond to messages within 48 hours. If your inquiry is urgent, please mark it as such in the subject line for prompt attention.
    </p>
  </div>

  <div class="max-w-2xl mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4 text-white">Business Inquiries and Collaborations</h2>
    <p class="  mb-4 text-white">
        For business inquiries or collaboration opportunities, please feel free to reach out via the contact form or directly at <span class="text-teal-500">business.email@example.com</span>.
    </p>
  </div>









  </section>
  </div>


</template>

<script>



import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
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
          end: 'bottom 70%', // End the animation when the bottom of the element is 20% in view
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
  }
};



</script>

<style scoped>
  /* Add your styles here */
</style>
