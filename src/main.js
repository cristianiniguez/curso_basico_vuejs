import Vue from "vue";
import router from "@/router";
import Chart from "chart.js";
import Chartkick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";

import App from "./App.vue";

import { dollarFilter, percentFilter, assetImageFilter } from "@/filters";
import "@/assets/css/tailwind.css";

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.filter("assetImage", assetImageFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
