<template>
  <div> 

     <TweetItem :tweet="tweet" />
     <TweetForm @on-success="handleFormSuccess" :user="user" :replyTo="tweet" placeholder="Tweet your reply" />
     <TweetListFeed :tweets="replies"/>

  </div>
</template>
<script setup>
//import { propsToAttrMap } from '@vue/shared';

const {tweet , user} = defineProps({
  tweet : {
    type: Object ,
    required: true
  },
  user : {
    type: Object ,
    required: true
  },
   
})
const replies = computed(()=> tweet?.replies || [])
function handleFormSuccess(tweet) {
  navigateTo({
    path: `/status/${tweet.id}`
  })

}
</script>