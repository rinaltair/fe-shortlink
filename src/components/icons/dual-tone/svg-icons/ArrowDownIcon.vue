<template>
  <svg width="32" :class="`icon-${size}`" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M12.6588 3.71101V12.189C12.6588 12.5812 12.3405 12.8995 11.9483 12.8995C11.5561 12.8995 11.2378 12.5812 11.2378 12.189V3.71101C11.2378 3.3188 11.5561 3.00049 11.9483 3.00049C12.3405 3.00049 12.6588 3.3188 12.6588 3.71101Z" fill="currentColor"></path>
    <mask id="mask4" maskUnits="userSpaceOnUse" x="6" y="11" width="12" height="10">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 11.4788H17.3964V20.4182H6.5V11.4788Z" fill="white"></path>
    </mask>
    <g mask="url(#mask0)">
      <path d="M17.3967 12.1893C17.3967 12.3219 17.3597 12.4527 17.2877 12.5682L12.5499 20.0865C12.4192 20.2931 12.1928 20.4191 11.9484 20.4191C11.7039 20.4191 11.4775 20.2931 11.3468 20.0865L6.609 12.5682C6.47163 12.3494 6.4631 12.0728 6.5891 11.8463C6.71416 11.619 6.95195 11.4788 7.21058 11.4788H16.6862C16.9448 11.4788 17.1826 11.619 17.3076 11.8463C17.3673 11.9534 17.3967 12.0718 17.3967 12.1893Z" fill="currentColor"></path>
    </g>
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  size: { type: Number, default: 20 }
})
</script>
