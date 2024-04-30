<template>

<div class="animated-element"></div><div class="animated-element">
  <h1 class="text-3xl font-bold">Hello, World!</h1>
</div><br><br><br>


<div class="animated-element"></div><div class="animated-element">
  <h1 class="text-3xl font-bold">Hello, World!</h1>
</div><br><br><br>


<div class="animated-element"></div><div class="animated-element text-white">
  <p class="text-3xl font-bold">Hello, World!</p>
</div><br><br><br>


<div class="animated-element"></div><div class="animated-element">
  <h1 class="text-3xl font-bold">Hello, World!</h1>
</div><br><br><br>


<div class="animated-element"></div><div class="animated-element">
  <h1 class="text-3xl font-bold">Hello, World!</h1>
</div><br><br><br>


<div class="animated-element"></div><div class="animated-element">
  <h1 class="text-3xl font-bold">Hello, World!</h1>
</div><br><br><br>


<div class="animated-element"></div><div class="animated-element flex items-center">
  <h1 class="text-3xl font-bold ">Hello, World!</h1>
</div><br><br><br>


<div class="animated-element"></div><div class="animated-element">
  <h1 class="text-3xl font-bold">Hello, World!</h1>
</div><br><br><br>


<div class="animated-element"></div><div class="animated-element">
  <h1 class="text-3xl font-bold">Hello, World!</h1>
</div><br><br><br>


<div class="animated-element"></div><div class="animated-element">
  <h1 class="text-3xl font-bold">Hello, World!</h1>
</div><br><br><br>




</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.animated-element').forEach(element => {
      gsap.set(element, { opacity: 0, scale: 0.5 });

      gsap.to(element, {
        opacity: 1,
        scale: 1,
        duration: 1, // Animation duration in seconds
        scrollTrigger: {
          trigger: element,
          start: 'top 80%', // Start the animation when the top of the element is 80% in view
          end: 'bottom 20%', // End the animation when the bottom of the element is 20% in view
          scrub: true, // Smoothly animate as you scroll
          markers: true
        }
      });
    });
  }
}
</script>
Copy
<style>
.scaling-text {
  transition: transform 0.5s;
}

.scale-animation {
  transform: scale(1.2);
}
</style>
