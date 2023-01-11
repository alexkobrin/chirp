<template>
  <div>
    <MainSection title="Tweet" :loading="loading">

 
    <TweetDetails :user="user" :tweet="tweet" />
    
    
    </MainSection>
  </div>
</template>
<script setup>
useHead({
  title: "Tweet",
});
 
const { getTweetById } = useTweets();
const loading = ref(false);
const tweet = ref(null)
const {useAuthUser} = useAuth()
const user = useAuthUser()

function getTweetIdFromRoute() {
 
    return   useRoute().params.id
}
async function getTweet() {
  loading.value = true;
  try {
    const response = await getTweetById(getTweetIdFromRoute());
    tweet.value = response.tweet
  } catch (err) {
    console.log(err, "Tweet id Error");
  } finally {
    loading.value = false;
  }
}
// Refresh Page is post new tweet
watch(()=> useRoute().fullPath , () => getTweet() )


onBeforeMount(() => {
     getTweet(); 
  
});
</script>
