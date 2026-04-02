<template>
  <span :title="title" class="text-secondary action" @click="$emit('click')">
    <i :class="['fa-solid', icon]"></i>
  </span>
</template>

<script setup>
defineProps({
  title: { type: String, required: false },
  icon: { type: String, required: true },
});
defineEmits(["click"]);
</script>

<style scoped>
.action {
  margin-left: 10px;
  cursor: pointer;
}

.action:first-child {
  margin-left: 0;
}

.sidebar-toggler {
  display: none;
}

@media (max-width: 767px) {
  .sidebar-toggler {
    display: block;
  }
}
</style>
