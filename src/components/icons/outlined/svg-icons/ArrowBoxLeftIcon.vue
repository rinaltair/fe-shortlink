<template>
  <svg fill="none" :class="`icon-${size}`" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 7.666L2.75 16.335C2.75 19.355 4.889 21.25 7.916 21.25L16.084 21.25C19.111 21.25 21.25 19.365 21.25 16.335L21.25 7.666C21.25 4.636 19.111 2.75 16.084 2.75L7.916 2.75C4.889 2.75 2.75 4.636 2.75 7.666Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.91394 12L16.0859 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11.6777 15.748L7.91373 12L11.6777 8.25195" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  size: { type: Number, default: 20 }
})
</script>
