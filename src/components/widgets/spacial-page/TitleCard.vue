<template>
  <div class="d-flex align-items-center justify-content-between">
    <h6 :class="`text-${variant} mb-0`">{{ title }}</h6>
    <div class="dropdown">
      <span class="d-flex align-items-center h5 mb-0" id="dropdownMenuButton07" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <icon-component type="outlined" icon-name="three-dots" :size="24"></icon-component>
      </span>
      <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton07" style="">
        <a class="dropdown-item" href="#">
          <icon-component type="outlined" icon-name="document-plus" class="me-2" :size="20"></icon-component>
          Duplicate
        </a>
        <a class="dropdown-item" href="#">
          <icon-component type="outlined" icon-name="pencil" class="me-2" :size="20"></icon-component>
          Rename
        </a>
        <a class="dropdown-item" href="#">
          <icon-component type="outlined" icon-name="trash" class="me-2" :size="20"></icon-component>
          Delete
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: ''
    }
  }
}
</script>
