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
  padding: 0 3px 6px;
  font-size: 12px;
  color: #8b8da9;
  width: 100%;
  box-sizing: border-box;
}
</style>
