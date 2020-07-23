import Vue from "vue";
import Vuex from "vuex";

import vehicle from "@/store/modules/vehicle.js";
import inspection from "@/store/modules/inspection.js";
import maintenance from "@/store/modules/maintenance.js";
import mileage from "@/store/modules/mileage.js";
import contract from "@/store/modules/contract.js";
import vendor from "@/store/modules/vendor.js";
import post from "@/store/modules/post.js";
import contractLine from "@/store/modules/ContractLine.js";
import notification from "@/store/modules/notification.js";

Vue.use(Vuex);

export default function(/* { ssrContext } */) {
    const Store = new Vuex.Store({
        modules: {
            vehicle,
            inspection,
            maintenance,
            mileage,
            contract,
            vendor,
            post,
            notification,
            contractLine
        },
        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV
    });

    return Store;
}
