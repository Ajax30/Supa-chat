<template>
  <div class="form-field">
    <label class="d-block">{{ label }}</label>

    <input class="d-block w-100" :type="type" :placeholder="placeholder" :value="modelValue" :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)" @blur="$emit('blur')" />

    <span class="error" v-if="error">
      {{ error }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  modelValue: String,
  error: String,
  disabled: Boolean
})

defineEmits(['update:modelValue', 'blur'])
</script>

<style scoped>
.form-field {
  position: relative;
  margin-bottom: 15px;
}

.error {
  color: #dc3545;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  right: 0;
}

.form-field label {
  padding-left: 6px;
  color: #6c757d;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 6px 3px 6px;
  color: #8b8da9;
  font-size: 14px;
}
</style>