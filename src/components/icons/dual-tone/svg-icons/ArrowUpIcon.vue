<template>
  <svg width="32" :class="`icon-${size}`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M11.3412 20.289L11.3412 11.811C11.3412 11.4188 11.6595 11.1005 12.0517 11.1005C12.4439 11.1005 12.7622 11.4188 12.7622 11.811L12.7622 20.289C12.7622 20.6812 12.4439 20.9995 12.0517 20.9995C11.6595 20.9995 11.3412 20.6812 11.3412 20.289Z" fill="currentColor"></path>
    <mask id="mask3" maskUnits="userSpaceOnUse" x="6" y="3" width="12" height="10">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 12.5212L6.6036 12.5212L6.6036 3.58178L17.5 3.58178V12.5212Z" fill="white"></path>
    </mask>
    <g mask="url(#mask0)">
      <path d="M6.60332 11.8107C6.60332 11.6781 6.64027 11.5473 6.71227 11.4318L11.4501 3.91345C11.5808 3.70692 11.8072 3.58092 12.0516 3.58092C12.2961 3.58092 12.5225 3.70692 12.6532 3.91345L17.391 11.4318C17.5284 11.6506 17.5369 11.9272 17.4109 12.1537C17.2858 12.381 17.0481 12.5212 16.7894 12.5212L7.31384 12.5212C7.05521 12.5212 6.81742 12.381 6.69237 12.1537C6.63269 12.0466 6.60332 11.9282 6.60332 11.8107Z" fill="currentColor"></path>
    </g>
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  size: { type: Number, default: 20 }
})
</script>
