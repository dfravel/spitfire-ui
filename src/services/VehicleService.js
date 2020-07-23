import apiClient from "@/functions/http-common.js";

export default {
    async fetch() {
        return await apiClient.get("/vehicles");
    },

    async getById(vehicle_id) {
        return await apiClient.get("/vehicles/" + vehicle_id);
    },

    post(vehicle) {
        return apiClient.post("/vehicles", vehicle);
    },

    async put(vehicle) {
        return await apiClient.put("/vehicles/" + vehicle._id, vehicle);
    }
};
