<template>
  <div class="user-profile d-flex align-items-center">
    <Avatar :image="avatar" :alt="name" :status="status" />
    <UserInfo :name="name" :latestMessage="latestMessage" />
  </div>
</template>

<script setup>
import Avatar from "@/components/Avatar.vue";
import UserInfo from "@/components/UserInfo.vue";

defineProps({
  avatar: String,
  name: String,
  latestMessage: String,
  status: String
});
</script>
