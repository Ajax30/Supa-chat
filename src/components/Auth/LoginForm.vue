<template>
  <FormCard title="Login">
    <form @submit.prevent="submit">
      <!-- Email -->
      <div class="form-field">
        <label class="d-block">Email</label>
        <input class="d-block w-100" type="email" placeholder="yourname@example.com" v-model="form.email"
          @blur="touched.email = true; validateField('email')" />
        <span class="error" v-if="touched.email && errors.email">
          {{ errors.email }}
        </span>
      </div>

      <!-- Password -->
      <div class="form-field">
        <label class="d-block">Password</label>
        <input class="d-block w-100" type="password" placeholder="Your password" v-model="form.password"
          @blur="touched.password = true; validateField('password')" />
        <span class="error" v-if="touched.password && errors.password">
          {{ errors.password }}
        </span>
      </div>
      <span class="error" v-if="authError">{{ authError }}</span>

      <SubmitButton type="submit" text="Login" colorClass="primary" :fullWidth="true" />
    </form>
  </FormCard>
</template>

<script setup>
import { reactive, ref } from "vue";
import FormCard from "@/components/Auth/FormCard.vue";
import SubmitButton from "@/components-ui/Button.vue"

const form = reactive({
  email: "",
  password: "",
});

const touched = reactive({
  email: false,
  password: false,
});

const errors = reactive({
  email: "",
  password: "",
});

const authError = ref("");

// Validate a single field
function validateField(field) {
  switch (field) {
    case "email":
      if (!form.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = "Invalid email format";
      } else {
        errors.email = "";
      }
      break;

    case "password":
      if (!form.password) {
        errors.password = "Password is required";
      } else {
        errors.password = "";
      }
      break;
  }
}

// Validate entire form
function validateForm() {
  validateField("email");
  validateField("password");
  return !errors.email && !errors.password;
}

// Submit handler
async function submit() {
  authError.value = "";

  touched.email = true;
  touched.password = true;

  if (!validateForm()) return;

  const { error } = await supabase.auth.signInWithPassword({
    email: form.email,
    password: form.password,
  });

  if (error) {
    authError.value = "Invalid email or password";
    return;
  }

  console.log("Logged in!");
}
</script>