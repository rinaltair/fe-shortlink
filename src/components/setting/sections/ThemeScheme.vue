<template>
  <h5 class="mb-3">Scheme</h5>
  <div class="d-grid gap-3 grid-cols-3 mb-4">
    <radio-input btn-name="theme_scheme" id="color-mode-auto" label-class="d-block d-flex align-items-center justify-content-center" :default-checked="themeScheme" value="auto" @onChange="store.theme_scheme">
      <svg class="icon-20 d-flex align-items-start" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M7,2V13H10V22L17,10H13L17,2H7Z"></path>
      </svg>
      <span class="me-2 ms-2">Auto</span>
    </radio-input>
    <radio-input btn-name="theme_scheme" id="color-mode-dark" label-class="d-flex" :default-checked="themeScheme" value="dark" @onChange="store.theme_scheme">
      <svg class="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M9,2C7.95,2 6.95,2.16 6,2.46C10.06,3.73 13,7.5 13,12C13,16.5 10.06,20.27 6,21.54C6.95,21.84 7.95,22 9,22A10,10 0 0,0 19,12A10,10 0 0,0 9,2Z"></path>
      </svg>
      <span class="me-2 ms-2">Dark</span>
    </radio-input>
    <radio-input btn-name="theme_scheme" id="color-mode-light" label-class="d-flex" :default-checked="themeScheme" value="light" @onChange="store.theme_scheme">
      <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"></path>
      </svg>
      <span class="me-2 ms-2">Light</span>
    </radio-input>
  </div>
  <hr class="hr-horizontal" />
  <!-- Theme Scheme color customizer -->
  <color-customizer />
  <!-- Theme Scheme color customizer End -->
  <hr class="hr-horizontal" />
  <h5 class="mb-3 mt-4">Scheme Direction</h5>
  <div class="d-grid gap-3 grid-cols-2 mb-4">
    <radio-input btn-name="theme_scheme_direction" :img-component="true" label-title="LTR" class-name="text-center" label-class="p-0 mb-2" id="theme-scheme-direction-ltr" :default-checked="themeSchemeDirection" value="ltr" @onChange="store.theme_scheme_direction">
      <img src="@/assets/images/settings/dark/01.png" alt="ltr" class="mode dark-img img-fluid" loading="lazy" />
      <img src="@/assets/images/settings/light/01.png" alt="ltr" class="mode light-img img-fluid" loading="lazy" />
    </radio-input>
    <radio-input btn-name="theme_scheme_direction" :img-component="true" label-title="RTL" class-name="text-center" label-class="p-0 mb-2" id="theme-scheme-direction-rtl" :default-checked="themeSchemeDirection" value="rtl" @onChange="store.theme_scheme_direction">
      <img src="@/assets/images/settings/dark/02.png" alt="rtl" class="mode dark-img img-fluid" loading="lazy" />
      <img src="@/assets/images/settings/light/02.png" alt="rtl" class="mode light-img img-fluid" loading="lazy" />
    </radio-input>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useSetting } from '@/store/pinia'
import RadioInput from '@/components/custom/elements/RadioInput'
import ColorCustomizer from '@/components/setting/sections/ColorCustomizer.vue'
export default {
  components: {
    RadioInput,
    ColorCustomizer
  },
  setup() {
    const store = useSetting()
    const themeScheme = computed(() => store.theme_scheme_value)
    const themeSchemeDirection = computed(() => store.theme_scheme_direction_value)

    // const updateRadio = (value, name) => {
    //   store.dispatch(`setting/${name}`, value)
    // }
    return {
      themeScheme,
      themeSchemeDirection,
      store
      // updateRadio
    }
  }
}
</script>
