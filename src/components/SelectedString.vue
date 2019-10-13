<template>
  <div>
    <b>{{ offer.title }}</b
    >: {{ selectedItems }}
  </div>
</template>

<script>
export default {
  name: "SelectedString",
  props: ["offer"],
  computed: {
    selectedItems() {
      let items = [];
      const offers = this.offer.items;
      for (var key in offers) {
        if (offers.hasOwnProperty(key)) {
          let str = offers[key].title;
          if (offers[key].description) {
            str += " (" + offers[key].description + ")";
          }
          items.push(str);
        }
      }
      return items.join(", ");
    }
  }
};
</script>
