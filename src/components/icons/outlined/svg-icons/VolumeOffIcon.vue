<template>
  <svg fill="none" :class="`icon-${size}`" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5331 9.46704L7.71375 16.2869C7.53651 16.1842 7.36859 16.1189 7.21933 16.1096C5.92263 16.0163 5.41888 16.1656 4.7099 15.5592C3.94494 14.9061 4.00091 13.1615 4.00091 11.8834C4.00091 10.6052 3.94494 8.86063 4.7099 8.20757C5.41888 7.60115 5.92263 7.75975 7.21933 7.65713C8.51603 7.55451 11.2587 3.59882 13.3763 4.84897C14.2345 5.54868 14.4678 6.8548 14.5331 9.46704Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14.5329 13.9172C14.4956 16.7907 14.2717 18.1901 13.3762 18.9178C12.3966 19.4962 11.2865 18.9645 10.2417 18.2088" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4.00146 20L7.71431 16.2869L14.5336 9.46706L20.0003 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  size: { type: Number, default: 20 }
})
</script>
