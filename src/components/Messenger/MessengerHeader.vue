<template>
  <div class="messenger-header d-flex align-items-center">
    <div class="user-profile d-flex align-items-center">
      <Avatar :image="user.image" :status="user.status" />
      <UserInfo :name="user.name" :status="user.status" :isHeader="true" />
    </div>

    <div class="actions d-flex ms-auto">
      <a href="#" title="Invite" class="text-secondary">
        <i class="fa-solid fa-user-plus"></i>
      </a>
      <a href="#" title="Settings" class="text-secondary">
        <i class="fa-solid fa-gear"></i>
      </a>
      <a href="#" class="sidebar-toggler text-secondary">
        <i class="fa-solid fa-bars"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import Avatar from "@/components/Avatar.vue";
import UserInfo from "@/components/UserInfo.vue";
import carmenImg from "@/assets/images/carmen.jpg";

const user = {
  name: "Carmen Smith",
  image: carmenImg,
  status: "Online"
};
</script>

<style scoped>
.messenger-header {
  height: 90px;
  display: flex;
  align-items: center;
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.2);
}

.messenger-header .actions {
  display: flex;
  gap: 10px;
  margin-left: auto;
}
</style>