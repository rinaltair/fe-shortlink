<template>
  <svg fill="none" :class="`icon-${size}`" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.47 2 12 2C17.52 2 22 6.48 22 12C22 17.53 17.52 22 12 22C6.47 22 2 17.53 2 12ZM14.23 13.83L15.85 8.71C15.96 8.36 15.64 8.03 15.29 8.14L10.17 9.74C9.96 9.81 9.79 9.97 9.73 10.18L8.13 15.31C8.02 15.65 8.35 15.98 8.69 15.87L13.79 14.27C14 14.21 14.17 14.04 14.23 13.83Z" fill="currentColor" />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  size: { type: Number, default: 20 }
})
</script>
