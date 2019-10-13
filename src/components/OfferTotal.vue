<template>
  <div class="offer-total">
    <div class="container-slim">
      <h2 class="mt-0 rel">Итого</h2>
      <div class="columns">
        <div class="column col-6 md-col-12">
          <div class="p" v-if="isOfferLeftToSelect">
            <p class="important">
              <b>Для оформления заявки осталось выбрать: </b>
            </p>
            <SelectedLeft
              v-for="(offer, index) in offerLeftToSelect"
              :offer="offer"
              :key="index"
            >
            </SelectedLeft>
          </div>
          <div class="p" v-if="isOffersSelected">
            <p class="important"><b>Вы выбрали: </b></p>
            <SelectedString
              v-for="(offer, index) in offerSelected"
              :offer="offer"
              :key="index"
            >
            </SelectedString>
            <b>Подарки от парка</b>
          </div>
        </div>
        <div class="column col-6 md-col-12">
          <p class="important"><b>Стоимость программы:</b></p>
          <p class="total-price">
            <StringChanger
              :newstring="singlePriceFormated"
              measure="руб./чел."
            ></StringChanger>
          </p>
          <p class="important">
            <b>Количество участников</b> (не менее {{ min }}):
          </p>

          <div class="p">
            <InputNumber :value="min" :min="min" :loading="isLoading">
            </InputNumber>
          </div>
          <p class="important"><b>Общая стоимость:</b></p>
          <p class="total-price total-price_big">
            <StringChanger
              :newstring="totalPriceFormated"
              measure="руб."
            ></StringChanger>
          </p>
          <p class="tital-price__button">
            <button
              class="button button-red button-regular button-medium"
              :class="{ disabled: isOfferLeftToSelect, loading: isLoading }"
              :disabled="isOfferLeftToSelect"
              @click="order"
            >
              Оформить заявку
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import SelectedLeft from "@/components/SelectedLeft.vue";
import SelectedString from "@/components/SelectedString.vue";

export default {
  name: "OfferTotal",
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    SelectedLeft,
    SelectedString
  },
  computed: {
    ...mapState(["min", "price", "totalcount"]),
    ...mapGetters(["offerSelected", "offerLeftToSelect"]),
    singlePriceFormated() {
      return this.formatNumber(this.price);
    },
    totalPriceFormated() {
      return this.formatNumber(this.price * this.totalcount);
    },
    isOffersSelected() {
      return this.offerSelected.length > 0;
    },
    isOfferLeftToSelect() {
      return this.offerLeftToSelect.length > 0;
    }
  },
  methods: {
    formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    order() {
      //Отправляем на сервер массив выбранных позиций
      this.isLoading = true;
      setTimeout(() => {
        alert("Имитация ответа сервера");
        this.isLoading = false;
      }, 2000);
    }
  }
};
</script>
