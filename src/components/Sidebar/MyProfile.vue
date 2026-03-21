<template>
  <div class="user-profile my-profile d-flex align-items-center">
    <!-- Sound toggle bell -->
    <span id="soundToggle" class="sound-toggle text-white me-2">
      <i class="fa-solid fa-bell"></i>
    </span>

    <Avatar :image="avatar" :alt="name" />

    <UserInfo
      :name="name"
      :status="myStatus"
      :isMyProfile="true"
    />
  </div>
</template>

<script setup>
import Avatar from '@/components/Avatar.vue'
import UserInfo from '@/components/UserInfo.vue'

defineProps({
  name: String,
  avatar: String,      
  myStatus: String 
})
</script>

<style scoped>
.user-profile.my-profile {
  padding: 25px;
  position: relative;
  align-items: center;
}

.sound-toggle {
  cursor: pointer;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
}
</style>