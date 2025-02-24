<template>
  <b-card class="iq-document-card" no-body :class="cardClass">
    <div class="d-flex justify-content-end">
      <ul class="nav nav-tabs nav-tunnel p-1">
        <li class="nav-item" role="presentation">
          <tab-button :target="`#${targetpreview}`" class="nav-link d-flex align-items-center" :id="targetpreview" :active="true">
            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"></path>
              <circle cx="12" cy="12" r="3.5" stroke="currentColor"></circle>
              <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"></circle>
            </svg>
            Preview
          </tab-button>
        </li>
        <li class="nav-item" role="presentation">
          <tab-button class="nav-link d-flex align-items-center" :id="targetcode" :target="`#${targetcode}`">
            <svg width="20" class="me-1 icon-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"></path>
              <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"></path>
              <mask fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"></path>
              </mask>
              <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"></path>
              <mask fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"></path>
              </mask>
              <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"></path>
            </svg>
            Code
          </tab-button>
        </li>
      </ul>
    </div>
    <div class="tab-content w-100" id="v-pills-tabContent" :class="className">
      <tab-pane :id="targetpreview" :tab-for="`#${targetpreview}`" class="bd-heading-1">
        <component :is="previewComponent" />
        <!-- <formSizing-preview /> -->
      </tab-pane>
      <tab-pane :id="targetcode" :tab-for="`#${targetcode}`" class="bd-heading-1">
        <component :is="codeComponent" />
        <!-- <formSizing-code /> -->
      </tab-pane>
    </div>
  </b-card>
</template>
<script>
import AccordionCode from '../sections/accordion/AccordionCode.vue'
import AccordionPreview from '../sections/accordion/AccordionPreview'
import FormSizingPreview from '../sections/formsizing/FormSizingPreview.vue'
import FormSizingCode from '../sections/formsizing/FormSizingCode.vue'
import AlertsPreview from '../sections/alert/AlertsPreview.vue'
import AlertsCode from '../sections/alert/AlertsCode.vue'
import BadgePreview from '../sections/badge/BadgePreview.vue'
import BadgeCode from '../sections/badge/BadgeCode.vue'
import BreadcrumbPreview from '../sections/breadcrumb/BreadcrumbPreview.vue'
import BreadcrumbCode from '../sections/breadcrumb/BreadcrumbCode.vue'
import ButtonPreview from '../sections/button/ButtonPreview.vue'
import ButtonCode from '../sections/button/ButtonCode.vue'
import ButtonGroupPreview from '../sections/buttongroup/ButtonGroupPreview.vue'
import ButtonGroupCode from '../sections/buttongroup/ButtonGroupCode.vue'
import CardPreview from '../sections/card/CardPreview.vue'
import CardCode from '../sections/card/CardCode.vue'
import CarouselCode from '../sections/carousel/CarouselCode.vue'
import CarouselPreview from '../sections/carousel/CarouselPreview'

import DropdownPreview from '../sections/dropdown/DropdownPreview.vue'
import DropdownCode from '../sections/dropdown/DropdownCode.vue'
import FiguresPreview from '../sections/figures/FiguresPreview.vue'
import FiguresCode from '../sections/figures/FiguresCode.vue'

// form
import FormAlertnateFloatLabelsPreview from '../sections/formalertnatefloatlabels/FormAlertnateFloatLabelsPreview.vue'
import FormAlertnateFloatLabelsCode from '../sections/formalertnatefloatlabels/FormAlertnateFloatLabelsCode.vue'
import FormAlertnateInputPreview from '../sections/formalertnateinput/FormAlertnateInputPreview.vue'
import FormAlertnateInputCode from '../sections/formalertnateinput/FormAlertnateInputCode.vue'
import FormDisabledPreview from '../sections/formdisabled/FormDisabledPreview.vue'
import FormDisabledCode from '../sections/formdisabled/FormDisabledCode.vue'
import CalendarPreview from '../sections/calendar/CalendarPreview.vue'
import CalendarCode from '../sections/calendar/CalendarCode.vue'
import FormFloatingLabelsPreview from '../sections/formfloatinglabels/FormFloatingLabelsPreview.vue'
import FormFloatingLabelsCode from '../sections/formfloatinglabels/FormFloatingLabelsCode.vue'
import FormInputGroupPreview from '../sections/forminputgroup/FormInputGroupPreview.vue'
import FormInputGroupCode from '../sections/forminputgroup/FormInputGroupCode.vue'
import FormOverviewPreview from '../sections/formoverview/FormOverviewPreview.vue'
import FormOverviewCode from '../sections/formoverview/FormOverviewCode.vue'
import FormToggleButtonPreview from '../sections/formtogglebutton/FormToggleButtonPreview.vue'
import FormToggleButtonCode from '../sections/formtogglebutton/FormToggleButtonCode.vue'
import FormValidationPreview from '../sections/formvalidation/FormValidationPreview.vue'
import FormValidationCode from '../sections/formvalidation/FormValidationCode.vue'

import ImagesPreview from '../sections/images/ImagesPreview.vue'
import ImagesCode from '../sections/images/ImagesCode.vue'
import ListGroupPreview from '../sections/listgroup/ListGroupPreview.vue'
import ListGroupCode from '../sections/listgroup/ListGroupCode.vue'
import ModalCode from '../sections/modal/ModalCode.vue'
import ModalPreview from '../sections/modal/ModalPreview.vue'
import NavbarPreview from '../sections/navbar/NavbarPreview.vue'
import NavbarCode from '../sections/navbar/NavbarCode.vue'
import NavsPreview from '../sections/navs/NavsPreview.vue'
import NavsCode from '../sections/navs/NavsCode.vue'
import OffCanvasCode from '../sections/offcanvas/OffCanvasCode.vue'
import OffCanvasPreview from '../sections/offcanvas/OffCanvasPreview'
import PaginationPreview from '../sections/pagination/PaginationPreview.vue'
import PaginationCode from '../sections/pagination/PaginationCode.vue'
import PopoversPreview from '../sections/popovers/PopoversPreview.vue'
import PopoversCode from '../sections/popovers/PopoversCode.vue'
import ProgressPreview from '../sections/progress/ProgressPreview.vue'
import ProgressCode from '../sections/progress/ProgressCode.vue'
import ScrollspyPreview from '../sections/scrollspy/ScrollspyPreview.vue'
import ScrollspyCode from '../sections/scrollspy/ScrollspyCode.vue'
import SpinnersPreview from '../sections/spinners/SpinnersPreview.vue'
import SpinnersCode from '../sections/spinners/SpinnersCode.vue'
import TablesPreview from '../sections/tables/TablesPreview.vue'
import TablesCode from '../sections/tables/TablesCode.vue'
import ToastsPreview from '../sections/toasts/ToastsPreview.vue'
import ToastsCode from '../sections/toasts/ToastsCode.vue'
import TooltipsCode from '../sections/tooltips/TooltipsCode.vue'
import TooltipsPreview from '../sections/tooltips/TooltipsPreview'
import TypographyPreview from '../sections/typography/TypographyPreview.vue'
import TypographyCode from '../sections/typography/TypographyCode.vue'

export default {
  components: {
    AccordionCode,
    AccordionPreview,
    AlertsPreview,
    AlertsCode,
    BadgePreview,
    BadgeCode,
    ButtonPreview,
    ButtonCode,
    BreadcrumbCode,
    BreadcrumbPreview,
    ButtonGroupPreview,
    ButtonGroupCode,
    FormSizingPreview,
    FormSizingCode,
    CardPreview,
    CardCode,
    CarouselCode,
    CarouselPreview,
    DropdownPreview,
    DropdownCode,
    FiguresPreview,
    FiguresCode,
    FormAlertnateFloatLabelsPreview,
    FormAlertnateFloatLabelsCode,
    FormAlertnateInputPreview,
    FormAlertnateInputCode,
    FormDisabledPreview,
    FormDisabledCode,
    CalendarPreview,
    CalendarCode,
    FormFloatingLabelsPreview,
    FormFloatingLabelsCode,
    FormInputGroupPreview,
    FormInputGroupCode,
    FormOverviewPreview,
    FormOverviewCode,
    FormToggleButtonPreview,
    FormToggleButtonCode,
    FormValidationPreview,
    FormValidationCode,
    ImagesPreview,
    ImagesCode,
    ListGroupPreview,
    ListGroupCode,
    ModalCode,
    ModalPreview,
    NavbarPreview,
    NavbarCode,
    NavsPreview,
    NavsCode,
    OffCanvasCode,
    OffCanvasPreview,
    PaginationPreview,
    PaginationCode,
    PopoversPreview,
    PopoversCode,
    ProgressPreview,
    ProgressCode,
    ScrollspyPreview,
    ScrollspyCode,
    SpinnersPreview,
    SpinnersCode,
    TablesPreview,
    TablesCode,
    ToastsPreview,
    ToastsCode,
    TooltipsCode,
    TooltipsPreview,
    TypographyPreview,
    TypographyCode
  },
  props: {
    targetpreview: { type: String, required: true },
    targetcode: { type: String, required: true },

    previewComponent: {
      type: String,
      required: true
    },
    codeComponent: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    cardClass: {
      type: String,
      default: ''
    }
  }
}
</script>
