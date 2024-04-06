<!-- src/components/Contact.vue -->
<template>
  <section class="container mx-auto py-8 ">
    <div class="max-w-2xl mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4 ">Get in Touch</h2>
    <transition-group 
      appear
      tag="p"
      @before-enter="beforeEnter"
      @enter="enter"
    >
    <p class="  mb-4">
        Feel free to drop me a message using the contact form below. I look forward to hearing from you!
    </p>
    </transition-group>
    

    <!-- Contact Form -->
    <form action="/submit-contact" method="POST" class="mb-4">
        <!-- Include your form fields (name, email, message, etc.) -->
        <div class="mb-4">
            <label for="name" class="block font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" class="border border-gray-300 p-2 w-full rounded">
        </div>
        <!-- Add other form fields as needed -->

        <button type="submit" class="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Send Message</button>
    </form>
  </div>


  <div class="max-w-2xl mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
    <p class="  mb-4">
        You can reach me via email at <span class="text-teal-500">your.email@example.com</span>. Connect with me on LinkedIn and explore my projects on GitHub.
    </p>
  </div>

  <div class="max-w-2xl mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4">Connect with Me</h2>
    <div class="flex space-x-4">
        <a href="https://www.linkedin.com/in/yourname/" target="_blank" class="text-teal-500 hover:underline">LinkedIn</a>
        <a href="https://github.com/yourusername" target="_blank" class="  hover:underline">GitHub</a>
        <!-- Add other social media links as needed -->
    </div>
  </div>

  <div class="max-w-2xl mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4">Availability</h2>
    <p class="  mb-4">
        I aim to respond to messages within 48 hours. If your inquiry is urgent, please mark it as such in the subject line for prompt attention.
    </p>
  </div>

  <div class="max-w-2xl mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4">Business Inquiries and Collaborations</h2>
    <p class="  mb-4">
        For business inquiries or collaboration opportunities, please feel free to reach out via the contact form or directly at <span class="text-teal-500">business.email@example.com</span>.
    </p>
  </div>









  </section>
</template>

<script setup>
import { ref } from 'vue'
import gsap from 'gsap'
import { AtSymbolIcon, PhoneIcon } from '@heroicons/vue/24/solid'

const beforeEnter = (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateY(100px)'
    }

    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2
      })
    }

</script>

<style scoped>
  /* Add your styles here */
</style>
