<template>
  <img :src="`${clientImage}`" alt="client-details" loading="lazy" />
</template>

<script>
export default {
  props: {
    clientImage: { type: String, default: '' }
  }
}
</script>
