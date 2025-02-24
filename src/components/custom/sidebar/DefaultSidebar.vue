<template>
  <aside id="first-tour" :class="`sidebar sidebar-base sidebar-default navs-rounded-all ${sidebarColor} ${sidebarMenuStyle} ${sidebarType.join(' ')}`" data-toggle="main-sidebar" data-sidebar="responsive">
    <div class="sidebar-header d-flex align-items-center justify-content-start">
      <router-link :to="{ name: 'default.dashboard' }" class="navbar-brand">
        <brand-logo></brand-logo>
        <h4 class="logo-title" data-setting="app_name">
          <brand-name></brand-name>
        </h4>
      </router-link>
      <div class="sidebar-toggle" @click="toggleSidebar">
        <i class="icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </i>
      </div>
    </div>
    <div class="sidebar-body pt-0 data-scrollbar">
      <slot name="profile-card"></slot>
      <div class="sidebar-list">
        <slot></slot>
      </div>
    </div>
    <div class="sidebar-footer"></div>
  </aside>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useSetting } from '@/store/pinia'
import Scrollbar from 'smooth-scrollbar'
export default {
  setup() {
    const store = useSetting()
    const sidebarColor = computed(() => store.sidebar_color_value)
    const sidebarType = computed(() => store.sidebar_type_value)
    const sidebarMenuStyle = computed(() => store.sidebar_menu_style_value)
    const toggleSidebar = () => {
      document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini')
    }
    onMounted(() => {
      Scrollbar.init(document.querySelector('.data-scrollbar'), { continuousScrolling: false })
    })
    return { sidebarColor, sidebarType, sidebarMenuStyle, toggleSidebar }
  }
}
</script>
