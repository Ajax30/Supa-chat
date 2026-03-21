<template>
  <div class="user-profile my-profile d-flex">
    <span id="soundToggle" class="sound-toggle text-white">
      <i class="fa-solid fa-bell"></i>
    </span>
    <Avatar image="carmen.jpg" alt="Carmen Smith" status="online" />
    <UserInfo
      :name="'Carmen Smith'"
      :status="'Available for freelance work.'"
    />
  </div>
</template>

<script setup>
import Avatar from "@/components/Avatar.vue";
import UserInfo from "@/components/UserInfo.vue";
</script>

<style scoped>
.user-profile.my-profile {
  padding: 25px;
  position: relative;
}

.sound-toggle {
  cursor: pointer;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
