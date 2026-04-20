<template>
  <div class="form-container d-flex flex-column">
    <div class="form-card">
      <h3 class="form-title">{{ title }}</h3>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
})
</script>

<style>
.form-container {
  flex: 1;
  justify-content: center;
  align-items: center;
}

.form-card {
  background: #fff;
  padding: 1.5rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 90%;
  max-width: 360px;
}

.form-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #372379;
  line-height: 1;
  margin-bottom: 10px;
}
</style>