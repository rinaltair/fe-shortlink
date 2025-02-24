<template>
  <div>
    <h5 class="mb-3">Sidebar Types</h5>
    <div class="d-grid gap-3 grid-cols-3 mb-3 text-center">
      <checkbox-input btn-name="sidebar_type" :imgComponent="true" label-title="Mini" id="sidebar-mini" label-class="p-0 mb-2" :default-checked="menuStyle" value="sidebar-mini" @onChange="store.sidebar_type">
        <img src="@/assets/images/settings/dark/03.png" alt="mini" className="mode dark-img img-fluid" loading="lazy" />
        <img src="@/assets/images/settings/light/03.png" alt="mini" className="mode light-img img-fluid" loading="lazy" />
      </checkbox-input>
      <checkbox-input btn-name="sidebar_type" :imgComponent="true" label-title="Hover" id="sidebar-hover" label-class="p-0 mb-2" :default-checked="menuStyle" value="sidebar-hover" @onChange="store.sidebar_type">
        <img src="@/assets/images/settings/dark/04.png" alt="hover" className="mode dark-img img-fluid" loading="lazy" />
        <img src="@/assets/images/settings/light/04.png" alt="hover" className="mode light-img img-fluid" loading="lazy" />
      </checkbox-input>
      <checkbox-input btn-name="sidebar_type" :imgComponent="true" label-title="Boxed" id="sidebar-boxed" label-class="p-0 mb-2" :default-checked="menuStyle" value="sidebar-boxed" @onChange="store.sidebar_type">
        <img src="@/assets/images/settings/dark/05.png" alt="boxed" className="mode dark-img img-fluid" loading="lazy" />
        <img src="@/assets/images/settings/light/05.png" alt="boxed" className="mode light-img img-fluid" loading="lazy" />
      </checkbox-input>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useSetting } from '@/store/pinia'
import CheckboxInput from '@/components/custom/elements/CheckboxInput'
// import _ from 'lodash'
export default {
  components: {
    CheckboxInput
  },
  setup() {
    const store = useSetting()
    const menuStyle = computed(() => store.sidebar_type_value)

    return {
      menuStyle,
      store
    }
  }
}
</script>
