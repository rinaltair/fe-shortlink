<template>
  <b-row>
    <b-col lg="6" sm="12">
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Basic Form</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
          <b-form>
            <b-form-group>
              <label for="input-01" class="form-label">Email address:</label>
              <b-form-input id="input-01"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-02" class="form-label">Password:</label>
              <b-form-input id="input-02" type="password"></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox>Remember me</b-form-checkbox>
            </b-form-group>
            <div class="d-flex gap-1 flex-wrap">
              <b-button variant="primary">Submit</b-button>
              <b-button variant="danger">Cancel</b-button>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Form Grid</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
          <b-form>
            <b-row>
              <b-col>
                <b-form-input placeholder="First Name"></b-form-input>
              </b-col>
              <b-col>
                <b-form-input type="text" placeholder="Last Name"></b-form-input>
              </b-col>
            </b-row>
          </b-form>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <b-card-title>Input</b-card-title>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
          <b-form>
            <b-form-group>
              <label for="input-101" class="form-label">Input Text</label>
              <b-form-input id="input-101" type="text" placeholder="Mark Jhon"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-102" class="form-label">Email Input</label>
              <b-form-input id="input-102" type="email" placeholder="markjhon@gmail.com"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-103" class="form-label">Url Input </label>
              <b-form-input id="input-103" type="url" placeholder="https://getbootstrap.com"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-104" class="form-label">Telephone Input </label>
              <b-form-input id="input-104" type="tel" placeholder="1-(555)-555-5555"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-105" class="form-label">Number Input </label>
              <b-form-input id="input-105" type="number" placeholder="2356"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-106" class="form-label">Password Input </label>
              <b-form-input id="input-106" type="password" :value="'markjhon123'">markjhon123</b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-107" class="form-label">Date Input </label>
              <b-form-input id="input-107" type="date" placeholder="2019-12-18"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label class="form-label" for="exampleInputmonth">Month Input</label>
              <input type="month" class="form-control" id="exampleInputmonth" value="2019-12" />
            </b-form-group>
            <b-form-group class="form-group">
              <label class="form-label" for="exampleInputweek">Week Input</label>
              <input type="week" class="form-control" id="exampleInputweek" value="2019-W46" />
            </b-form-group>
            <b-form-group>
              <label for="input-109" class="form-label">Time Input </label>
              <input id="input-109" class="form-control" type="time" value="13:45" />
            </b-form-group>
            <b-form-group>
              <label for="input-110" class="form-label">Date and Time Input </label>
              <input id="input-110" type="datetime-local" class="form-control" value="2019-12-19T13:45:00" />
            </b-form-group>
            <b-form-group>
              <label for="input-111" class="form-label">Example textarea </label>
              <textarea id="input-111" placeholder="Enter something..." rows="3" max-rows="6" class="form-control"></textarea>
            </b-form-group>
            <div class="d-flex gap-2 flex-wrap">
              <b-button variant="primary">Submit</b-button>
              <b-button variant="danger">Cancel</b-button>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Input Size</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
          <b-form>
            <b-form-group>
              <label for="input-201" class="form-label">Small</label>
              <b-form-input id="input-201" size="sm" placeholder="form-control-sm"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-202" class="form-label">Default</label>
              <b-form-input id="input-202" placeholder="form-control"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="input-203" class="form-label">Large</label>
              <b-form-input id="input-203" size="lg" placeholder="form-control=lg"></b-form-input>
            </b-form-group>
          </b-form>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Select Size</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
          <b-form>
            <b-form-group>
              <label for="input-204" class="form-label">Small</label>
              <b-form-select :options="options01" size="sm" id="input-204"></b-form-select>
            </b-form-group>
            <b-form-group>
              <label for="input-205" class="form-label">Default</label>
              <b-form-select :options="options01" id="input-205" placeholder="Open this Select Menu"></b-form-select>
            </b-form-group>
            <b-form-group>
              <label for="input-206" class="form-label">Large</label>
              <b-form-select :options="options01" size="lg" id="input-206"></b-form-select>
            </b-form-group>
          </b-form>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6" sm="12">
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Horizontal Form</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
          <b-form>
            <b-form-group>
              <b-row class="align-items-center">
                <b-col sm="3">
                  <label for="input-1101" class="form-label mb-0">Email:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input placeholder="Enter Your Email" id="input-1101"></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group>
              <b-row class="align-items-center">
                <b-col sm="3">
                  <label for="input-1102" class="form-label mb-0">Password:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input type="password" placeholder="Enter Your Password" id="input-1102"></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox>Remember me</b-form-checkbox>
            </b-form-group>
            <div class="d-flex gap-1 flex-wrap form-group">
              <b-button variant="primary">Submit</b-button>
              <b-button variant="danger">Cancel</b-button>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Form Row</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
          <b-form>
            <b-row>
              <b-col>
                <b-form-input placeholder="First Name"></b-form-input>
              </b-col>
              <b-col>
                <b-form-input placeholder="Last Name"></b-form-input>
              </b-col>
            </b-row>
          </b-form>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Input</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
          <b-form>
            <b-form-group>
              <label class="form-label">Disabled Input</label>
              <b-form-input disabled placeholder="Mark Jhon"></b-form-input>
            </b-form-group>
          </b-form>
          <b-card-body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
            <b-form>
              <b-form-group>
                <b-row class="align-items-center">
                  <b-col sm="3">
                    <label for="input-2201" class="form-label mb-0">Email:</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-input placeholder="Enter Your Email" id="input-2201"></b-form-input>
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group>
                <b-row class="align-items-center">
                  <b-col sm="3">
                    <label for="input-2202" class="form-label mb-0">Password:</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-input type="password" placeholder="Enter Your Password" id="input-2202"></b-form-input>
                  </b-col>
                </b-row>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox>Remember me</b-form-checkbox>
              </b-form-group>
              <div class="d-flex gap-1 flex-wrap">
                <b-button variant="primary">Submit</b-button>
                <b-button variant="danger">Cancel</b-button>
              </div>
            </b-form>
          </b-card-body>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header header-class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Form Row</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <b-form>
            <b-form-group>
              <label for="input-1301" class="form-label">Readonly</label>
              <b-form-input readonly id="input-1301" disabled placeholder="Mark Jhon"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <label class="form-label" for="exampleInputcolor">Input Color </label>
              <input type="color" class="form-control" id="exampleInputcolor" value="#50b5ff" />
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-1303" class="form-label">Select input</label>
              <b-form-select v-model="select" :options="ageOptions" id="input-1303"></b-form-select>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-1304" class="form-label">Select Input New</label>
              <b-form-select v-model="select" :options="options03" id="input-1304"></b-form-select>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-1305" class="form-label">Default</label>
              <b-form-select :options="options01" id="input-1305" :select-size="4"></b-form-select>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="input-1306" class="form-label">Example multiple select</label>
              <b-form-select :options="options02" id="input-1306" multiple :select-size="4"></b-form-select>
            </b-form-group>
            <b-form-group class="mt-3">
              <label for="range-2" class="form-label">Range Input</label>
              <b-form-input id="range-2" v-model="value" type="range" min="0" max="5" step="0.5"></b-form-input>
            </b-form-group>
            <b-form-group class="mt-3">
              <b-form-checkbox>Default checkbox</b-form-checkbox>
              <b-form-checkbox value="true" v-model="checked">Checked checkbox</b-form-checkbox>
              <b-form-checkbox value="true" disabled>Disabled checkbox</b-form-checkbox>
              <b-form-checkbox disabled value="true" v-model="checked">Disabled checked checkbox</b-form-checkbox>
            </b-form-group>
            <b-form-group class="mt-3">
              <b-form-radio>Default radio</b-form-radio>
              <b-form-radio value="true" v-model="checked">Default checked radio</b-form-radio>
              <b-form-radio disabled>Disabled radio</b-form-radio>
              <b-form-radio disabled value="true" v-model="checked">Disabled checked radio</b-form-radio>
              <b-form-radio disabled value="true" v-model="checked">Selected and disabled radio</b-form-radio>
            </b-form-group>
            <b-form-group class="mt-3">
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadio6" name="customRadio1" class="custom-control-input" />&nbsp;
                <label class="custom-control-label" for="customRadio6"> Default radio</label>
              </div>
              <b-form-checkbox>Default checkbox</b-form-checkbox>
              <b-form-checkbox value="true" v-model="checked">Checked checkbox</b-form-checkbox>
              <b-form-checkbox disabled>Disabled checkbox</b-form-checkbox>
              <b-form-checkbox disabled value="true" v-model="checked">Disabled checked checkbox</b-form-checkbox>
            </b-form-group>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadio8" name="customRadio6" class="custom-control-input" checked="" />&nbsp;
              <label class="custom-control-label" for="customRadio8"> Selected radio</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadio9" name="customRadio7" class="custom-control-input" disabled="" />&nbsp;
              <label class="custom-control-label" for="customRadio9"> disabled radio</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadio10" name="customRadio8" class="custom-control-input" disabled="" checked="" />&nbsp;
              <label class="custom-control-label" for="customRadio10"> Selected and disabled radio</label>
            </div>
            <div class="form-group">
              <div class="form-check form-switch mt-3">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
              </div>
              <div class="form-group">
                <label for="customFile1" class="form-label custom-file-input">Choose file</label>
                <input class="form-control" type="file" id="customFile1" />
              </div>
            </div>
            <div class="form-group">
              <label for="customFile" class="form-label custom-file-input">Example file input</label>
              <input class="form-control" type="file" id="customFile" />
            </div>
            <div class="form-group">
              <label for="customFile2" class="form-label custom-file-input">Choose file</label>
              <input class="form-control" type="file" id="customFile2" />
            </div>

            <div class="d-flex flex-wrap">
              <b-button variant="primary" class="me-1">Submit</b-button>
              <b-button variant="danger">Cancel</b-button>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(true)

const ageOptions = [
  { value: null, text: 'Please select your age' },
  { value: 'child', text: '0-18' },
  { value: 'Young', text: '19-30' },
  { value: 'adult', text: '31-49' },
  { value: 'senior-citizen', text: '50-99' }
]

const options01 = [
  { value: null, text: 'Open this select menu' },
  { value: 'Choice 1', text: 'Choice 1' },
  { value: 'Choice 2', text: 'Choice 2' },
  { value: 'Choice 3', text: 'Choice 3' },
  { value: 'Choice 4', text: 'Choice 4' }
]

const options03 = [
  { value: null, text: 'This is a placeholder' },
  { value: 'Choice 1', text: 'Choice 1' },
  { value: 'Choice 2', text: 'Choice 2' },
  { value: 'Choice 3', text: 'Choice 3' }
]

const options02 = [
  { value: 'select-1', text: 'select-1' },
  { value: 'select-2', text: 'select-2' },
  { value: 'select-3', text: 'select-3' },
  { value: 'select-4', text: 'select-4' },
  { value: 'select-5', text: 'select-5' },
  { value: 'select-6', text: 'select-6' },
  { value: 'select-7', text: 'select-7' },
  { value: 'select-8', text: 'select-8' }
]
</script>
