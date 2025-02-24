<template>
  <div class="bd-example">
    <b-button variant="primary">Default</b-button>{{ '' }} <b-button variant="primary" pill>Rounded</b-button>{{ '' }}
    <b-button variant="primary" pill
      >{{ '' }}
      <span class="btn-inner">
        <svg class="icon-20" idth="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </span>
      With Icon </b-button
    >{{ '' }}
    <b-button variant="icon btn-primary">
      <span class="btn-inner">
        <svg class="icon-20" dth="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </span> </b-button
    >{{ '' }}
  </div>
  <div class="bd-example"><b-button variant="primary">Primary</b-button>{{ '' }} <b-button variant="secondary">Secondary</b-button>{{ '' }} <b-button variant="success">Success</b-button>{{ '' }} <b-button variant="danger">Danger</b-button>{{ '' }} <b-button variant="warning">Warning</b-button>{{ '' }} <b-button variant="info">Info</b-button>{{ '' }} <b-button variant="light">Light</b-button>{{ '' }} <b-button variant="dark mt-2 text-white">Dark</b-button>{{ '' }} <b-button variant="link mt-2">Link</b-button> <b-button variant="gray mt-2">Gray</b-button></div>
  <div class="bd-example"><b-button variant="outline-primary">Primary</b-button>{{ '' }} <b-button variant="outline-secondary">Secondary</b-button>{{ '' }} <b-button variant="outline-success">Success</b-button>{{ '' }} <b-button variant="outline-danger">Danger</b-button>{{ '' }} <b-button variant="outline-warning">Warning</b-button>{{ '' }} <b-button variant="outline-info">Info</b-button>{{ '' }} <b-button variant="outline-light">Light</b-button>{{ '' }} <b-button variant="outline-dark iq-color mt-2">Dark</b-button>{{ '' }} <b-button variant="outline-gray mt-2">Gray</b-button></div>
  <div class="bd-example"><b-button variant="primary btn-sm">Small button</b-button>{{ ' ' }} <b-button variant="primary">Default button</b-button>{{ ' ' }} <b-button variant="primary btn-lg">Large button</b-button>{{ ' ' }}</div>
  <div class="bd-example">
    <b-button variant="primary-subtle">Primary</b-button>
    {{ '' }}
    <b-button variant="secondary-subtle">Secondary</b-button>
    {{ '' }}
    <b-button variant="success-subtle">Success</b-button>
    {{ '' }}
    <b-button variant="danger-subtle">Danger</b-button>
    {{ '' }}
    <b-button variant="warning-subtle">Warning</b-button>
    {{ '' }}
    <b-button variant="info-subtle">Info</b-button>
    {{ '' }}
    <b-button variant="light-subtle">Light</b-button>
    {{ '' }}
    <b-button variant="dark-subtle mt-2 text-white">Dark</b-button>{{ ' ' }}
    <b-button variant="gray-subtle mt-2">Gray</b-button>
  </div>
</template>
