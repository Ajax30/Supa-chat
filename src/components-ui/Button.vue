<template>
  <button :type="type" :class="[
    colorClass,
    { 'w-100': fullWidth }
  ]" :disabled="disabled">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  },
  colorClass: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
button {
  line-height: 1;
  outline: none;
  border: 0;
  border-radius: 3px;
  padding: 10px 20px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}

.primary {
  background: #372379;
}

.primary:hover {
  background: #4e3e81;
}

.success {
  background: #059441;
}

.success:hover {
  background: #2ba45e;
}
</style>