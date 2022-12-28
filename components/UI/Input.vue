<template>
  <div>
    <label  v-if="value" class="block pl-3 ml-px text-sm font-medium text-gray-700"  for="">{{ label }}</label>
    <input type="text" :value="value">
  </div>
</template>
<script setup>
const {value, label} = defineProps({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>