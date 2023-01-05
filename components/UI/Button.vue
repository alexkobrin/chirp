<template>
  <button
    class="flex justify-center text-white disabled:cursor-not-allowed disabled:bg-blue-300 text-sm hover:bg-blue-500 rounded-full bg-blue-400"
    :disabled="isDisabled"
    :class="dinamicClasses"
  >
    <span :class="textFontSize"> <slot /> </span>
  </button>
</template>
<script setup>
import { BoltIcon } from "@heroicons/vue/24/solid";

const { isDisabled, liquid, size } = defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "md",
  },
  liquid: {
    type: Boolean,
    default: false,
  },
});
const paddingClasses = computed(() => {
  switch (size) {
    case "sm":
      return "px-3 py-2";

    case "lg":
      return "px-4 py-3";

    default:
      return "p-3";
  }
});
const textFontSize = computed(() => {
  switch (size) {
    case "lg":
      return "text-lg";

    default:
      return "text-sm";
  }
});
// const defaultWidth = computed(() => {
//   switch (size) {
//     default:
//       return "width-min";
//   }
// });
const dinamicClasses = computed(() => `${paddingClasses.value} ${liquid ? 'w-full' : 'w-min' } `);
</script>
