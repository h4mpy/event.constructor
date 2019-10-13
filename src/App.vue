<template>
  <div class="summer">
    <div class="container offer__block offset-bottom">
      <div class="container-slim offset-top">
        <div class="offset-bottom">
          <h2 class="mt-0">О программе</h2>
          <p><b>Инструкция по сборке:</b></p>
          <ol class="list-styled">
            <li>
              Выберите свое главное развлечение в пункте 1 (Большое веселье) –
              это будет основа вашей программы.
            </li>
            <li>
              Отметьте в пункте 2 то, чем бы вам хотелось заняться после
              окончания основного действа.
            </li>
            <li>
              В пункте 3 вам предстоит из всего многообразия выбрать четыре
              аттракциона, которые вызвали ваш наибольший интерес.
            </li>
            <li>
              Вспоминаем о том, что нужно подкрепиться, а значит выбираем обед
              из двух предложенных вариантов.
            </li>
          </ol>
          <p class="mb-0">
            В финальном разделе указаны бонусы от парка, которые вы
            гарантированно получите, собрав наш Выпускной конструктор.
          </p>
        </div>
      </div>

      <OfferList
        v-for="item in offerblocks"
        :key="item.id"
        :offerlist="item"
      ></OfferList>
      <OfferTotal></OfferTotal>

      <div class="container-slim offset-top">
        <div class="offset-bottom">
          <h2 class="mt-0">Конструктор собран, что же на выходе?</h2>
          <p>
            По приезду выпускников встретит сопровождающий и отведет на перекус.
            Затем он будет сопровождать гостей по всем выбранным вами видам
            развлечений, отведет на обед, организует посещение аттракционов.
          </p>
          <p>
            Выпускная фотозона с профессиональным фотографом будет в полном
            распоряжении выпускников в течение получаса (эти полчаса так же
            организует сопровождающий). После выпускного вы получите ссылку на
            скачивание фотографий в электронном виде.
          </p>
          <p>В финале каждый выпускник поручит памятный подарок.</p>
          <p class="mb-0">
            Вся программа, начиная с встречи и до финального вручения подарков,
            длится 5 часов.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OfferList from "@/components/OfferList.vue";
import OfferTotal from "@/components/OfferTotal.vue";

export default {
  name: "app",
  components: {
    OfferList,
    OfferTotal
  },
  computed: {
    ...mapState(["offerblocks"])
  }
};
</script>

<style>
@import "./assets/css/template_styles.css";
.summer .offer-value-button.minus {
  background-image: url(./assets/minus-summer.svg);
}
.summer .offer-value-button.plus {
  background-image: url(./assets/plus-summer.svg);
}
</style>
