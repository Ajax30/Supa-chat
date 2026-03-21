<template>
  <router-view />
</template>

<script setup></script>

<style>
.messenger-header,
.messenger-content,
.messenger-footer {
  padding-left: 25px;
  padding-right: 25px;
}

@media (max-width: 375px) {
  .messenger-header,
  .messenger-content,
  .messenger-footer {
    padding-left: 15px;
    padding-right: 15px;
  }
}

@media (min-width: 1024px) {
  .messenger-header,
  .messenger-content,
  .messenger-footer {
    padding-left: 45px;
    padding-right: 45px;
  }
}
</style>
