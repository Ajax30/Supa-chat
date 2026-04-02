<template>
  <button :class="isActive ? 'text-white' : 'text-muted'">
    <i :class="['fa-solid', icon]"></i>
    <span v-if="hasBubble" class="bubble"></span>
  </button>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: false },
  hasBubble: { type: Boolean, required: true, default: false },
});
</script>

<style scoped>
button {
  position: relative;
}

.bubble {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  top: 1px;
  right: 0;
  background-color: #44b6ff;
  box-shadow:
    0 0 6px #44b6ff,
    0 0 12px #44b6ff;
}
</style>
