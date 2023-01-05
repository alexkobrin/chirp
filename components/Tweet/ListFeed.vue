<template>
  <div>
    <ul>
      <li v-for="(tweet, idx) in props.tweets" :key="idx">
        {{ tweet.text }}
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  tweets: {
    type: Array,
    required: true
  }
})




</script>