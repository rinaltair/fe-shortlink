<template>
  <div class="bd-example"><b-spinner variant="primary"></b-spinner>{{ '' }} <b-spinner variant="gray"></b-spinner>{{ ' ' }} <b-spinner variant="success"></b-spinner>{{ ' ' }} <b-spinner variant="danger"></b-spinner>{{ ' ' }} <b-spinner variant="warning"></b-spinner>{{ ' ' }} <b-spinner variant="info"></b-spinner>{{ ' ' }} <b-spinner variant="light"></b-spinner>{{ ' ' }} <b-spinner variant="dark"></b-spinner>{{ ' ' }}</div>
  <div class="bd-example"><b-spinner type="grow" variant="primary"></b-spinner>{{ ' ' }} <b-spinner type="grow" variant="gray"></b-spinner>{{ ' ' }} <b-spinner type="grow" variant="success"></b-spinner>{{ ' ' }} <b-spinner type="grow" variant="danger"></b-spinner>{{ ' ' }} <b-spinner type="grow" variant="warning"></b-spinner>{{ ' ' }} <b-spinner type="grow" variant="info"></b-spinner>{{ ' ' }} <b-spinner type="grow" variant="light"></b-spinner>{{ ' ' }} <b-spinner type="grow" variant="dark"></b-spinner>{{ ' ' }}</div>
  <div class="bd-example">
    <b-button variant="primary mb-1 mb-md-0" disabled>
      <b-spinner small></b-spinner>
      <span class="visually-hidden">Loading...</span> </b-button
    >{{ ' ' }}
    <b-button variant="primary mb-1 mb-md-0" disabled>
      <b-spinner small></b-spinner>
      Loading... </b-button
    >{{ ' ' }}

    <b-button variant="primary" disabled>
      <b-spinner small type="grow"></b-spinner>
      <span class="visually-hidden">Loading...</span> </b-button
    >{{ ' ' }}

    <b-button variant="primary" disabled>
      <b-spinner small type="grow"></b-spinner>
      Loading... </b-button
    >{{ ' ' }}
  </div>
</template>
