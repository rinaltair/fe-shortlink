<template>
  <svg fill="none" :class="`icon-${size}`" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7364 2.76175H8.0844C6.0044 2.75375 4.3004 4.41075 4.2504 6.49075V17.2277C4.2054 19.3297 5.8734 21.0697 7.9744 21.1147C8.0114 21.1147 8.0484 21.1157 8.0844 21.1147H16.0724C18.1624 21.0407 19.8144 19.3187 19.8024 17.2277V8.03775L14.7364 2.76175Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14.4746 2.75V5.659C14.4746 7.079 15.6236 8.23 17.0436 8.234H19.7976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11.6406 9.90869V15.9497" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.9864 12.2642L11.6414 9.90918L9.29639 12.2642" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  size: { type: Number, default: 20 }
})
</script>
