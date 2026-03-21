<template>
  <Sidebar />
  <div class="messenger d-flex flex-column">
    <MessengerHeader />
    <MessengerContent />
    <MessengerFooter />
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import MessengerHeader from "@/components/Messenger/MessengerHeader.vue";
import MessengerContent from "@/components/Messenger/MessengerContent.vue";
import MessengerFooter from "@/components/Messenger/MessengerFooter.vue";
</script>

<style scoped>
.messenger {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
</style>
