<script setup lang="ts">
import { onMounted, ref } from 'vue'
const loginMessage = ref('')
const error = ref('')

const login = async () => {
  try {
    const response = await fetch('/api/auth/login')
    const data = await response.json()
    loginMessage.value = data.message
  } catch (err) {
    error.value = err as string
  }
}
onMounted(() => login())
</script>


<template>
  <h1>{{ loginMessage }}</h1>
  <h2 style="color: red;">{{ error }}</h2>
  <router-link :to="{ name: 'home' }">back home</router-link>
</template>
