<template>
  <div class="bd-example">
    <div class="flex-wrap btn-group w-100 align-items-center custom-rtl">
      <div class="dropdown me-2">
        <button class="btn btn-gray btn-sm dropdown-toggle d-flex gap-2 align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
        <ul class="dropdown-menu">
          <li>
            <h6 class="dropdown-header">Dropdown header</h6>
          </li>
          <li><a href="#" class="dropdown-item">Action</a></li>
          <li><a href="#" class="dropdown-item">Another action</a></li>
          <li><a href="#" class="dropdown-item">Something else here</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a href="#" class="dropdown-item">Separated link</a></li>
        </ul>
      </div>
      {{ ' ' }}
      <div class="dropdown me-2">
        <button class="btn btn-gray btn-md dropdown-toggle d-flex gap-2 align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
        <ul class="dropdown-menu">
          <li>
            <h6 class="dropdown-header">Dropdown header</h6>
          </li>
          <li><a href="#" class="dropdown-item">Action</a></li>
          <li><a href="#" class="dropdown-item">Another action</a></li>
          <li><a href="#" class="dropdown-item">Something else here</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a href="#" class="dropdown-item">Separated link</a></li>
        </ul>
      </div>
      {{ ' ' }}
      <div class="dropdown me-2">
        <button class="btn btn-gray btn-lg dropdown-toggle d-flex gap-2 align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
        <ul class="dropdown-menu">
          <li>
            <h6 class="dropdown-header">Dropdown header</h6>
          </li>
          <li><a href="#" class="dropdown-item">Action</a></li>
          <li><a href="#" class="dropdown-item">Another action</a></li>
          <li><a href="#" class="dropdown-item">Something else here</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a href="#" class="dropdown-item">Separated link</a></li>
        </ul>
      </div>
      {{ ' ' }}
    </div>
  </div>
  <div class="bd-example">
    <b-dropdown split split-variant="primary" variant="primary" text="Primary">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item> </b-dropdown
    >{{ ' ' }}
    <b-dropdown split split-variant="secondary" variant="secondary" text="Secondary">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item> </b-dropdown
    >{{ ' ' }}
    <b-dropdown split split-variant="success" variant="success" text="Success">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item> </b-dropdown
    >{{ ' ' }}
    <b-dropdown split split-variant="info" variant="info" text="Info">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item> </b-dropdown
    >{{ ' ' }}
    <b-dropdown split split-variant="warning" variant="warning" text="Warning">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item> </b-dropdown
    >{{ ' ' }}
    <b-dropdown split split-variant="danger" variant="danger" text="Danger">
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item> </b-dropdown
    >{{ ' ' }}
  </div>
  <div class="bd-example">
    <div class="flex-wrap btn-group w-100 align-items-center custom-rtl">
      <div class="dropend">
        <button class="btn btn-gray dropdown-toggle d-flex gap-2 align-items-center me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropend button</button>
        <ul class="dropdown-menu">
          <li>
            <h6 class="dropdown-header">Dropdown header</h6>
          </li>
          <li><a href="#" class="dropdown-item">Action</a></li>
          <li><a href="#" class="dropdown-item">Another action</a></li>
          <li><a href="#" class="dropdown-item">Something else here</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a href="#" class="dropdown-item">Separated link</a></li>
        </ul>
      </div>
      {{ ' ' }}
      <div class="dropup">
        <button class="btn btn-gray dropdown-toggle d-flex gap-2 align-items-center me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropup button</button>
        <ul class="dropdown-menu">
          <li>
            <h6 class="dropdown-header">Dropdown header</h6>
          </li>
          <li><a href="#" class="dropdown-item">Action</a></li>
          <li><a href="#" class="dropdown-item">Another action</a></li>
          <li><a href="#" class="dropdown-item">Something else here</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a href="#" class="dropdown-item">Separated link</a></li>
        </ul>
      </div>
      {{ ' ' }}
      <div class="dropstart">
        <button class="btn btn-gray dropdown-toggle d-flex gap-2 align-items-center me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropstart button</button>
        <ul class="dropdown-menu">
          <li>
            <h6 class="dropdown-header">Dropdown header</h6>
          </li>
          <li><a href="#" class="dropdown-item">Action</a></li>
          <li><a href="#" class="dropdown-item">Another action</a></li>
          <li><a href="#" class="dropdown-item">Something else here</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a href="#" class="dropdown-item">Separated link</a></li>
        </ul>
      </div>
      {{ ' ' }}
      <div class="dropdown">
        <button class="btn btn-gray dropdown-toggle d-flex gap-2 align-items-center me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">End-aligned menu</button>
        <ul class="dropdown-menu">
          <li>
            <h6 class="dropdown-header">Dropdown header</h6>
          </li>
          <li><a href="#" class="dropdown-item">Action</a></li>
          <li><a href="#" class="dropdown-item">Another action</a></li>
          <li><a href="#" class="dropdown-item">Something else here</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a href="#" class="dropdown-item">Separated link</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
