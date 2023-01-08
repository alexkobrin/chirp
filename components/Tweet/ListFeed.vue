<template>
  <div>
    <ul>
      <TweetItem v-for="(tweet, idx) in props.tweets" :tweet="tweet" :key="idx" />
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  tweets: {
    type: Array,
    required: true,
  },
});
</script>
