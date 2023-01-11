<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>
    <div v-else>
      <TweetFormInput :placeholder="props.placeholder" @onSubmit="handleFormSubmit" :user="props.user" />
    </div>
  </div>
</template>
<script setup>
const emits = defineEmits(['onSuccess'])

const loading = ref(false)
const { postTweet } = useTweets();


const props = defineProps({
  user: {
    type: Object,
    require: true,
  },
  placeholder: {
    type: String,
    default: "What's happening ?"
  },
  replyTo : {
    type: Object,
    default: null
  }
});
async function handleFormSubmit(data) {
  loading.value = true
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles,
      replyTo: props.replyTo?.id
    });
    emits('onSuccess' , response.tweet)
  } catch (err) {
    console.log(err, "err Post twwee");
  } finally{
    loading.value = false
  }
}
</script>
