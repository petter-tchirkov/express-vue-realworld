<script setup lang="ts">
import { onMounted, ref } from "vue";

const huy = ref(null);

const fetchHuy = async () => {
  const response = await fetch("/api");
  const data = await response.json();
  huy.value = data.message;
};

onMounted(() => fetchHuy());
</script>

<template>
  <h1>{{ huy }}</h1>
  <router-link :to="{ name: 'login' }">to login</router-link>
</template>
