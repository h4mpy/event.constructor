<template>
  <div>
    <a
      href="#"
      v-scroll-to="{ el: '#offerlist_' + offer.id, offset: -40 }"
      class="pseudo"
      >{{ offer.title }}</a
    >
    <span v-if="offer.multiple === true"> ({{ offer.left }} шт.)</span>
  </div>
</template>

<script>
export default {
  name: "SelectedLeft",
  props: ["offer"]
};
</script>
