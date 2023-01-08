<template>
  <div>
    <!-- Header -->
     <TweetItemHeader :tweet="tweet" />

    <!-- Main content -->
    <div class="ml-16">
      <p class="flex-shrink font-medium text-gray-800 w-auto dark:text-white">
        {{ tweet.text }}
      </p>
      <div
        v-for="image in tweet.mediaFiles"
        :key="image.id"
        class="flex my-3 mr-2 border-2 rounded-2xl"
        :class="twitterBorderColor"
      >
        <img class="w-full rounded-2xl" :src="image.url" alt="" />
      </div>
      <!-- Footer -->

      <div class="mt-2">
         <TweetItemActions :tweet="tweet" />

      </div>


    </div>
  </div>
</template>
<script setup>
const { twitterBorderColor } = useTailwindConfig();
const { tweet } = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
});

</script>
