<template>
  <div :class="`content-inner pb-0 ${pageLayout}`" id="page_layout">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useSetting } from '@/store/pinia'
export default {
  setup() {
    const store = useSetting()
    const pageLayout = computed(() => store.page_layout_value)
    return {
      pageLayout
    }
  }
}
</script>
