<template>
  <loader-component :show="isLoader"></loader-component>
  <!-- Sidebar Component Start Here-->
  <sidebar-component></sidebar-component>
  <!-- Sidebar Component End Here-->
  <main class="main-content">
    <div :class="`position-relative  ${isBanner ? 'iq-banner ' + bannerStyle : ''}`">
      <!-- Header Component Start Here -->
      <header-component></header-component>
      <template v-if="isBanner">
        <!-- Sub Header Component Start Here-->
        <sub-header></sub-header>
        <!-- Sub Header Component End Here-->
      </template>
      <!-- Header Component End Here -->
    </div>

    <!-- Main Content Start Here -->
    <main-content-component>
      <!-- Router View For Pages -->
      <router-view></router-view>
    </main-content-component>
    <!-- Main Content Start Here -->

    <!-- Footer Component Start Here -->
    <footer-component></footer-component>
    <!-- Footer Component End Here -->
  </main>
  <!-- Live Customizer Component Start Here -->
  <setting-offcanvas></setting-offcanvas>
  <!-- Live Customizer Component End Here-->
  <a class="btn btn-fixed-end btn-secondary btn-icon btn-dashboard z-3" href="./landing-page"> Landing Pages </a>
  <div class="btn-download">
    <a class="btn btn-success px-3 py-2" href="https://iqonic.design/product/admin-templates/hope-ui-admin-free-open-source-bootstrap-admin-template/" target="_blank">
      <svg class="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M17.554 7.29614C20.005 7.29614 22 9.35594 22 11.8876V16.9199C22 19.4453 20.01 21.5 17.564 21.5L6.448 21.5C3.996 21.5 2 19.4412 2 16.9096V11.8773C2 9.35181 3.991 7.29614 6.438 7.29614H7.378L17.554 7.29614Z" fill="currentColor"></path>
        <path d="M12.5464 16.0374L15.4554 13.0695C15.7554 12.7627 15.7554 12.2691 15.4534 11.9634C15.1514 11.6587 14.6644 11.6597 14.3644 11.9654L12.7714 13.5905L12.7714 3.2821C12.7714 2.85042 12.4264 2.5 12.0004 2.5C11.5754 2.5 11.2314 2.85042 11.2314 3.2821L11.2314 13.5905L9.63742 11.9654C9.33742 11.6597 8.85043 11.6587 8.54843 11.9634C8.39743 12.1168 8.32142 12.3168 8.32142 12.518C8.32142 12.717 8.39743 12.9171 8.54643 13.0695L11.4554 16.0374C11.6004 16.1847 11.7964 16.268 12.0004 16.268C12.2054 16.268 12.4014 16.1847 12.5464 16.0374Z" fill="currentColor"></path>
      </svg>
    </a>
  </div>
</template>

<script setup>
// Library
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSetting } from '@/store/pinia'

// Components
import HeaderComponent from '@/components/partials/HeaderComponent.vue'
import SubHeader from '@/components/custom/header/SubHeader.vue'
import SidebarComponent from '@/components/partials/SidebarComponent.vue'
import MainContentComponent from '@/components/partials/MainContentComponent.vue'
import FooterComponent from '@/components/partials/FooterComponent.vue'
import SettingOffcanvas from '@/components/setting/SettingOffcanvas.vue'
import LoaderComponent from '@/components/custom/loader/LoaderComponent.vue'

const route = useRoute()
const store = useSetting()
const isBanner = computed(() => route.meta.isBanner)
const bannerStyle = computed(() => store.header_banner_value)
const isLoader = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoader.value = false
  }, 300)
})
</script>

<style></style>
