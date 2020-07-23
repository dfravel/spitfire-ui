import Vue from "vue";

import "./plugins/fontawesome";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import JwPagination from "jw-vue-pagination";
import VueStringFilter from "vue-string-filter";
import Vuelidate from "vuelidate";
import "@/assets/styles/spitfire.scss";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyAMrZ2jjEpR0bWG5QoJvn0-713OhXQiYY0",
        libraries: "places"
    }
});

// this is for front end logging
import VueLogger from "vuejs-logger";
const isProduction = process.env.NODE_ENV === "production";

const options = {
    isEnabled: true,
    logLevel: isProduction ? "error" : "debug",
    stringifyArguments: true,
    showLogLevel: true,
    showMethodName: false,
    separator: "-",
    showConsoleColors: true
};

Vue.use(VueLogger, options);
// end front end logging

Vue.component("jw-pagination", JwPagination);
Vue.use(require("vue-moment"));
Vue.use(Vuelidate);
Vue.use(VueStringFilter);
Vue.config.productionTip = false;

// TODO: move this to its own file
Vue.filter("toCurrency", function(value) {
    if (typeof value !== "number") {
        return value;
    }
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
    });
    return formatter.format(value);
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
