<template>
  <svg fill="none" :class="`icon-${size}`" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9995 22.0001V18.8391" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9996 14.8481V14.8481C9.75637 14.8481 7.9375 13.0218 7.9375 10.7682V6.08095C7.9375 3.82732 9.75637 2 11.9996 2C14.2438 2 16.0617 3.82732 16.0617 6.08095V10.7682C16.0617 13.0218 14.2438 14.8481 11.9996 14.8481Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20 10.8005C20 15.2394 16.4188 18.8382 11.9995 18.8382C7.58117 18.8382 4 15.2394 4 10.8005" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  size: { type: Number, default: 20 }
})
</script>
