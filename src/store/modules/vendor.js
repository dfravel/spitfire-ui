import VendorService from "@/services/VendorService.js";

const getDefaultState = () => {
    return {
        vendors: [],
        vendor: []
    };
};

const state = getDefaultState();

const mutations = {
    RESET_STATE(state) {
        Object.assign(state, getDefaultState());
    },

    ADD_VENDOR(state, vendor) {
        state.vendors.push(vendor);
    },

    SET_VENDOR(state, value) {
        state.vendor = value;
    },

    SET_VENDORS(state, value) {
        state.vendors = value;
    }
};

const actions = {
    fetch({ commit, dispatch }) {
        VendorService.fetch()
            .then(response => {
                commit("SET_VENDORS", response.data.data);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: "There was a problem fetching vendors: " + error.message
                };
                dispatch("notification/add", notification, { root: true });
            });
    },

    getById({ commit, dispatch }, vendorId) {
        VendorService.getById(vendorId)
            .then(response => {
                commit("SET_VENDOR", response.data.data);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: "There was a problem fetching vendor: " + error.message
                };
                dispatch("notification/add", notification, { root: true });
            });
    },

    post({ commit, dispatch }, vendor) {
        return new Promise((resolve, reject) => {
            VendorService.post(vendor)
                .then(response => {
                    const notification = {
                        type: "success",
                        message: "Vendor successfully added to the system."
                    };
                    dispatch("notification/add", notification, { root: true });
                    commit("ADD_VENDOR", response.data.data);
                    commit("SET_VENDOR", response.data.data);
                    resolve(response.data); // return response data to calling function
                })
                .catch(error => {
                    reject(error); // return error to calling function
                    const notification = {
                        type: "error",
                        message: "An error occurred saving the vendor information."
                    };
                    dispatch("notification/add", notification, { root: true });
                });
        });
    },

    put({ commit, dispatch }, vendor) {
        return new Promise((resolve, reject) => {
            VendorService.put(vendor)
                .then(response => {
                    const notification = {
                        type: "success",
                        message: "Vendor successfully updated."
                    };
                    dispatch("notification/add", notification, { root: true });
                    commit("SET_VENDOR", response.data.data);
                    resolve(response.data); // return response data to calling function
                })
                .catch(error => {
                    reject(error); // return error to calling function
                    const notification = {
                        type: "error",
                        message: "An error occurred updating the vendor information."
                    };
                    dispatch("notification/add", notification, { root: true });
                });
        });
    },

    resetVehicleState({ commit }) {
        commit("RESET_STATE");
    }
};

const getters = {
    getVendors(state) {
        return Object.values(state.vendors);
    },
    getVendorById: state => id => {
        return state.vendors.find(vendor => vendor._id === id);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};
