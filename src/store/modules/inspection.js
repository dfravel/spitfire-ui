import InspectionService from "@/services/InspectionService.js";

const getDefaultState = () => {
    return {
        inspections: [],
        inspection: []
    };
};

const state = getDefaultState();

const mutations = {
    RESET_STATE(state) {
        Object.assign(state, getDefaultState());
    },

    ADD_INSPECTION(state, inspection) {
        state.inspections.push(inspection);
    },

    SET_INSPECTION(state, value) {
        state.inspection = value;
    },

    SET_INSPECTIONS(state, value) {
        state.inspections = value;
    }
};

const actions = {
    getById({ commit, dispatch }, [vehicleId, inspectionId]) {
        InspectionService.getById(vehicleId, inspectionId)
            .then(response => {
                commit("SET_INSPECTION", response.data.data);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: "There was a problem fetching inspection: " + error.message
                };
                dispatch("notification/add", notification, { root: true });
            });
    },

    post({ dispatch }, [inspection, vehicleId]) {
        return new Promise((resolve, reject) => {
            InspectionService.post(inspection, vehicleId)
                .then(response => {
                    const notification = {
                        type: "success",
                        message: "Inspection successfully added to the system."
                    };
                    dispatch("notification/add", notification, { root: true });
                    dispatch("vehicle/forceGetById", vehicleId, { root: true });
                    resolve(response.data); // return response data to calling function
                })
                .catch(error => {
                    reject(error); // return error to calling function
                });
        });
    }
};

const getters = {
    getInspectionById: state => id => {
        return state.inspections.find(inspection => inspection._id === id);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
