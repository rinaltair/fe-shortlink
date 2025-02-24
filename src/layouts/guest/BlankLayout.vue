<template>
  <router-view> </router-view>
  <footer-component v-if="route.path === '/'"></footer-component>
</template>
<script setup>
const route = useRoute()
import FooterComponent from '@/components/partials/FooterComponent.vue'
import { useRoute } from 'vue-router'
</script>
