<template>
  <div :class="{ dark: darkMode }">
    <div class="min-h-full">
      <div
        class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
      >
        <!-- Left side bar -->
        <div class="hidden bg-green-500 xs:col-span-1 md:block  xl:col-span-2">
          left
        </div>
        <!-- Main content -->
        <div class="bg-red-500"> </div>
        <!-- Right sidebar -->
        <div class="bg-yellow-500"> </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(false);
</script>
