<template>
  <FormCard title="Register">
    <form @submit.prevent="submit">
      <label class="d-block">First Name</label>
      <input
        class="d-block w-100"
        type="text"
        placeholder="Ex. John"
        v-model="firstName"
        required
      />

      <label class="d-block">Last Name</label>
      <input
        class="d-block w-100"
        type="text"
        placeholder="Ex. Smith"
        v-model="lastName"
        required
      />

      <label class="d-block">Email</label>
      <input
        class="d-block w-100"
        type="email"
        placeholder="yourname@example.com"
        v-model="email"
        required
      />

      <label class="d-block">Photo</label>
      <input
        class="d-block w-100"
        type="file"
        accept="image/*"
        @change="handleFile"
        required
      />

      <label class="d-block">Password</label>
      <input
        class="d-block w-100"
        type="password"
        placeholder="Your Password"
        v-model="password"
        required
      />

      <label class="d-block">Repeat Password</label>
      <input
        class="d-block w-100"
        type="password"
        placeholder="Your Password Again"
        v-model="passwordRepeat"
        required
      />

      <button type="submit" class="w-100">Register</button>
    </form>
  </FormCard>
</template>

<script setup>
import { ref } from "vue";
import FormCard from "@/components/Auth/FormCard.vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const passwordRepeat = ref("");
const photo = ref(null);

function handleFile(e) {
  photo.value = e.target.files[0];
}

function submit() {
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    passwordRepeat: passwordRepeat.value,
    photo: photo.value
  });
}
</script>