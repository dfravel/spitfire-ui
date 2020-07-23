import MaintenanceService from "@/services/MaintenanceService.js";

const actions = {
    post({ dispatch }, [maintenance, vehicleId]) {
        return new Promise((resolve, reject) => {
            MaintenanceService.post(maintenance, vehicleId)
                .then(response => {
                    const notification = {
                        type: "success",
                        message: "Maintenance successfully added to the system."
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

export default {
    namespaced: true,
    actions
};
