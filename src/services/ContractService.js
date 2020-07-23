import apiClient from "@/functions/http-common.js";

export default {
    async fetch() {
        return await apiClient.get("/contracts");
    },

    async getById(contract_id) {
        return await apiClient.get("/contracts/" + contract_id);
    },

    async post(contract) {
        return await apiClient.post("/contracts", contract);
    },

    async put(contract) {
        return await apiClient.put("/contracts/" + contract._id, contract);
    }
};
