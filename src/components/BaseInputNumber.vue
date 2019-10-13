<template>
  <div class="offer-value offer-value_big flex">
    <div
      class="offer-value-button minus"
      :class="{ disabled: isMin || loading }"
      @click="decreaseNumber"
    ></div>
    <input
      type="number"
      :disabled="loading"
      class="offer-value-input"
      @keypress="validateInput"
      @input="inputValue"
      :value="numericValue"
      :min="min"
      :max="max"
    />
    <div
      class="offer-value-button plus"
      :class="{ disabled: isMax || loading }"
      @click="increaseNumber"
    ></div>
  </div>
</template>

<script>
export default {
  name: "InputNumber",
  data() {
    return {
      numericValue: this.value
    };
  },
  computed: {
    isMin: function() {
      return this.numericValue <= this.min;
    },
    isMax: function() {
      return this.numericValue >= this.max;
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: 100,
      type: Number
    },
    loading: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    increaseNumber() {
      if (!this.isMax && !this.loading) this.numericValue += 1;
    },
    decreaseNumber() {
      if (!this.isMin && !this.loading) this.numericValue -= 1;
    },
    isInteger(evt) {
      evt = evt ? evt : window.event;
      let key = evt.keyCode || evt.which;
      key = String.fromCharCode(key);
      const regex = /[0-9]/;
      if (!regex.test(key)) {
        evt.returnValue = false;
        if (evt.preventDefault) evt.preventDefault();
      }
    },
    validateInput(evt) {
      this.isInteger(evt);
    },
    inputValue(evt) {
      if (!this.loading) {
        this.numericValue = evt.target.value
          ? parseInt(evt.target.value)
          : this.min;
      }
    }
  },
  watch: {
    numericValue: function(val) {
      let endVal = val;
      if (val <= this.min) {
        endVal = parseInt(this.min);
      }
      if (val >= this.max) {
        endVal = parseInt(this.max);
        this.numericValue = parseInt(this.max);
      }
      this.$store.dispatch("changeCount", endVal);
    }
  }
};
</script>
