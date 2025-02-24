<template>
  <article id="formAlertnateInput">
    <card-lable lablename="Alternate Input" lablelink="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Alternateinput" className="mt-5 mb-3 mt-xl-0 mb-xl-2"></card-lable>
    <section-components preview-component="formAlertnateInput-preview" codeComponent="formAlertnateInput-code" targetpreview="formAlertnateInput-preview" targetcode="formAlertnateInput-code"></section-components>
  </article>
</template>
<script>
import SectionComponents from '../../components/SectionComponents.vue'
import CardLable from '../../components/CardLable.vue'
import { onMounted } from 'vue'
const prism = () => import('@/plugins/prism.mini.js')

export default {
  components: {
    SectionComponents,
    CardLable
  },
  setup() {
    onMounted(() => {
      prism()
    })
  }
}
</script>
