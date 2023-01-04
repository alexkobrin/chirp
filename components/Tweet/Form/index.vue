<template>
  <div>
    <TweetFormInput @onSubmit="handleFormSubmit" :user="props.user"/>
  </div>
</template>
<script setup>
const {postTweet} = useTweets()
const props = defineProps({
  user: {
    type: Object,
    require: true,
  },
});
async function handleFormSubmit (data) {
  try {
   const response =   await postTweet(data)
   console.log(response , 'EEEE');
  } catch (err) {
      console.log(err , "err Post twwee");
  }
 
}
</script>
