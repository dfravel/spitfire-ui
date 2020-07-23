import apiClient from "@/functions/http-common.js";

export default {
    async fetch() {
        return await apiClient.get("/vendors");
    },

    async getById(vendor_id) {
        return await apiClient.get("/vendors/" + vendor_id);
    },

    async post(vendor) {
        return await apiClient.post("/vendors", vendor);
    },

    async put(vendor) {
        return await apiClient.put("/vendors/" + vendor._id, vendor);
    }
};
