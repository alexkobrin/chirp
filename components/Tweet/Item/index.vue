<template>
  <div>
    <!-- Header -->
     <TweetItemHeader :tweet="tweet" />

    <!-- Main content -->
    <div :class="TweetBodyWrapper">
      <p class="flex-shrink font-medium text-gray-800 w-auto dark:text-white" :class="textSize">
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

      <div class="mt-2" v-if="!hideActions">
         <TweetItemActions @on-comment-click="handleCommentClick" :tweet="tweet" :compact="compact" />

      </div>


    </div>
  </div>
</template>
<script setup>
const { twitterBorderColor } = useTailwindConfig();
const emitter = useEmitter()
const { tweet , compact , hideActions} = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
  compact : {
    type: Boolean,
    default : false
  },
  hideActions : {
    type: Boolean,
    default: false
  }
});
const TweetBodyWrapper = computed(() => compact ?  'ml-16' : 'ml-2 mt-4'  )
const textSize = computed(()=> compact ? 'text-base' : 'text-2xl' )

function handleCommentClick() {
  
  emitter.$emit('replyTweet' , tweet )
}



</script>
