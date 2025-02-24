<template>
  <div class="bd-example">
    <b-button variant="danger" id="popover-target-1">Click to toggle popover</b-button>
    <b-popover target="popover-target-1" triggers="click" placement="top">
      <template #title>Popover Title</template>
      I am popover <b>component</b> content!
    </b-popover>
  </div>

  <div class="bd-example">
    <b-button id="popover-target-2" variant="gray">Popover on top</b-button>
    <b-popover target="popover-target-2" triggers="click" placement="top"> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </b-popover>
    {{ ' ' }}
    <b-button id="popover-target-3" variant="gray">Popover on end</b-button>
    <b-popover target="popover-target-3" triggers="click" placement="right"> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </b-popover>
    {{ ' ' }}
    <b-button id="popover-target-4" variant="gray">Popover on bottom</b-button>
    <b-popover target="popover-target-4" triggers="click" placement="bottom"> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </b-popover>
    {{ ' ' }}
    <b-button id="popover-target-5" variant="gray">Popover on start</b-button>
    <b-popover target="popover-target-5" triggers="click" placement="left"> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </b-popover>
  </div>
</template>
