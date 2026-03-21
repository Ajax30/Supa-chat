<template>
  <div class="avatar">
    <img :src="image" :alt="alt" />
    <span v-if="status" :class="['d-inline-block', 'status-bubble', status]"></span>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  alt: { type: String, default: 'User avatar' },
  status: String
})
</script>


<style scoped>
.avatar {
  position: relative;
}

.avatar img {
  width: 45px;
  border-radius: 50%;
}

.avatar .status-bubble {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  bottom: 4px;
  right: 0;
}

.avatar .online {
  background-color: #4caf50;
}
.avatar .offline {
  background-color: #f44336;
}
.avatar .away {
  background-color: #ffc107;
}
</style>