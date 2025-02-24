<template>
  <h5 class="mt-4 mb-3">Sidebar Color</h5>
  <div class="d-grid gap-3 grid-cols-2 mb-4">
    <radio-input btn-name="sidebar_color" labelClass="d-block  gap-1" id="sidebar-white" :default-checked="sidebarcolor" value="sidebar-white" @onChange="store.sidebar_color">
      <span class="text-center">Default </span>
    </radio-input>
    <radio-input btn-name="sidebar_color" labelClass="d-block gap-1" id="sidebar-dark" :default-checked="sidebarcolor" value="sidebar-dark" @onChange="store.sidebar_color">
      <span> Dark </span>
    </radio-input>
    <radio-input btn-name="sidebar_color" labelClass="d-block  gap-1" id="sidebar-color" :default-checked="sidebarcolor" value="sidebar-color" @onChange="store.sidebar_color">
      <span> Color </span>
    </radio-input>
    <radio-input btn-name="sidebar_color" labelClass="d-block  gap-1" :imgComponent="true" id="sidebar-transparent" :default-checked="sidebarcolor" value="sidebar-transparent" @onChange="store.sidebar_color">
      <span> Transparent </span>
    </radio-input>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useSetting } from '@/store/pinia'
import RadioInput from '@/components/custom/elements/RadioInput'
export default {
  name: 'MenuColor',
  components: {
    RadioInput
  },
  setup() {
    const store = useSetting()
    const sidebarcolor = computed(() => store.sidebar_color_value)
    return {
      sidebarcolor,
      store
    }
  }
}
</script>
