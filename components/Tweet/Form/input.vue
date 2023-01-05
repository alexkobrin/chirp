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
          class="w-full h-12 text-lg text-gray-900 placeholder:text-gray-400 bg-transparent border-0 dark:text-white focus:ring-0"
          placeholder="What's happening ?"
        >
4</textarea
        >
      </div>
    </div>
    <!-- File Selector -->
    <div class="p-4 pl-16">
      <img
        v-if="inputImageUrl"
        class="rounded-2xl border"
        :class="twitterBorderColor"
        :src="inputImageUrl"
        alt=""
      />

      <input
        type="file"
        ref="imageInput"
        hidden
        accept="image/png , image/gif , image/jpeg"
        @change="handleImageChange"
      />
    </div>
    <!-- Icons -->
    <div class="flex p-2 pl-14">
      <div class="flex w-full text-white">
        <div :class="iconsWrapper">
          <UIUploadImage @click="handleImageClick" />
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
      <div class="ml-auto">
        <UIButton size="sm" ><span><strong>Tweet</strong></span>   </UIButton>
        <!-- <button @click="handlefromSubmit">Tweet</button> -->
      </div>
    </div>
  </div>
</template>
<script setup>
const { iconsWrapper, twitterBorderColor } = useTailwindConfig();
const props = defineProps({
  user: {
    type: Object,
    require: true,
  },
});
const text = ref("");
const imageInput = ref();
const selectedFile = ref(null);
const inputImageUrl = ref(null);

const emits = defineEmits(["onSubmit"]);

function handlefromSubmit() {
  if (text.value === "") return;
  emits("onSubmit", {
    text: text.value,
    mediaFiles: [selectedFile.value],
  });
}
function handleImageClick() {
  imageInput.value.click();
}
function handleImageChange(event) {
  const file = event.target.files[0];
  selectedFile.value = file;

  const reader = new FileReader();

  reader.onload = (event) => {
    inputImageUrl.value = event.target.result;
  };

  reader.readAsDataURL(file);
}
</script>
