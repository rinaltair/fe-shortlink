<template>
  <svg width="32" :class="`icon-${size}`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M3.71101 11.3407H12.189C12.5812 11.3407 12.8995 11.659 12.8995 12.0512C12.8995 12.4434 12.5812 12.7617 12.189 12.7617H3.71101C3.3188 12.7617 3.00049 12.4434 3.00049 12.0512C3.00049 11.659 3.3188 11.3407 3.71101 11.3407Z" fill="currentColor"></path>
    <mask id="mask2" maskUnits="userSpaceOnUse" x="11" y="6" width="10" height="12">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4785 17.4998V6.60336H20.418V17.4998H11.4785Z" fill="white"></path>
    </mask>
    <g mask="url(#mask0)">
      <path d="M12.189 6.60307C12.3217 6.60307 12.4524 6.64002 12.568 6.71202L20.0863 11.4498C20.2928 11.5805 20.4188 11.807 20.4188 12.0514C20.4188 12.2958 20.2928 12.5222 20.0863 12.653L12.568 17.3908C12.3491 17.5281 12.0725 17.5367 11.8461 17.4107C11.6187 17.2856 11.4785 17.0478 11.4785 16.7892V7.3136C11.4785 7.05497 11.6187 6.81718 11.8461 6.69213C11.9531 6.63244 12.0716 6.60307 12.189 6.60307Z" fill="currentColor"></path>
    </g>
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  size: { type: Number, default: 20 }
})
</script>
