<template>
  <b-accordion>
    <b-accordion-item ref="accordionItem1" title="Accordion Item #1" visible>
      <strong>This is the first item's accordion body.</strong>
      It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
    </b-accordion-item>
    <b-accordion-item title="Accordion Item #2">
      <strong>This is the second item's accordion body.</strong>
      It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
    </b-accordion-item>
    <b-accordion-item title="Accordion Item #3">
      <strong>This is the third item's accordion body.</strong>
      It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
    </b-accordion-item>
  </b-accordion>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const accordionItem1 = ref(null)

onMounted(() => {
  // Access the accordion item directly via the ref
  const accordion = accordionItem1.value
  if (accordion) {
    // Find and manipulate the button and body elements
    const button = accordion.$el.querySelector('.accordion-button')
    const body = accordion.$el.querySelector('.accordion-collapse')

    if (button) {
      button.classList.remove('collapsed')
    }

    if (body) {
      body.classList.add('show')
    }
  }
})
</script>
