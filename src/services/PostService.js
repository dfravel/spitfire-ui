import apiClient from "@/functions/http-common.js";

export default {
    async fetch() {
        return await apiClient.get("/posts");
    },

    async getById(post_id) {
        return await apiClient.get("/posts/" + post_id);
    },

    async post(post) {
        return await apiClient.post("/posts", post);
    },

    async put(post) {
        return await apiClient.put("/posts/" + post._id, post);
    }
};
