<template>
  <PerfectScrollbar
    ref="ps"
    class="sidebar"
    :class="{ open: isOpen }"
    :options="{ suppressScrollX: true }"
  >
    <MyProfile
      name="Carmen Smith"
      :avatar="carmenImg"
      myStatus="Available for freelance work."
    />
    <Actions />
    <SearchBox />
    <UsersList />
  </PerfectScrollbar>
</template>

<script setup>
import MyProfile from "@/components/Sidebar/MyProfile.vue";
import Actions from "@/components/Sidebar/Actions.vue";
import SearchBox from "@/components/Sidebar/SearchBox.vue";
import UsersList from "@/components/Sidebar/UsersList.vue";
import carmenImg from "@/assets/images/carmen.jpg";
import { ref } from "vue";

// Reference to PerfectScrollbar (we keep for potential future use)
const ps = ref(null);

// Sidebar open/close state
const isOpen = ref(false);

// Toggle sidebar
function toggleSidebar() {
  isOpen.value = !isOpen.value;
}

defineExpose({ toggleSidebar });
</script>

<style scoped>
.sidebar {
  width: 275px;
  background: #261c46;
  overflow: auto;
}

@media (min-width: 360px) {
  .sidebar {
    width: 320px;
  }
}

@media (max-width: 767px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 999;
    transform: translateX(-100%);
    transition: transform 0.25s ease;
  }

  .sidebar.open {
    transform: translateX(0);
  }
}
</style>
