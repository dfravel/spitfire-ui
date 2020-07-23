import apiClient from "@/functions/http-common.js";

export default {
    async post(maintenance, vehicleId) {
        return await apiClient.post("/vehicle/maintenance/" + vehicleId, maintenance);
    }
};
