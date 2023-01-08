<template>
  <div class="p-4 flex">
    <div>
      <img class="w-10 h-10 rounded-full" :src="author.profileImage" alt="" />
    </div>
    <div class="ml-3">
      <span class="font-medium text-gray-800 dark:text-white">{{
        author.name
      }}</span>
      <span class="ml-3 text-xs font-medium text-gray-500">
        <nuxt-link to="#"> @{{ author.name }}</nuxt-link>
        . {{ tweet.postedAt }}
      </span>
      <p v-if="tweet.replyTo " class="text-xs">

       <span class=" text-gray-500">Replying To</span> 
        <nuxt-link :to="replyToTweetUrl" class="text-blue-400">
         @ {{ tweet.replyTo.author.username }}
        </nuxt-link>
      </p>


    </div>
  </div>
</template>
<script setup>
const { tweet } = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
});
const author = tweet.author;
const replyToTweetUrl = computed(()=> `/status/${tweet?.replyTo?.id}`) 
</script>
