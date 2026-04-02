<template>
  <div class="messenger-header d-flex align-items-center">
    <div class="user-profile d-flex align-items-center">
      <Avatar :image="user.image" :status="user.status" />
      <UserInfo :name="user.name" :status="user.status" :isHeader="true" />
    </div>

    <div class="actions d-flex align-items-center ms-auto">
      <HeaderButton title="Invite" icon="fa-user-plus" />
      <HeaderButton title="Settings" icon="fa-gear" />
      <HeaderButton class="sidebar-toggler" title="Toggle" icon="fa-bars" @click="handleToggle" />
    </div>
  </div>
</template>

<script setup>
import Avatar from "@/components/Avatar.vue";
import UserInfo from "@/components/UserInfo.vue";
import HeaderButton from "@/components/Messenger/HeaderButton.vue";
import carmenImg from "@/assets/images/carmen.jpg";

const props = defineProps({
  user: Object,
  sidebarRef: Object,
});

defineEmits(["toggleSidebar"]);

const user = {
  name: "Carmen Smith",
  image: carmenImg,
  status: "Online",
};

function handleToggle() {
  if (
    props.sidebarRef &&
    typeof props.sidebarRef.toggleSidebar === "function"
  ) {
    props.sidebarRef.toggleSidebar();
  } else {
    emit("toggleSidebar");
  }
}
</script>

<style scoped>
.messenger-header {
  height: 90px;
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.2);
}

.actions {
  margin-left: auto;
  padding-left: 15px;
}
</style>
