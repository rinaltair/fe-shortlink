<template>
  <svg fill="none" :class="`icon-${size}`" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.45 4.88017H16.52C20.21 4.88017 22.01 6.85017 22 10.8902V15.7602C22 19.6202 19.62 22.0002 15.75 22.0002H8.24C4.39 22.0002 2 19.6202 2 15.7502V8.24017C2 4.10017 3.84 2.00017 7.47 2.00017H9.05C9.981 1.99017 10.85 2.42017 11.42 3.15017L12.3 4.32017C12.58 4.67017 13 4.88017 13.45 4.88017ZM7.37 15.2902H16.63C17.04 15.2902 17.37 14.9502 17.37 14.5402C17.37 14.1202 17.04 13.7902 16.63 13.7902H7.37C6.95 13.7902 6.62 14.1202 6.62 14.5402C6.62 14.9502 6.95 15.2902 7.37 15.2902Z" fill="currentColor" />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  size: { type: Number, default: 20 }
})
</script>
