<template>
  <div>
    <MainSection title="Search" :loading="loading">
      <TweetListFeed :tweets="searchTweets" />
    </MainSection>
  </div>
</template>
<script setup>
useHead({
  title: "search",
});
const searchTweets = ref([]);
const { getTweets: getTweetsComposable } = useTweets();

const loading = ref(false);
const searchQuerry = useRoute().query.q;
watch(
  () => useRoute().fullPath,
  () => {
    getTweets();
  }
);

async function getTweets() {
  loading.value = true;
  const { tweets } = await getTweetsComposable({
    query: searchQuerry,
  });

  searchTweets.value = tweets;

  loading.value = false;
}

onBeforeMount(() => {
  getTweets();
});
</script>
