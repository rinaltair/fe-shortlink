<template>
  <svg :class="`icon-${size}`" xmlns="http://www.w3.org/2000/svg" fill="none">
    <circle cx="12" cy="12" r="8" fill="currentColor" />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  size: { type: Number, default: 20 }
})
</script>
