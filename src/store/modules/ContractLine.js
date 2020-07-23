import ContractLineService from "@/services/ContractLineService.js";

const getDefaultState = () => {
    return {
        contractLines: [],
        contractLine: []
    };
};

const state = getDefaultState();

const mutations = {
    RESET_STATE(state) {
        Object.assign(state, getDefaultState());
    },

    ADD_CONTRACT_LINE(state, contractLines) {
        state.contractLines.push(contractLines);
    },

    SET_CONTRACT_LINE(state, value) {
        state.contractLine = value;
    },

    SET_CONTRACTS_LINES(state, value) {
        state.contractLines = value;
    }
};

const actions = {
    // fetch({ commit, dispatch }) {
    //     ContractLineService.fetch()
    //         .then(response => {
    //             commit("SET_CONTRACTS", response.data.data);
    //         })
    //         .catch(error => {
    //             const notification = {
    //                 type: "error",
    //                 message: "There was a problem fetching contracts: " + error.message
    //             };
    //             dispatch("notification/add", notification, { root: true });
    //         });
    // },

    post({ commit, dispatch }, [contractLine, contractId]) {
        return new Promise((resolve, reject) => {
            ContractLineService.post(contractLine, contractId)
                .then(response => {
                    const notification = {
                        type: "success",
                        message: "Contract Line successfully added to the system."
                    };
                    dispatch("notification/add", notification, { root: true });
                    commit("ADD_CONTRACT_LINE", response.data.data);
                    commit("SET_CONTRACT_LINE", response.data.data);
                    resolve(response.data); // return response data to calling function
                })
                .catch(error => {
                    reject(error); // return error to calling function
                    const notification = {
                        type: "error",
                        message: "There was a problem saving the contract line: " + error.message
                    };
                    dispatch("notification/add", notification, { root: true });
                });
        });
    },

    resetContractLineState({ commit }) {
        commit("RESET_STATE");
    }
};

const getters = {
    getContractLines(state) {
        return Object.values(state.contractLines);
    },
    getContractLine(state) {
        return Object.values(state.contractLine);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};
