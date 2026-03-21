<template>
  <ul class="users-list">
    <li v-for="user in users" :key="user.name">
      <User
        :avatar="user.avatar"
        :name="user.name"
        :latestMessage="user.latestMessage"
        :status="user.status"
      />
    </li>
  </ul>
</template>

<script setup>
import User from "@/components/Sidebar/User.vue";

const users = [
  {
    avatar: "dean.jpg",
    name: "Dean Clover",
    latestMessage: "Lorem ipsum dolor sit amet [...]",
    status: "online",
  },
  {
    avatar: "carmen.jpg",
    name: "Carmen Smith",
    latestMessage: "Lorem ipsum dolor sit amet [...]",
    status: "online",
  },
  {
    avatar: "jane.jpg",
    name: "Jane Fountain",
    latestMessage: "Lorem ipsum dolor sit amet [...]",
    status: "online",
  },
  {
    avatar: "john.jpg",
    name: "John Smith",
    latestMessage: "Lorem ipsum dolor sit amet [...]",
    status: "online",
  },
];
</script>

<style scoped>
.users-list li {
  padding: 25px;
  cursor: pointer;
  background: transparent;
  transition: all 0.25s ease-in-out;
}

.users-list li:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>
