<template>
  <svg fill="none" :class="`icon-${size}`" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.25 12C21.25 6.892 17.109 2.75 12 2.75C6.892 2.75 2.75 6.892 2.75 12C2.75 17.108 6.892 21.25 12 21.25C17.109 21.25 21.25 17.108 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15.4712 13.4424L12.0002 9.95638L8.52919 13.4424" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  size: { type: Number, default: 20 }
})
</script>
