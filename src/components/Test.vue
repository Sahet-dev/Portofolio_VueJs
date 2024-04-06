<template>
  <div v-if="isShowing" class="overlay">
    <div class="overlay-content">
      {{ pageName }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['pageName', 'isShowing']
};
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Adjust opacity as needed */
  z-index: 9999; /* Ensure the overlay appears on top of other content */
}

.overlay-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px; /* Adjust font size as needed */
}
</style>
