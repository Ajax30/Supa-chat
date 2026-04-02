<template>
  <div class="actions d-flex align-items-center">
    <button class="icon" title="Add attachment">
      <i class="fa-solid fa-paperclip"></i>
    </button>
    <button class="icon" title="Emoji">
      <i class="fa-regular fa-face-smile"></i>
    </button>
    <button
      class="submit"
      title="Send"
      @click="handleSend"
      :disabled="!message.trim()"
    >
      <i class="fa-solid fa-paper-plane"></i>
    </button>
  </div>
</template>

<script setup>

const props = defineProps({
  message: { type: String, default: "" },
});

const emit = defineEmits(["sendMessage"]);

function handleSend() {
  if (props.message.trim()) {
    emit("sendMessage", props.message);
  }
}
</script>

<style scoped>
.actions {
  margin-left: 15px;
}

.actions button {
  padding: 5px;
  color: #6c757d;
}

.actions button.submit {
  font-size: 150%;
  color: #331c7c;
  padding-right: 0;
}

.actions button:disabled {
  opacity: 0.6;
  pointer-events: none;
}
</style>