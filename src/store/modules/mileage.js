import MileageService from "@/services/MileageService.js";

const actions = {
    post({ dispatch }, [mileage, vehicleId]) {
        return new Promise((resolve, reject) => {
            MileageService.post(mileage, vehicleId)
                .then(response => {
                    const notification = {
                        type: "success",
                        message: "Mileage successfully added to the system."
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
