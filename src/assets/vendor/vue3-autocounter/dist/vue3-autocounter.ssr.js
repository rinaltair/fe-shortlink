'use strict';var vue=require('vue');function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}var script = vue.defineComponent({
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
      validator: function validator(duration) {
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
      validator: function validator(decimals) {
        return decimals >= 0;
      }
    }
  },
  data: function data() {
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
  mounted: function mounted() {
    this.currentAmount = this.startAmount;
    this.currentStartAmount = this.startAmount;
    this.currentDuration = this.duration * 1000;
    this.remaining = this.duration * 1000;
    if (this.autoinit) this.start();else this.paused = true;
    this.$emit('mounted');
  },
  unmounted: function unmounted() {
    this.cancelAnimation();
  },
  watch: {
    startAmount: function startAmount() {
      this.reset();
    },
    endAmount: function endAmount() {
      this.reset();
    },
    duration: function duration() {
      this.reset();
    }
  },
  computed: {
    isCountingUp: function isCountingUp() {
      return this.endAmount > this.startAmount;
    },
    displayedAmount: function displayedAmount() {
      return "".concat(this.prefix).concat(this.formatedAmount).concat(this.suffix);
    },
    formatedAmount: function formatedAmount() {
      var regex = /(\d+)(\d{3})/;
      var numberString = this.currentAmount.toFixed(this.decimals);
      numberString += '';
      var numberArray = numberString.split('.');
      var numbers = numberArray[0];
      var decimals = numberArray.length > 1 ? this.decimalSeparator + numberArray[1] : '';
      var isNumber = !isNaN(parseFloat(this.separator));
      if (this.separator && !isNumber) {
        while (regex.test(numbers)) numbers = numbers.replace(regex, '$1' + this.separator + '$2');
      }
      return numbers + decimals;
    }
  },
  methods: {
    start: function start() {
      this.cancelAnimation();
      this.currentStartAmount = this.startAmount;
      this.startTimestamp = null;
      this.currentDuration = this.duration * 1000;
      this.paused = false;
      this.animationFrame = window.requestAnimationFrame(this.counting);
    },
    pause: function pause() {
      if (this.paused) return;
      this.cancelAnimation();
      this.paused = true;
    },
    resume: function resume() {
      if (!this.paused) return;
      this.startTimestamp = null;
      this.currentDuration = +this.remaining;
      this.currentStartAmount = +this.currentAmount;
      this.animationFrame = window.requestAnimationFrame(this.counting);
      this.paused = false;
    },
    reset: function reset() {
      this.paused = false;
      this.startTimestamp = null;
      this.cancelAnimation();
      this.currentAmount = this.startAmount;
      if (this.autoinit) this.start();else this.paused = true;
    },
    counting: function counting(timestamp) {
      this.timestamp = timestamp;
      if (!this.startTimestamp) this.startTimestamp = timestamp;
      var progress = timestamp - this.startTimestamp;
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
    cancelAnimation: function cancelAnimation() {
      if (this.animationFrame) window.cancelAnimationFrame(this.animationFrame);
    }
  }
});function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("span", null, vue.toDisplayString(_ctx.displayedAmount), 1);
}script.render = render;// Import vue component

// Define typescript interfaces for installable component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var component = /*#__PURE__*/(function () {
  // Assign InstallableComponent type
  var installable = script;

  // Attach install function executed by Vue.use()
  installable.install = function (app) {
    app.component('Vue3Autocounter', installable);
  };
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// Attach named exports directly to component. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)
Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    exportName = _ref2[0],
    exported = _ref2[1];
  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;