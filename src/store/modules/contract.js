import ContractService from "@/services/ContractService.js";

const getDefaultState = () => {
    return {
        contracts: [],
        contract: []
    };
};

const state = getDefaultState();

const mutations = {
    RESET_STATE(state) {
        Object.assign(state, getDefaultState());
    },

    ADD_CONTRACT(state, contract) {
        state.contracts.push(contract);
    },

    SET_CONTRACT(state, value) {
        state.contract = value;
    },

    SET_CONTRACTS(state, value) {
        state.contracts = value;
    }
};

const actions = {
    fetch({ commit, dispatch }) {
        ContractService.fetch()
            .then(response => {
                commit("SET_CONTRACTS", response.data.data);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: "There was a problem fetching contracts: " + error.message
                };
                dispatch("notification/add", notification, { root: true });
            });
    },

    getById({ commit, dispatch }, contractId) {
        ContractService.getById(contractId)
            .then(response => {
                commit("SET_CONTRACT", response.data.data);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: "There was a problem fetching CONTRACT: " + error.message
                };
                dispatch("notification/add", notification, { root: true });
            });
    },

    post({ commit, dispatch }, contract) {
        return new Promise((resolve, reject) => {
            ContractService.post(contract)
                .then(response => {
                    commit("ADD_CONTRACT", response.data.data);
                    commit("SET_CONTRACT", response.data.data);
                    resolve(response.data); // return response data to calling function
                })
                .catch(error => {
                    reject(error); // return error to calling function
                    const notification = {
                        type: "error",
                        message: "An error occurred saving the contract information."
                    };
                    dispatch("notification/add", notification, { root: true });
                });
        });
    },

    put({ commit, dispatch }, contract) {
        return new Promise((resolve, reject) => {
            ContractService.put(contract)
                .then(response => {
                    const notification = {
                        type: "success",
                        message: "Contract successfully updated."
                    };
                    dispatch("notification/add", notification, { root: true });
                    commit("SET_CONTRACT", response.data.data);
                    resolve(response.data); // return response data to calling function
                })
                .catch(error => {
                    reject(error); // return error to calling function
                    const notification = {
                        type: "error",
                        message: "An error occurred updating the contract information."
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
    getContracts(state) {
        return Object.values(state.contracts);
    },
    getContract(state) {
        return Object.values(state.contract);
    },
    getContractById: state => id => {
        return state.contracts.find(contract => contract._id === id);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};
