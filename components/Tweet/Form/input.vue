<template>
  <div>
    <div class="flex items-center p-4 pb-0">
      <div class="flex w-12 items-top">
        <img
          :src="props.user?.profileImage"
          alt=""
          class="inline-block w-10 h-10 rounded-full"
        />
      </div>
      <div class="w-full p-2">
        <textarea
          v-model="text"
          class="w-full h-10 text-lg text-gray-900 placeholder:text-gray-400 bg-transparent border-0 dark:text-white focus:ring-0"
        >
4</textarea
        >
      </div>
      <div class="flex p-2 pl-14"></div>
    </div>
    <div class="flex p-2 pl-14">
      <div :class="iconsWrapper">
        <UIUploadImage />
      </div>
      <div :class="iconsWrapper">
        <UIUploadGif />
      </div>
      <div :class="iconsWrapper">
        <UIChart />
      </div>
      <div :class="iconsWrapper">
        <UIEmoji />
      </div>
      <div :class="iconsWrapper">
        <UICalendar />
      </div>
    </div>
    <div>
      <button @click="handlefromSubmit">Tweet</button>
    </div>
  </div>
</template>
<script setup>
const { iconsWrapper } = useTailwindConfig();
const props = defineProps({
  user: {
    type: Object,
    require: true,
  },
});
const emits = defineEmits(["onSubmit"]);
const text = ref("");

function handlefromSubmit() {
  emits("onSubmit", {
    text: text.value,
  });
}
</script>
