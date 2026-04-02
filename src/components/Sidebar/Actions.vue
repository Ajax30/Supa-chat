<template>
  <div class="d-flex my-actions">
    <SidebarButton :isActive="true" :hasBubble="true" icon="fa-comment-dots" />
    <SidebarButton icon="fa-user-group" />
    <SidebarButton icon="fa-phone" />
    <SidebarButton icon="fa-gear" />
  </div>
</template>

<script setup>
  import SidebarButton from "@/components/Sidebar/SidebarButton.vue";
</script>

<style scoped>
.my-actions {
  padding: 0 25px;
  justify-content: space-around;
}
</style>
