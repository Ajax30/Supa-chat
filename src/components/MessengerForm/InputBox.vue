<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    name="message"
    id="message"
    placeholder="Write a message"
    class="text-secondary"
  />
</template>

<script setup>
defineProps({
  modelValue: String,
});

defineEmits(["update:modelValue"]);
</script>

<style scoped>
input[type="text"] {
  flex: 1;
  padding: 5px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>