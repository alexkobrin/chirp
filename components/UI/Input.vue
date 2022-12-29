<template>
  <div>
    <label
       
      class="block pl-3 ml-px text-sm font-medium text-gray-700"
      for=""
      >{{ label }}</label
    >
    <input
      :type="type"
      @input="event => emits('update:modelValue' , event.target.value)"
      :placeholder="placeholder"
      class="block px-4 w-full border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
      :value="modelValue"
    />
  </div>
</template>
<script setup>
const emits = defineEmits(['update:modelValue'])




const { modelValue, label, placeholder , text } = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text"
  }
});
</script>
