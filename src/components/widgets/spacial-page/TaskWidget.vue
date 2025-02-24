<template>
  <b-card>
    <div class="d-grid grid-flow-col align-items-center justify-content-between mb-2">
      <div class="d-flex align-items-center">
        <span>Dashboard plan</span>
        <icon-component type="outlined" icon-name="chevron-right" :size="20"></icon-component>
        <span>List</span>
      </div>
      <div class="dropdown">
        <span class="h5" id="dropdownMenuButton07" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
    <h6 class="mb-3">{{ title }}</h6>
    <div class="d-flex align-items-center mb-3">
      <b-button variant="icon btn-gray-subtle me-2">
        <span class="btn-inner">
          <svg class="icon-20" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none">
            <g>
              <g>
                <path d="M17 3.99988L4.99998 3.99998C3.89542 3.99999 3 4.89542 3 5.99998V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V6.69039"
                  stroke="currentColor" stroke-linecap="round"></path>
                <path d="M12 12L21 3" stroke="currentColor" stroke-linecap="round"></path>
              </g>
            </g>
          </svg>
        </span>
      </b-button>
      <b-button variant="icon btn-gray-subtle me-2">
        <span class="btn-inner">
          <icon-component type="outlined" icon-name="calendar" :size="20"></icon-component>
        </span>
      </b-button>
      <b-button variant="icon btn-gray-subtle me-2">
        <span class="btn-inner">
          <svg class="icon-20" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none">
            <g>
              <g>
                <path d="M18.5 6V12C18.5 12.2761 18.2761 12.5 18 12.5H13.4142C13.2816 12.5 13.1544 12.4473 13.0607 12.3536L12.6464 11.9393C12.3651 11.658 11.9836 11.5 11.5858 11.5H6C5.72386 11.5 5.5 11.2761 5.5 11V5C5.5 4.72386 5.72386 4.5 6 4.5H11.5858C11.7184 4.5 11.8456 4.55268 11.9393 4.64645L12.3536 5.06066C12.6349 5.34197 13.0164 5.5 13.4142 5.5H18C18.2761 5.5 18.5 5.72386 18.5 6Z" stroke="currentColor"></path>
                <rect x="5" y="4" width="1" height="16" rx="0.5" stroke="currentColor"></rect>
              </g>
            </g>
          </svg>
        </span>
      </b-button>
      <b-button variant="icon btn-gray-subtle me-2">
        <span class="btn-inner">
          <icon-component type="outlined" icon-name="ChevronDown" :size="20"></icon-component>
        </span>
      </b-button>
    </div>
    <div class="iq-media-group-1">
      <a href="#" class="iq-media-1">
        <div class="icon iq-icon-box-2 text-primary">AT</div>
      </a>{{ ' ' }} <a href="#" class="iq-media-1">
        <div class="icon iq-icon-box-2 text-warning">WT</div>
      </a>{{ ' ' }} <a href="#" class="iq-media-1">
        <div class="icon iq-icon-box-2 text-success">GT</div>
      </a>{{ ' ' }}
      <a href="#" class="iq-media-1">
        <div class="icon iq-icon-box-2 text-danger">
          <icon-component type="solid" icon-name="plus" class="icon-16" width="16" :size="16"></icon-component>
        </div>
      </a>{{ ' ' }}
    </div>
    <span class="remove"></span>
  </b-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
