<template>
    <div class="container mx-auto px-2">
        <div class="mt-4">
            <div class="text-right">
                <router-link class="btn btn-secondary" to="/posts/add">
                    <font-awesome-icon :icon="['fal', 'landmark-alt']" size="lg" class="mr-2"></font-awesome-icon>
                    Create a post
                </router-link>
            </div>
        </div>

        <div class="-mt-6 text-left">
            <form>
                <input name="query" class="form-input w-1/2" v-model="search" placeholder="Enter search term" />
            </form>
        </div>
        <div class="bg-white shadow-md rounded mt-2 mb-6">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Contact Options</th>
                        <th>Map Coordinates</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in pageOfItems" v-bind:key="post._id">
                        <td>
                            {{ post.name }}
                            <div class="secondary-data">
                                Contact:
                                {{ post.contact }}
                            </div>
                        </td>
                        <td>
                            {{ post.address }}
                            <div class="secondary-data">
                                {{ post.city }} {{ post.state }}
                                {{ post.postal_code }}
                                {{ post.country_code }}
                            </div>
                        </td>
                        <td>
                            <div class="table-list text-sm pb-1">
                                <font-awesome-icon :icon="['fal', 'phone']" class="mr-2"></font-awesome-icon>
                                {{ post.phone }}
                            </div>
                            <div class="table-list text-sm pb-1">
                                <font-awesome-icon :icon="['fal', 'envelope']" class="mr-2"></font-awesome-icon>
                                {{ post.email }}
                            </div>
                            <div class="table-list text-sm  pb-1">
                                <font-awesome-icon :icon="['fal', 'globe']" class="mr-2"></font-awesome-icon>
                                <span v-if="post.website">
                                    <a :href="`${post.website}`" target="_blank">visit website</a>
                                </span>
                            </div>
                        </td>
                        <td>
                            <div class="table-list text-sm pb-1">
                                <font-awesome-icon :icon="['fal', 'map-marker']" class="mr-2"></font-awesome-icon>
                                {{ post.location ? `Lat: ${post.location.lat}` : "" }}
                            </div>
                            <div class="table-list text-sm pb-1">
                                <font-awesome-icon :icon="['fal', 'map-marker']" class="mr-2"></font-awesome-icon>
                                {{ post.location ? `Lng: ${post.location.lng}` : "" }}
                            </div>
                        </td>
                        <td class="align-middle">
                            <router-link
                                class="btn btn-table-view mr-2"
                                title="View this post"
                                :to="'/posts/view/' + post._id"
                            >
                                <font-awesome-icon :icon="['fal', 'search']"></font-awesome-icon>
                            </router-link>

                            <router-link
                                class="btn btn-table-edit mr-2"
                                title="Edit this post"
                                :to="'/posts/edit/' + post._id"
                            >
                                <font-awesome-icon :icon="['fal', 'edit']"></font-awesome-icon>
                            </router-link>

                            <router-link class="btn btn-table-delete" title="Delete this post" to="/">
                                <font-awesome-icon :icon="['fal', 'trash']"></font-awesome-icon>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- create pagination links here  -->
            <div class="py-10">
                <jw-pagination
                    v-if="filteredPosts.length"
                    :items="filteredPosts"
                    :pageSize="10"
                    @changePage="onChangePage"
                ></jw-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            pageOfItems: [],
            search: ""
        };
    },
    computed: {
        ...mapGetters({
            posts: "post/getPosts"
        }),
        filteredPosts: function() {
            var searchTerm = this.search && this.search.toLowerCase();
            var posts = this.posts;
            if (searchTerm) {
                posts = posts.filter(function(row) {
                    return Object.keys(row).some(function(key) {
                        return (
                            String(row[key])
                                .toLowerCase()
                                .indexOf(searchTerm) > -1
                        );
                    });
                });
            }
            return posts;
        }
    },
    beforeCreate() {
        this.$store.dispatch("post/fetch");
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    }
};
</script>

<style lang="scss" scoped></style>
