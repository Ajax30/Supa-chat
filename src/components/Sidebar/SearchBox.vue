<template>
  <div class="search-box">
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Search"
      autocomplete="off"
      class="d-block w-100"
    />
  </div>
</template>

<script setup></script>

<style scoped>
.search-box {
  padding: 25px;
}

.search-box input[type="text"] {
  border-bottom: 1px solid #8b8da9;
  padding: 2px 4px;
  font-size: 14px;
  color: #8b8da9;
  width: 100%;
}
</style>
