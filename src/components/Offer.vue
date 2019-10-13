<template>
  <div
    class="offer-list__item"
    :class="{ selected: offer.isSelected, selectable: offer.isSelectable }"
    @click="selectField"
  >
    <span class="checkbox-block">
      <span class="checkbox-block__icon">
        <svg
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 600"
          version="1.0"
        >
          <path
            d="M 25.257828,388.61333 L 150.45625,554.27704 C 187.80366,592.27704 230.15106,592.27704 244.49846,554.27704 C 304.95799,413.59515 467.18948,152.15947 574.3879,75.207333 C 603.02112,44.393193 556.09708,2.2137629 520.0424,22.567643 C 442.55598,59.297633 219.55415,375.7357 190.73563,465.21994 L 95.906641,334.51412 C 61.357035,284.54719 -7.1925678,340.58026 25.257828,388.61333 z "
            style="fill:#f24841;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          ></path>
        </svg>
      </span>
      <span class="checkbox-block__text">
        <span class="dotted-link" v-if="offer.isSelectable">
          {{ offer.isSelected ? "Снять выбор" : "Выбрать" }}
        </span>
      </span>
    </span>
    <div class="offer-list__title">
      <div class="offer-list__item-title">{{ offer.title }}</div>
      <div class="offer-list__item-description" v-if="offer.description !== ''">
        {{ offer.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Offer",
  props: ["offer", "section"],
  methods: {
    selectField: function() {
      if (this.offer.isSelectable) {
        if (this.offer.isSelected) {
          this.$store.dispatch("removeItem", {
            item: this.offer.id,
            section: this.section
          });
        } else {
          this.$store.dispatch("addItem", {
            item: this.offer.id,
            section: this.section
          });
        }
      }
    }
  }
};
</script>
