<template>
  <default-navbar :isGoPro="true" :isSearch="true" @menuOpen="showOffcanvas" @menuClose="hideOffcanvas">
    <router-link to="/dashboard" class="navbar-brand navbar-dashboard-brand">
      <brand-logo :color="true" />
      <h4 class="logo-title d-block d-xl-none" data-setting="app_name"><brand-name></brand-name></h4>
    </router-link>
    <div class="sidebar-toggle" data-toggle="sidebar" data-active="true" @click="toggleSidebar">
      <i class="icon d-flex">
        <svg width="20px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
        </svg>
      </i>
    </div>
    <div class="d-flex align-items-center justify-content-between product-offcanvas">
      <!-- Horizontal Nav Start Here -->
      <b-offcanvas v-model="responsiveNav" :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'" title="" class="shadow-none iq-product-menu-responsive" id="offcanvass" bs-offcanvas-zindex="100">
        <horizontal-nav></horizontal-nav>
      </b-offcanvas>
      <!-- Horizontal Nav End Here -->
      <slot></slot>
    </div>
  </default-navbar>
</template>
<script>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useSetting } from '@/store/pinia'
import DefaultNavbar from '../custom/navbar/DefaultNavbar.vue'
import HorizontalNav from '../../components/modules/landing-pages/HorizontalNav.vue'
export default {
  components: {
    DefaultNavbar,
    HorizontalNav
  },
  setup() {
    const store = useSetting()
    const carts = computed(() => store.carts)
    const headerNavbar = computed(() => store.header_navbar)
    const themeSchemeDirection = computed(() => store.theme_scheme_direction)

    const responsiveNav = ref(false)

    const showOffcanvas = () => {
      responsiveNav.value = true
    }

    const hideOffcanvas = () => {
      responsiveNav.value = false
    }

    const fullScreen = ref(false)
    const isHidden = ref(false)

    const openFullScreen = () => {
      if (fullScreen.value) {
        fullScreen.value = false
        document.exitFullscreen()
      } else {
        fullScreen.value = true
        document.documentElement.requestFullscreen()
      }
    }

    const onscroll = () => {
      const yOffset = document.documentElement.scrollTop
      const navbar = document.querySelector('.navs-sticky')
      if (navbar !== null) {
        if (yOffset >= 100) {
          navbar.classList.add('menu-sticky')
        } else {
          navbar.classList.remove('menu-sticky')
        }
      }
    }

    const toggleSidebar = () => {
      document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini')
    }

    onMounted(() => {
      window.addEventListener('scroll', onscroll())
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', onscroll())
    })

    const updateRadio = (size) => {
      store.theme_font_size(size)
    }
    return {
      headerNavbar,
      openFullScreen,
      updateRadio,
      toggleSidebar,
      fullScreen,
      isHidden,
      carts,
      themeSchemeDirection,
      showOffcanvas,
      hideOffcanvas
    }
  },
  props: {
    fullsidebar: { type: Boolean, default: false }
  }
}
</script>
<style>
.iq-product-menu-responsive .offcanvas-header {
  display: none;
}
</style>
