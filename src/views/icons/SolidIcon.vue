<template>
  <b-row>
    <b-col cols="12">
      <b-card class="mb-4">
        <template #header>
          <h4 class="card-title mb-0">Solid</h4>
        </template>
        <div class="icon-grid">
          <div class="icon-box" v-for="(item, index) in iconLists" :key="index">
            <div class="overlay">
              <button class="btn btn-sm btn-primary-subtle" v-b-tooltip.hover :title="iconTitle" @click="copyIcon(item.name)">{{ iconTitle }}</button>
            </div>
            <icon-component type="solid" :icon-name="item.name" :size="32" />
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import { ref } from 'vue'
import IconComponent from '@/components/icons/IconComponent.vue'
import ArrIcons from '@/assets/icons.json'
import { copyToClipboard } from '../../utilities/dom'
export default {
  components: {
    IconComponent
  },
  setup() {
    const iconLists = ref(ArrIcons)
    const iconTitle = ref('Copy')
    const copyIcon = (value) => {
      copyToClipboard(value)
    }
    return {
      iconLists,
      iconTitle,
      copyIcon
    }
  }
}
</script>
