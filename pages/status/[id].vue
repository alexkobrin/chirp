<template>
  <div>
    <MainSection title="Tweet" :loading="loading">

 
     <h1>{{getTweetIdFromRoute()}}</h1>
    
    
    </MainSection>
  </div>
</template>
<script setup>
useHead({
  title: "Tweet",
});
 
const { getTweetById } = useTweets();
const loading = ref(false);

function getTweetIdFromRoute() {
 
    return   useRoute().params.id
}
async function getTweet() {
  loading.value = true;
  // try {
    const response = await getTweetById(getTweetIdFromRoute());
 
  // } catch (err) {
  //   console.log(err, "Tweet id Error");
  // } finally {
    loading.value = false;
  // }
}
onMounted(() => {
     getTweet(); 
  
 
   
});
</script>
