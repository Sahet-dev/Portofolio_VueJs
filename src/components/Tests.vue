<template>
  <div>
    <br><br><br>
    <Transition appear
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @leave="leave"
                @after-leave="afterLeave"
    >
      <h2 v-if="showTitle" class="hello-text  text-center text-white text-7xl">Hello</h2>
    </Transition>

    <br><br><br><br><br>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ref } from "vue";

export default {
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
        opacity: 1, // Fade in
        ease: 'bounce.out',
        onComplete: done,
      });
    };

    const afterEnter = () => {};

    const leave = (el, done) => {
      gsap.to(el, {
        duration: 1.5,
        scale: 0.1, // Scale down
        opacity: 0, // Fade out
        ease: 'power4.in', // Easing function
        onComplete: done,
      });
    };

    const afterLeave = () => {
      showTitle.value = false; // Hide the element after leaving
    };

    // Hide the "Hello" element after 3 seconds
    setTimeout(() => {
      showTitle.value = false;
    }, 3000);

    return {
      showTitle,
      beforeEnter,
      enter,
      afterEnter,
      leave,
      afterLeave,
    };
  },
};
</script>

<style scoped>
.hello-text {
  font-size: 2rem; /* Adjust font size as needed */
  /* Add any other styling for the hello text */
}
</style>
