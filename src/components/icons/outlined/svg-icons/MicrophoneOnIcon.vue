<template>
  <svg fill="none" :class="`icon-${size}`" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0004 22.0001V18.8391" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0003 14.8481V14.8481C9.75618 14.8481 7.93848 13.0218 7.93848 10.7682V6.08095C7.93848 3.82732 9.75618 2 12.0003 2C14.2433 2 16.0611 3.82732 16.0611 6.08095V10.7682C16.0611 13.0218 14.2433 14.8481 12.0003 14.8481Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20 10.8005C20 15.2394 16.418 18.8382 12 18.8382C7.58093 18.8382 4 15.2394 4 10.8005" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14.0693 6.75579H16.0589" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.0703 10.0934H16.0604" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  size: { type: Number, default: 20 }
})
</script>
