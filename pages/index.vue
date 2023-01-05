<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" />
      </div>
      <TweetListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>
<script setup>
useHead({
  title: "Home",
});
const homeTweets = ref([]);
const {getHomeTweets} = useTweets()

const { twitterBorderColor } = useTailwindConfig();
const loading = ref(false);
const { useAuthUser } = useAuth();
const user = useAuthUser();

onBeforeMount(async()=>{
  
  loading.value = true
  const {tweets} = await getHomeTweets()

  homeTweets.value = tweets

   loading.value = false
})


</script>
