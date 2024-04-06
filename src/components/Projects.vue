<!-- src/components/Projects.vue -->
<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Project 1 -->
    <div class="bg-white p-4 rounded shadow-md mt-20">
        <h3 class="text-lg font-bold mb-2 ">Project 1 Title</h3>
        <p class=" mb-4">Brief project description highlighting key features and objectives.</p>
        <a href="#" class="text-teal-500 hover:underline">View Details →</a>
    </div>
    <!-- Project 2 (Repeat for other projects) -->
  </div>

  <div class="mt-8">
    <!-- Project 1 Description -->
    <div class="mb-6">
        <h3 class="text-xl font-bold mb-2">Project 1 Title</h3>
        <p class="  mb-2">Detailed project description highlighting technologies used and your role in the project.</p>
        <p class=" ">
            <span class="font-bold">Technologies:</span> HTML, CSS, JavaScript, Vue.js, Node.js, MongoDB
        </p>
    </div>
    <!-- Project 2 (Repeat for other projects) -->
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Project 1 with Image -->
    <div class="bg-white p-4 rounded shadow-md">
        <h3 class="text-lg font-bold mb-2">Project 1 Title</h3>
        <img src="" alt="Project 1 Image" class="w-full h-32 object-cover mb-2 rounded">
        <p class="  mb-4">Brief project description highlighting key features and objectives.</p>
        <a href="#" class="text-teal-500 hover:underline">View Details →</a>
    </div>
    <!-- Project 2 with Image (Repeat for other projects) -->
  </div>

  <div class="mt-8">
    <!-- Project 1 Links -->
    <div class="mb-6">
        <h3 class="text-xl font-bold mb-2">Project 1 Title</h3>
        <p class="  mb-2">Detailed project description highlighting technologies used and your role in the project.</p>
        <p class=" ">
            <span class="font-bold">Technologies:</span> HTML, CSS, JavaScript, Vue.js, Node.js, MongoDB
        </p>
        <div class="flex space-x-4 mt-2">
            <a href="#" class="text-teal-500 hover:underline">Live Project</a>
            <a href="#" class="  hover:underline">GitHub Repository</a>
        </div>
    </div>
    <!-- Project 2 Links (Repeat for other projects) -->
  </div>

  <div class="mt-8">
    <!-- Filters -->
    <div class="flex space-x-4 mb-4">
        <button class="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Web Development</button>
        <button class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800">Mobile Apps</button>
        <!-- Add more buttons for different categories -->
    </div>
    <!-- Project 1 (Repeat for other projects) -->
</div>







  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, title: "Project 1", description: "Description for Project 1" },
        { id: 2, title: "Project 2", description: "Description for Project 2" },
        // Add more projects as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add your custom styling for the Projects component here */
</style>
