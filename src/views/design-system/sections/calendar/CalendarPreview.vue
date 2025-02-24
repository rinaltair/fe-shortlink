<template>
  <b-row class="custom-flatpickr-size">
    <b-col class="col-md-6 order-md-1">
      <div class="bd-example">
        <flat-picker v-model="date" :config="{ minDate: 'today', dateFormat: 'Y-m-d' }" name="date" placeholder="Date Picker" class="form-control"></flat-picker>
      </div>
      <div class="bd-example">
        <b-input-group class="form-group form-group-filled">
          <flat-picker v-model="rangedate" :config="{ mode: 'range', minDate: 'today', dateFormat: 'Y-m-d' }" name="date" placeholder="Range Date Picker" class="form-control"></flat-picker>
        </b-input-group>
      </div>
      <div class="bd-example">
        <flat-picker v-model="time" :config="{ mode: 'time' }" name="time" placeholder="Time Picker" class="form-control"></flat-picker>
      </div>
      <div class="bd-example">
        <div class="form-group">
          <div class="input-group wrap_flatpicker">
            <flat-picker v-model="date" :config="{ minDate: 'today', dateFormat: 'Y-m-d' }" name="date" placeholder="Select Date.." class="form-control"></flat-picker>
            <a class="input-group-text input-button pointer-event" title="toggle" data-bs-toggle="" href="javascript:void(0)">
              <svg width="24" class="icon-24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </a>
            <a class="input-group-text input-button" title="clear" data-clear="" href="javascript:void(0)">
              <svg width="24" class="icon-24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </b-col>
    <div class="bd-example col-md-6 order-md-0 mt-0">
      <div class="form-group">
        <flat-picker v-model="inlinedate" :config="{ mode: 'range', minDate: 'today', dateFormat: 'Y-m-d', inline: true }" class="form-control d-none"></flat-picker>
      </div>
    </div>
  </b-row>
</template>
<script>
import { ref } from 'vue'
import FlatPicker from 'vue-flatpickr-component'
export default {
  components: {
    FlatPicker
  },
  setup() {
    const date = ref('')
    const time = ref('')
    const rangedate = ref('')
    const inlinedate = ref('')
    return {
      date,
      rangedate,
      inlinedate,
      time
    }
  }
}
</script>
