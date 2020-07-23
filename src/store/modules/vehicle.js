import VehicleService from "@/services/VehicleService.js";

const getDefaultState = () => {
    return {
        vehicles: [],
        vehicle: []
    };
};

const state = getDefaultState();

const mutations = {
    RESET_STATE(state) {
        Object.assign(state, getDefaultState());
    },

    ADD_VEHICLE(state, vehicle) {
        state.vehicles.push(vehicle);
    },

    SET_VEHICLE(state, value) {
        state.vehicle = value;
    },

    SET_VEHICLES(state, value) {
        state.vehicles = value;
    }
};

const actions = {
    fetch({ commit }) {
        VehicleService.fetch().then(response => {
            commit("SET_VEHICLES", response.data.data);
        });
    },

    async getById({ commit, dispatch }, vehicleId) {
        await VehicleService.getById(vehicleId)
            .then(response => {
                commit("SET_VEHICLE", response.data.data);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: "There was a problem fetching vehicle: " + error.message
                };
                dispatch("notification/add", notification, { root: true });
            });
    },

    forceGetById({ commit, dispatch }, vehicleId) {
        VehicleService.getById(vehicleId)
            .then(response => {
                commit("SET_VEHICLE", response.data.data);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: "There was a problem fetching vehicle: " + error.message
                };
                dispatch("notification/add", notification, { root: true });
            });
    },

    post({ commit }, vehicle) {
        return VehicleService.post(vehicle).then(response => {
            commit("ADD_VEHICLE", response.data);
        });
    },

    put({ dispatch }, vehicle) {
        return new Promise((resolve, reject) => {
            VehicleService.put(vehicle)
                .then(response => {
                    const notification = {
                        type: "success",
                        message: "Vehicle successfully updated."
                    };
                    dispatch("notification/add", notification, { root: true });
                    dispatch("vehicle/forceGetById", vehicle._id, { root: true });
                    resolve(response.data); // return response data to calling function
                })
                .catch(error => {
                    reject(error); // return error to calling function
                    const notification = {
                        type: "error",
                        message: "An error occurred updating the vehicle information."
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
    getVehicles(state) {
        return Object.values(state.vehicles);
    },
    getVehicleById: state => id => {
        return state.vehicles.find(vehicle => vehicle._id === id);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};
