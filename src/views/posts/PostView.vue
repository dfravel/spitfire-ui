<template>
    <div class="container mx-auto px-2">
        <div class="mt-4 mb-4">
            <div class="text-right">
                <router-link class="btn btn-secondary" to="/posts">
                    <font-awesome-icon :icon="['fal', 'landmark-alt']" size="lg" class="mr-2"></font-awesome-icon>
                    Return to the Post List
                </router-link>
            </div>
        </div>
        <div class="bg-white shadow-md rounded my-6">
            <div class="flex flex-row bg-gray-200">
                <div class="w-1/4 my-4 text-left px-8">
                    <div class="text-2xl">
                        Post information
                    </div>
                </div>
                <div class="w-3/4 my-4 text-left px-8">
                    <div class="bg-white rounded overflow-hidden shadow-lg">
                        <div class="flex flex-row">
                            <div class="w-1/4  align-middle text-center">
                                <div class="mt-10">
                                    <font-awesome-layers class="fa-5x">
                                        <font-awesome-icon :icon="['fal', 'circle']" />
                                        <font-awesome-icon
                                            :icon="['fal', 'landmark-alt']"
                                            transform="shrink-8"
                                        ></font-awesome-icon>
                                    </font-awesome-layers>
                                </div>
                            </div>
                            <div class="w-3/4">
                                <div class="px-6 py-4">
                                    <div class="text-2xl text-blue-800">{{ post.name }}</div>
                                    <div class="text-lg mb-4">{{ post.contact }}</div>
                                    <div class="text-base">{{ post.address }}</div>
                                    <div class="text-base">
                                        {{ post.city }} {{ post.state }} {{ post.postal_code }}
                                        {{ post.country_code }}
                                    </div>
                                    <div class="text-base mb-2">{{ post.phone }}</div>
                                </div>
                                <div class="px-6 py-4">
                                    <span
                                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                                        >#send email</span
                                    >
                                    <span
                                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                                        >#visit website</span
                                    >

                                    <span
                                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                                        >#view on map</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white mt-10 rounded overflow-hidden shadow-lg">
                        <div class="flex flex-row">
                            <div class="text-2xl px-6 py-4">Assigned Vehicles</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    data() {
        // using the parameter to get the data for this vendor
        const postId = this.$route.params.id;
        return {
            postId
        };
    },

    computed: mapState({
        post: state => state.post.post
    }),
    created() {
        this.getById(this.postId);
        this.$log.info(`the page has been created and the post information is ` + JSON.stringify(this.post));
    },

    mounted() {
        this.$log.info(`the page has been mounted and the post information is ` + JSON.stringify(this.post));
    },

    methods: {
        ...mapActions({
            getById: "post/getById"
        })
    }
};
</script>

<style lang="scss" scoped></style>
