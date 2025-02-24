<template>
  <div class="bd-example">
    <BAlert show dismissible v-model="dismissibleAlert" variant="primary" class="custom-closebtn-direction"> A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like. </BAlert>
  </div>
  <div class="bd-example">
    <BAlert show dismissible v-model="dismissibleAlert1" variant="primary" class="custom-closebtn-direction"> A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like. </BAlert>
  </div>
  <div class="bd-example">
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
      </symbol>
      <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </symbol>
      <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </symbol>
    </svg>
    <BAlert show variant="primary" :model-value="true" class="d-flex align-items-center">
      <svg class="flex-shrink-0 bi me-2" width="24" height="24">
        <use xlink:href="#info-fill" />
      </svg>
      <div>An example alert with an icon</div>
    </BAlert>
    <BAlert show variant="success" class="d-flex align-items-center" :model-value="true">
      <svg class="flex-shrink-0 bi me-2" width="24" height="24">
        <use xlink:href="#check-circle-fill" />
      </svg>
      <div>An example success alert with an icon</div>
    </BAlert>
    <BAlert show variant="warning" class="d-flex align-items-center" :model-value="true">
      <svg class="flex-shrink-0 bi me-2" width="24" height="24">
        <use xlink:href="#exclamation-triangle-fill"></use>
      </svg>
      <div>An example warning alert with an icon</div>
    </BAlert>
    <BAlert show variant="danger" class="d-flex align-items-center" :model-value="true">
      <svg class="flex-shrink-0 bi me-2" width="24" height="24">
        <use xlink:href="#exclamation-triangle-fill"></use>
      </svg>
      <div>An example danger alert with an icon</div>
    </BAlert>
  </div>
  <div class="bd-example">
    <BAlert show variant="success" class="mb-3 alert-left custom-closebtn-direction custom-closebtn-color" v-model="dismissibleAlert2" dismissible>
      <span> This is a success alert—check it out!</span>
    </BAlert>
    <BAlert show variant="info" class="mb-3 alert-top custom-closebtn-direction custom-closebtn-color" v-model="dismissibleAlert3" dismissible>
      <span> This is a info alert—check it out!</span>
    </BAlert>
    <BAlert show variant="warning" class="mb-3 alert-right custom-closebtn-direction custom-closebtn-color" v-model="dismissibleAlert4" dismissible>
      <span> This is a warning alert—check it out!</span>
    </BAlert>
    <BAlert show variant="danger" class="mb-3 alert-bottom custom-closebtn-direction custom-closebtn-color" v-model="dismissibleAlert5" dismissible>
      <span> This is a danger alert—check it out!</span>
    </BAlert>
  </div>
  <div class="bd-example">
    <BAlert variant="warning" class="rounded-0 custom-closebtn-direction" v-model="dismissibleAlert6" dismissible fade show>
      <span> This is a warning alert—check it out!</span>
    </BAlert>

    <BAlert variant="warning" class="alert-solid rounded-0 custom-closebtn-direction custom-closebtn-color" :model-value="true" fade show v-model="dismissibleAlert7" dismissible>
      <span> This is a warning alert—check it out!</span>
    </BAlert>
  </div>
  <div class="bd-example">
    <BAlert show variant="success mb-0" :model-value="true">
      <h5 class="alert-heading">Well done!</h5>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr />
      <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </BAlert>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const dismissibleAlert = ref(true)
const dismissibleAlert1 = ref(true)
const dismissibleAlert2 = ref(true)
const dismissibleAlert3 = ref(true)
const dismissibleAlert4 = ref(true)
const dismissibleAlert5 = ref(true)
const dismissibleAlert6 = ref(true)
const dismissibleAlert7 = ref(true)
</script>
