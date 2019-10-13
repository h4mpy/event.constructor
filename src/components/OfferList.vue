<template>
  <div :id="'offerlist_' + offerlist.id">
    <div class="container-slim">
      <h2 class="mt-0 rel">
        <span class="h2-num">{{ offerlist.id }}</span
        >{{ offerlist.title }}
        <span class="h2-descr" v-if="offerlist.length !== ''">{{
          offerlist.length
        }}</span>
      </h2>
    </div>
    <div class="offer__holder">
      <div class="offer-list">
        <div class="offer-list__header">
          <div class="offer-list__title offer-list__title_head">
            {{ offerlist.description }}
          </div>
        </div>
        <div class="offer-list__holder">
          <Offer
            v-for="offer in getOffers(offerlist.id)"
            :key="offer.id"
            :offer="offer"
            :section="offerlist.id"
          ></Offer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Offer from "@/components/Offer.vue";

export default {
  name: "OfferList",
  props: ["offerlist"],
  computed: {
    ...mapGetters(["offerItems"])
  },
  methods: {
    getOffers(offerlistid) {
      return this.offerItems(offerlistid);
    }
  },
  components: {
    Offer
  }
};
</script>
