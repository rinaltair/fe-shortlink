<template>
  <h2 class="mb-3 counter text-primary">{{ counterValue }}</h2>
  <h6>{{ counterTitle }}</h6>
</template>
<script>
export default {
  props: {
    counterValue: { type: String, defult: '' },
    counterTitle: { type: String, defult: '' }
  }
}
</script>
