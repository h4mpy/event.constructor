<template>
  <span :style="styleObject">
    <span :class="{ yeseva: isPrice }"> {{ current }} </span>
    {{ isPrice ? measure : "" }}</span
  >
</template>

<script>
export default {
  name: "StringChanger",
  data() {
    return {
      current: this.newstring,
      timeout: null,
      styleObject: {
        transition: "opacity " + parseInt(this.speed) / 1000 + "s ease",
        opacity: 1
      },
      isPrice: this.measure !== ""
    };
  },
  props: {
    newstring: {
      type: String,
      default: ""
    },
    speed: {
      type: Number,
      default: 150
    },
    measure: {
      type: String,
      default: ""
    }
  },
  watch: {
    newstring(value) {
      clearTimeout(this.timeout);
      if (value === this.current) return;
      this.styleObject.opacity = 0;
      let $this = this;
      this.timeout = setTimeout(function() {
        $this.current = value;
        $this.styleObject.opacity = 1;
      }, this.speed);
    }
  }
};
</script>
