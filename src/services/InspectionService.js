import apiClient from "@/functions/http-common.js";

export default {
    async getById(vehicle_id) {
        return await apiClient.get("/vehicle/inspections/" + vehicle_id);
    },
    async post(inspection, vehicleId) {
        return await apiClient.post("/vehicle/inspections/" + vehicleId, inspection);
    }
};
