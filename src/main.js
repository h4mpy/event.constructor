import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Toasted from "vue-toasted";
import VueScrollTo from "vue-scrollto";
import StringChanger from "@/components/BaseStringChanger.vue";
import InputNumber from "@/components/BaseInputNumber.vue";

Vue.use(VueScrollTo);
Vue.use(Toasted);

Vue.config.productionTip = false;

Vue.component("StringChanger", StringChanger);
Vue.component("InputNumber", InputNumber);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
