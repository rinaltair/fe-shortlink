import { defineComponent, openBlock, createElementBlock, toDisplayString } from 'vue';

var script = defineComponent({
  name: "Vue3Autocounter",
  interval: null,
  props: {
    startAmount: {
      type: Number,
      default: 0
    },
    endAmount: {
      type: Number,
      default: 0,
      required: true
    },
    duration: {
      type: Number,
      default: 3,
      validator(duration) {
        return duration > 0;
      }
    },
    autoinit: {
      type: Boolean,
      default: true
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    separator: {
      type: String,
      default: ','
    },
    decimalSeparator: {
      type: String,
      default: '.'
    },
    decimals: {
      type: Number,
      default: 0,
      validator(decimals) {
        return decimals >= 0;
      }
    }
  },
  data() {
    return {
      timestamp: 0,
      startTimestamp: 0,
      currentAmount: 0,
      currentStartAmount: 0,
      currentDuration: 0,
      paused: false,
      remaining: 0,
      animationFrame: 0
    };
  },
  mounted() {
    this.currentAmount = this.startAmount;
    this.currentStartAmount = this.startAmount;
    this.currentDuration = this.duration * 1000;
    this.remaining = this.duration * 1000;
    if (this.autoinit) this.start();else this.paused = true;
    this.$emit('mounted');
  },
  unmounted() {
    this.cancelAnimation();
  },
  watch: {
    startAmount() {
      this.reset();
    },
    endAmount() {
      this.reset();
    },
    duration() {
      this.reset();
    }
  },
  computed: {
    isCountingUp() {
      return this.endAmount > this.startAmount;
    },
    displayedAmount() {
      return `${this.prefix}${this.formatedAmount}${this.suffix}`;
    },
    formatedAmount() {
      const regex = /(\d+)(\d{3})/;
      let numberString = this.currentAmount.toFixed(this.decimals);
      numberString += '';
      let numberArray = numberString.split('.');
      let numbers = numberArray[0];
      let decimals = numberArray.length > 1 ? this.decimalSeparator + numberArray[1] : '';
      let isNumber = !isNaN(parseFloat(this.separator));
      if (this.separator && !isNumber) {
        while (regex.test(numbers)) numbers = numbers.replace(regex, '$1' + this.separator + '$2');
      }
      return numbers + decimals;
    }
  },
  methods: {
    start() {
      this.cancelAnimation();
      this.currentStartAmount = this.startAmount;
      this.startTimestamp = null;
      this.currentDuration = this.duration * 1000;
      this.paused = false;
      this.animationFrame = window.requestAnimationFrame(this.counting);
    },
    pause() {
      if (this.paused) return;
      this.cancelAnimation();
      this.paused = true;
    },
    resume() {
      if (!this.paused) return;
      this.startTimestamp = null;
      this.currentDuration = +this.remaining;
      this.currentStartAmount = +this.currentAmount;
      this.animationFrame = window.requestAnimationFrame(this.counting);
      this.paused = false;
    },
    reset() {
      this.paused = false;
      this.startTimestamp = null;
      this.cancelAnimation();
      this.currentAmount = this.startAmount;
      if (this.autoinit) this.start();else this.paused = true;
    },
    counting(timestamp) {
      this.timestamp = timestamp;
      if (!this.startTimestamp) this.startTimestamp = timestamp;
      let progress = timestamp - this.startTimestamp;
      this.remaining = this.currentDuration - progress;
      if (!this.isCountingUp) {
        this.currentAmount = this.currentStartAmount - (this.currentStartAmount - this.endAmount) * (progress / this.currentDuration);
        this.currentAmount = this.currentAmount < this.endAmount ? this.endAmount : this.currentAmount;
      } else {
        this.currentAmount = this.currentStartAmount + (this.endAmount - this.currentStartAmount) * (progress / this.currentDuration);
        this.currentAmount = this.currentAmount > this.endAmount ? this.endAmount : this.currentAmount;
      }
      if (progress < this.currentDuration) this.animationFrame = window.requestAnimationFrame(this.counting);else this.$emit('finished');
    },
    cancelAnimation() {
      if (this.animationFrame) window.cancelAnimationFrame(this.animationFrame);
    }
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", null, toDisplayString(_ctx.displayedAmount), 1);
}

script.render = render;

// Import vue component

// Define typescript interfaces for installable component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var entry_esm = /*#__PURE__*/(() => {
  // Assign InstallableComponent type
  const installable = script;

  // Attach install function executed by Vue.use()
  installable.install = app => {
    app.component('Vue3Autocounter', installable);
  };
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export { entry_esm as default };
