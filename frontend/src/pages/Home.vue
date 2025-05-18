<script setup lang="ts">
import { onMounted, ref } from "vue";

const huy = ref("");

const fetchHuy = async () => {
  const response = await fetch("/api");
  const data = await response.json();
  huy.value = data;
};

onMounted(() => fetchHuy());
</script>

<template>
  <h1>{{ huy }}</h1>
</template>
