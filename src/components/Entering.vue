<template>
  <div>

    <Transition appear
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @leave="leave"
                @after-leave="afterLeave"
    >
      <h2 v-if="showTitle" class="hello-text  text-center text-white text-7xl flex items-center justify-center h-screen">Hello</h2>
    </Transition>

  </div>
</template>

<script>
import { gsap } from "gsap";
import { ref } from "vue";

export default {
  setup() {
    const showTitle = ref(true);

    const beforeEnter = (el) => {
      el.style.transform = 'scale(0.1)';
      el.style.opacity = 0;
    };

    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1.5,
        scale: 1,
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done,
      });
    };

    const afterEnter = () => {};

    const leave = (el, done) => {
      gsap.to(el, {
        duration: 1.5,
        scale: 0.1,
        opacity: 0,
        ease: 'power4.in',
        onComplete: done,
      });
    };

    const afterLeave = () => {
      showTitle.value = false;
    };

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
  font-size: 8rem;
}
</style>
