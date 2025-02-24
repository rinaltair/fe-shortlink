<template>
  <router-view />
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

// Pinia Store
import { useSetting } from './store/pinia'
import '@/plugins/styles'
export default {
  name: 'App',
  setup() {
    const store = useSetting()
    store.setSetting()
    // const sidebarType = computed(() => store.sidebar_type_value)
    const resizePlugin = () => {
      const sidebarResponsive = document.querySelector('[data-sidebar="responsive"]')
      if (window.innerWidth < 1025) {
        if (sidebarResponsive !== null) {
          if (!sidebarResponsive.classList.contains('sidebar-mini')) {
            sidebarResponsive.classList.add('on-resize')
            store.sidebar_type('sidebar-mini')
          }
        }
      } else {
        if (sidebarResponsive !== null) {
          if (sidebarResponsive.classList.contains('sidebar-mini') && sidebarResponsive.classList.contains('on-resize')) {
            sidebarResponsive.classList.remove('on-resize')
            store.sidebar_type('')
          }
        }
      }
    }
    onMounted(() => {
      window.addEventListener('resize', resizePlugin)
      setTimeout(() => {
        resizePlugin()
      }, 200)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', resizePlugin)
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/custom-vue/scss/styles.scss';
@import '@/assets/custom-vue/custom-hope-ui.scss/';
</style>
