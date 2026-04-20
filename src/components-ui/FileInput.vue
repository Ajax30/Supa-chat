<template>
  <div class="form-field bordered">
    <label class="d-block">{{ label }}</label>

    <input
      :class="['d-block file-upload-btn', colorClass]"
      type="file"
      :accept="accept"
      @change="onChange"
    />

    <span class="error" v-if="error">
      {{ error }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ""
  },
  colorClass: {
    type: String,
    default: ""
  },
  accept: {
    type: String,
    default: ""
  },
  error: {
    type: String,
    default: ""
  }
})

const emit = defineEmits(["change"])

function onChange(e) {
  emit("change", e.target.files[0])
}
</script>

<style scoped>
.file-upload-btn {
  max-width: 300px;
  position: relative;
  padding-left: 0;
  color: #6c757d;
  font-size: 14px;
}

.file-upload-btn:focus {
  border-width: 0 !important;
  outline: none !important;
  box-shadow: none;
}

.file-upload-btn::-webkit-file-upload-button {
  visibility: hidden;
}

.file-upload-btn::before {
  content: "Upload";
  display: inline-block;
  border-radius: 3px;
  padding: 9px 10px 9px 34px;
  white-space: nowrap;
  cursor: pointer;
  color: #fff;
  line-height: 1.2;
}

/* Icon */
.file-upload-btn::after {
  content: "\f0ee";
  font-family: "Font Awesome 7 Free";
  font-weight: 900;
  color: #fff;
  font-size: 15px;
  padding-right: 12px;
  left: 11px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

/* Colors */
.file-upload-btn.primary::before {
  background-color: #372379;
}

.file-upload-btn.primary:hover::before {
  background: #4e3e81;
}

.file-upload-btn.primary:active::before {
  background: #4e3e81;
}

.file-upload-btn.success::before {
  background-color: #059441;
}

.file-upload-btn.success:hover::before {
  background: #2ba45e;
}

.file-upload-btn.success:active::before {
  background: #2ba45e;
}
</style>