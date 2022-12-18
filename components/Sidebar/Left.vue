<template>
  <div class=" h-screen flex flex-col">

    <div class="p-2 my-2 rounded-full hover:bg-blue-50 dark:hover:bg-white/20   w-min"
    :class="transition"
    >
     <nuxt-link to="/">
      <div class="w-8 h-8">
        <LogoMain />
      </div>
    </nuxt-link> 
    </div>
    
  </div>
</template>

<script setup>
const transition = 'transition ease-in-out duration-350'

</script>

<style></style>
