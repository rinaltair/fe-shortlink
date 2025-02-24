<template>
  <default-navbar>
    <button data-trigger="navbar_main" class="d-xl-none btn btn-primary rounded-pill p-1 pt-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <svg width="20px" height="20px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
      </svg>
    </button>
    <div class="offcanvas offcanvas-start d-xl-none d-md-block" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <router-link :to="{ name: 'default.dashboard' }" class="navbar-brand ms-0">
          <brand-logo :color="true"></brand-logo>
          <h4 class="logo-title"><brand-name></brand-name></h4>
        </router-link>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link class="nav-link" :to="{ name: 'horizontal.dashboard' }"> Horizontal </router-link></li>
          <li class="nav-item"><router-link class="nav-link" :to="{ name: 'dual-horizontal.dashboard' }"> Dual Horizontal </router-link></li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'dual-compact.dashboard' }"><span class="item-name">Dual Compact</span></router-link>
          </li>
          <li class="nav-item"><router-link class="nav-link" :to="{ name: 'boxed.dashboard' }"> Boxed Horizontal </router-link></li>
          <li class="nav-item"><router-link class="nav-link" :to="{ name: 'boxed-fancy.dashboard' }"> Boxed Fancy</router-link></li>
        </ul>
      </div>
    </div>

    <!-- Conditional rendering based on the route name -->
    <template v-if="route.path === '/boxed' || route.path === '/boxed-fancy'">
      <router-link :to="{ name: 'default.dashboard' }" class="logo-center navbar-brand col-md-2 col-lg-2 col-xl-2 col-xxl-3 ms-0">
        <div class="logo-main">
          <div class="logo-normal">
            <svg class="icon-30 text-primary" width="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
              <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
              <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
              <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
            </svg>
          </div>
        </div>
        <h4 class="logo-title"><brand-name></brand-name></h4>
      </router-link>
    </template>

    <template v-else>
      <b-col lg="3" class="col-lg-2 navbar-brand">
        <router-link :to="{ name: 'default.dashboard' }" class="navbar-brand custom-logo-padding">
          <svg class="icon-30 text-primary" width="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
            <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
            <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
            <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
          </svg>
          <h4 class="logo-title"><brand-name></brand-name></h4>
        </router-link>
      </b-col>
    </template>

    <horizontal-menu></horizontal-menu>
  </default-navbar>
</template>

<script setup>
import { useRoute } from 'vue-router'

// Use useRoute to access the current route information
const route = useRoute()

// Check if the current route is the 'boxed' layo
// Import required components
import DefaultNavbar from '@/components/custom/navbar/DefaultNavbar.vue'
import HorizontalMenu from '@/components/custom/navbar/HorizontalMenu.vue'
</script>
