import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueCountdownTimer from "vuejs-countdown-timer";

Vue.config.productionTip = false;
Vue.use(VueCountdownTimer);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
