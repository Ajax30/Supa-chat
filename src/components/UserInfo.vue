<template>
  <div class="user-info">
    <p class="name fw-normal text-white">{{ name }}</p>
    <p v-if="latestMessage" class="latest-message">{{ latestMessage }}</p>
    <p v-if="status" class="status text-secondary">{{ status }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  latestMessage: String,
  status: String,
});
</script>

<style scoped>
.user-info {
  padding-left: 10px;
  line-height: 1;
}

.user-info .name {
  font-weight: bold;
}

.user-info .status {
  padding-top: 2px;
  font-size: 14px;
}

.user-info .my-status {
  color: #8b8da9;
  font-size: 12px;
  padding-right: 25px;
}

.user-info .latest-message {
  padding-top: 4px;
  font-size: 12px;
  color: #8b8da9;
}
</style>
