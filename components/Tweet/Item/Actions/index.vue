<template>
  <div class="flex justify-around items-center ">
    <TweetItemActionsIcon @on-click="emits('onCommentClick')"  color="blue" :size="size">
      <template v-slot:icon="{ classes }">
        
        <ChatBubbleLeftEllipsisIcon    :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default> {{props.tweet.repliesCount}} </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="green" :size="size">
      <template v-slot:icon="{ classes }">
        <ArrowPathIcon :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>
        <span>
         {{generateRandomNumber()}}  
        </span>

         </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="red" :size="size">
      <template v-slot:icon="{ classes }">
        <HeartIcon :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default> {{generateRandomNumber()}} </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="blue" :size="size">
      <template v-slot:icon="{ classes }">
        <ArrowUpTrayIcon :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default > {{generateRandomNumber()}} </template>
    </TweetItemActionsIcon>
  </div>
</template>
<script setup>
import { ChatBubbleLeftEllipsisIcon , HeartIcon, ArrowPathIcon  , ArrowUpTrayIcon} from "@heroicons/vue/24/outline";
const props = defineProps({
  tweet : {
    type: Object,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['onCommentClick'])
const showStats = computed(()=> props.compact   )
const size = computed(()=>props.compact  ? 5 : 8)



function generateRandomNumber () {
  return Math.floor(Math.random() * 100)
}
</script>
