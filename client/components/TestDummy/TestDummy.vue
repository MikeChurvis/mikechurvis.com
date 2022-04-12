<template>
  <h1>Count: {{ count }}</h1>
  <button @click="count++">Increase Count by 1</button>
</template>

<script setup>
import { ref } from 'vue'
let count = ref(0)
</script>