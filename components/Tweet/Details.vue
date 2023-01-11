<template>
  <div> 

     <TweetItem :tweet="tweet" />
     <TweetForm :user="user" placeholrder="Tweet your reply" />
     <TweetListFeed :tweets="replies"/>

  </div>
</template>
<script setup>
import { propsToAttrMap } from '@vue/shared';

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
</script>