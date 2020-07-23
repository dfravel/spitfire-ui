import PostService from "@/services/PostService.js";

const getDefaultState = () => {
    return {
        posts: [],
        post: []
    };
};

const state = getDefaultState();

const mutations = {
    RESET_STATE(state) {
        Object.assign(state, getDefaultState());
    },

    ADD_POST(state, post) {
        state.posts.push(post);
    },

    SET_POST(state, value) {
        state.post = value;
    },

    SET_POSTS(state, value) {
        state.posts = value;
    }
};

const actions = {
    fetch({ commit }) {
        PostService.fetch().then(response => {
            commit("SET_POSTS", response.data.data);
        });
    },

    getById({ commit, dispatch }, postId) {
        PostService.getById(postId)
            .then(response => {
                commit("SET_POST", response.data.data);
            })
            .catch(error => {
                const notification = {
                    type: "error",
                    message: "There was a problem fetching the post: " + error.message
                };
                dispatch("notification/add", notification, { root: true });
            });
    },

    post({ commit, dispatch }, post) {
        return new Promise((resolve, reject) => {
            PostService.post(post)
                .then(response => {
                    const notification = {
                        type: "success",
                        message: "Post successfully added to the system."
                    };
                    dispatch("notification/add", notification, { root: true });
                    commit("ADD_POST", response.data.data);
                    commit("SET_POST", response.data.data);
                    resolve(response.data); // return response data to calling function
                })
                .catch(error => {
                    reject(error); // return error to calling function
                });
        });
    },

    put({ commit, dispatch }, post) {
        return new Promise((resolve, reject) => {
            PostService.put(post)
                .then(response => {
                    const notification = {
                        type: "success",
                        message: "Post successfully updated."
                    };
                    dispatch("notification/add", notification, { root: true });
                    commit("SET_POST", response.data.data);
                    resolve(response.data); // return response data to calling function
                })
                .catch(error => {
                    reject(error); // return error to calling function
                    const notification = {
                        type: "error",
                        message: "An error occurred updating the post information."
                    };
                    dispatch("notification/add", notification, { root: true });
                });
        });
    },

    resetVehicleState({ commit }) {
        commit("RESET_STATE");
    }
};

const getters = {
    getPosts(state) {
        return Object.values(state.posts);
    },

    getPostById: state => id => {
        return state.posts.find(post => post._id === id);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};
