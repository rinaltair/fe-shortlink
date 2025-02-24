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
        <!-- <div class="navbar dual-horizontal"> -->
        <ul class="navbar-nav">
          <li class="nav-item"><router-link class="nav-link" :to="{ name: 'horizontal.dashboard' }"> Horizontal </router-link></li>
          <li class="nav-item"><router-link class="nav-link" :to="{ name: 'dual-horizontal.dashboard' }"> Dual Horizontal </router-link></li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'dual-compact.dashboard' }"><span class="item-name">Dual Compact</span></router-link>
          </li>
          <li class="nav-item"><router-link class="nav-link" :to="{ name: 'boxed.dashboard' }"> Boxed Horizontal </router-link></li>
          <li class="nav-item"><router-link class="nav-link" :to="{ name: 'boxed-fancy.dashboard' }"> Boxed Fancy</router-link></li>
        </ul>
        <!-- </div> -->
      </div>
    </div>
    <div class="navbar-brand">
      <router-link :to="{ name: 'default.dashboard' }" class="d-flex align-items-center">
        <brand-logo></brand-logo>
        <h4 class="logo-title"><brand-name></brand-name></h4>
      </router-link>
    </div>
    <div class="input-group search-input">
      <span class="input-group-text" id="search-input">
        <svg class="icon-18" width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
          <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
      <input type="search" class="form-control" placeholder="Search..." />
    </div>
  </default-navbar>
  <div class="navbar dual-horizontal">
    <horizontal-menu></horizontal-menu>
  </div>
</template>

<script setup>
import DefaultNavbar from '@/components/custom/navbar/DefaultNavbar.vue'
import HorizontalMenu from '@/components/custom/navbar/HorizontalMenu.vue'
</script>
