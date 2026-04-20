<template>
  <FormCard title="Register">
    <form @submit.prevent="submit">
      <!-- First Name -->
      <Input
        label="First Name"
        placeholder="Ex. John"
        v-model="form.firstName"
        :error="touched.firstName && errors.firstName"
        @blur="touched.firstName = true; validateField('firstName')"
      />

      <!-- Last Name -->
      <Input
        label="Last Name"
        placeholder="Ex. Smith"
        v-model="form.lastName"
        :error="touched.lastName && errors.lastName"
        @blur="touched.lastName = true; validateField('lastName')"
      />

      <!-- Email -->
      <Input
        label="Email"
        type="email"
        placeholder="yourname@example.com"
        v-model="form.email"
        :error="touched.email && errors.email"
        @blur="touched.email = true; validateField('email')"
      />

      <!-- Photo (optional) -->
      <FileInput
        label="Photo"
        colorClass="primary"
        accept="image/*"
        :error="photoError"
        @change="handleFile"
      />

      <!-- Password -->
      <Input
        label="Password"
        type="password"
        placeholder="Your Password"
        v-model="form.password"
        :error="touched.password && errors.password"
        @blur="touched.password = true; validateField('password')"
      />

      <!-- Repeat Password -->
      <Input
        label="Repeat Password"
        type="password"
        placeholder="Your Password Again"
        v-model="form.passwordRepeat"
        :error="touched.passwordRepeat && errors.passwordRepeat"
        @blur="touched.passwordRepeat = true; validateField('passwordRepeat')"
      />

      <!-- Submit -->
      <SubmitButton
        type="submit"
        text="Submit"
        colorClass="primary"
        :fullWidth="true"
      />

    </form>
  </FormCard>
</template>

<script setup>
import FormCard from "@/components/Auth/FormCard.vue"
import SubmitButton from "@/components-ui/Button.vue"
import Input from "@/components-ui/Input.vue"
import FileInput from "@/components-ui/FileInput.vue"

import * as yup from "yup"
import { reactive, ref, watch } from "vue"

// Form data
const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordRepeat: ""
})

// Touched state
const touched = reactive({
  firstName: false,
  lastName: false,
  email: false,
  password: false,
  passwordRepeat: false
})

// Errors
const errors = reactive({
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  passwordRepeat: null
})

// Photo
const photo = ref(null)
const photoError = ref("")

function handleFile(e) {
  const file = e.target.files[0]
  if (file && !file.type.startsWith("image/")) {
    photoError.value = "Only images allowed"
    photo.value = null
  } else {
    photoError.value = ""
    photo.value = file
  }
}

// Validation schema
const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Repeat password is required")
})

// Validate one field
function validateField(fieldName) {
  schema
    .validateAt(fieldName, form)
    .then(() => (errors[fieldName] = null))
    .catch(err => (errors[fieldName] = err.message))
}

// Live validation
watch(() => form.firstName, () => touched.firstName && validateField("firstName"))
watch(() => form.lastName, () => touched.lastName && validateField("lastName"))
watch(() => form.email, () => touched.email && validateField("email"))
watch(() => form.password, () => touched.password && validateField("password"))
watch(() => form.passwordRepeat, () => touched.passwordRepeat && validateField("passwordRepeat"))

// Full validation
async function validateForm() {
  try {
    await schema.validate(form, { abortEarly: false })
    Object.keys(errors).forEach(k => (errors[k] = null))
    return true
  } catch (err) {
    err.inner.forEach(e => (errors[e.path] = e.message))
    return false
  }
}

// Submit
async function submit() {
  Object.keys(touched).forEach(field => (touched[field] = true))

  const valid = await validateForm()
  if (!valid) return

  console.log("Form submitted:", { ...form, photo: photo.value })
}
</script>