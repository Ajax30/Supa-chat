<template>
  <div class="top-bar d-flex align-items-center">
    <router-link to="/" class="brand">SupaChat</router-link>
    <ul>
      <li><router-link class="link" to="/register">Register</router-link></li>
      <li><router-link class="link" to="/login">Login</router-link></li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
.top-bar {
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 50px;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 22px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}

ul {
  display: flex;
  margin-left: auto;
}

.link {
  display: inline-block;
  margin-right: 5px;
  padding: 5px;
}
</style>
