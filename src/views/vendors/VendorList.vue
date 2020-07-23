<template>
    <div class="container mx-auto px-2">
        <div class="mt-4">
            <div class="text-right">
                <router-link class="btn btn-secondary" to="/vendors/add">
                    <font-awesome-icon :icon="['fal', 'industry-alt']" size="lg" class="mr-2"></font-awesome-icon>
                    Create a vendor
                </router-link>
            </div>
        </div>

        <div class="text-left -mt-6">
            <form>
                <input name="query" class="form-input w-1/2" v-model="search" placeholder="Enter search term" />
            </form>
        </div>

        <div class="bg-white shadow-md rounded mt-2 mb-6">
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Contact Options</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="vendor in pageOfItems" v-bind:key="vendor._id" class="listTable">
                        <td class="align-middle text-left">
                            <span :class="vendor.vendor_type | lowercase" v-if="vendor.vendor_type == 'Shipper'">
                                <font-awesome-icon :icon="['fal', 'ship']" size="lg"></font-awesome-icon>
                            </span>
                            <span :class="vendor.vendor_type | lowercase" v-else>
                                <font-awesome-icon :icon="['fal', 'cars']" size="lg"></font-awesome-icon>
                            </span>
                        </td>
                        <td>
                            {{ vendor.name }}
                            <div class="secondary-data">
                                Contact:
                                {{ vendor.contact }}
                            </div>
                        </td>
                        <td>
                            {{ vendor.address }}
                            <div class="secondary-data">
                                {{ vendor.city }} {{ vendor.state }}
                                {{ vendor.postal_code }}
                                {{ vendor.country_code }}
                            </div>
                        </td>
                        <td>
                            <div class="table-list text-sm pb-1">
                                <font-awesome-icon :icon="['fal', 'phone']" class="mr-2"></font-awesome-icon>
                                {{ vendor.phone }}
                            </div>
                            <div class="table-list text-sm pb-1">
                                <font-awesome-icon :icon="['fal', 'envelope']" class="mr-2"></font-awesome-icon>
                                {{ vendor.email }}
                            </div>
                            <div class="table-list text-sm  pb-1">
                                <font-awesome-icon :icon="['fal', 'globe']" class="mr-2"></font-awesome-icon>
                                {{ vendor.website }}
                            </div>
                        </td>
                        <td class="align-middle">
                            <router-link
                                class="btn btn-table-view mr-2"
                                title="View this vendor"
                                :to="'/vendors/view/' + vendor._id"
                            >
                                <font-awesome-icon :icon="['fal', 'search']"></font-awesome-icon>
                            </router-link>

                            <router-link
                                class="btn btn-table-edit mr-2"
                                title="Edit this vendor"
                                :to="'/vendors/edit/' + vendor._id"
                            >
                                <font-awesome-icon :icon="['fal', 'edit']"></font-awesome-icon>
                            </router-link>

                            <router-link class="btn btn-table-delete" title="Delete this vendor" to="/">
                                <font-awesome-icon :icon="['fal', 'trash']"></font-awesome-icon>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- create pagination links here  -->
            <div class="py-10">
                <jw-pagination
                    v-if="filteredVendors.length"
                    :items="filteredVendors"
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
            vendors: "vendor/getVendors"
        }),
        filteredVendors: function() {
            var searchTerm = this.search && this.search.toLowerCase();
            var vendors = this.vendors;
            if (searchTerm) {
                vendors = vendors.filter(function(row) {
                    return Object.keys(row).some(function(key) {
                        return (
                            String(row[key])
                                .toLowerCase()
                                .indexOf(searchTerm) > -1
                        );
                    });
                });
            }
            return vendors;
        }
    },
    beforeCreate() {
        this.$store.dispatch("vendor/fetch");
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    }
};
</script>

<style lang="scss" scoped></style>
