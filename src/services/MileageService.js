import apiClient from "@/functions/http-common.js";

export default {
    async post(mileage, vehicleId) {
        return await apiClient.post("/vehicle/mileage/" + vehicleId, mileage);
    }
};
