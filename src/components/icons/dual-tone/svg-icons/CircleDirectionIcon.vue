<template>
  <svg width="32" :class="`icon-${size}`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.478 6.477 2 12 2C17.523 2 22 6.478 22 12Z" fill="currentColor"></path>
    <path d="M15.8597 8.70505L14.2397 13.8251C14.1797 14.0351 14.0097 14.2051 13.7997 14.2661L8.69972 15.8651C8.35972 15.9761 8.02972 15.6451 8.13972 15.3051L9.73972 10.1751C9.79972 9.96505 9.96972 9.80505 10.1797 9.73505L15.2997 8.13505C15.6497 8.02505 15.9697 8.35505 15.8597 8.70505Z" fill="currentColor"></path>
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  size: { type: Number, default: 20 }
})
</script>
