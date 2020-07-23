import apiClient from "@/functions/http-common.js";

export default {
    async post(contractLine, contractId) {
        return await apiClient.post("/contract/lines/" + contractId, contractLine);
    }
};
