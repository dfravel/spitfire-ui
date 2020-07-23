<template>
    <div class="container mx-auto px-2">
        <div class="mt-4">
            <div class="text-right">
                &nbsp;
                <!-- <button class="btn btn-primary">
                    <font-awesome-icon :icon="['fal', 'car']" size="lg" class="mr-2"></font-awesome-icon>
                    Create a vehicle
                </button> -->
            </div>
        </div>
        <div class="mt-4 text-left">
            <form>
                <input name="query" class="form-input w-1/2" v-model="search" placeholder="Enter search term" />
            </form>
        </div>
        <div class="bg-white shadow-md rounded mt-2 mb-6">
            <table>
                <thead>
                    <tr>
                        <th>Vehicle Number</th>
                        <th>VIN (if assigned)</th>
                        <th class="text-center">Status</th>
                        <th>Make / Model</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="vehicle in pageOfItems" v-bind:key="vehicle._id">
                        <td>
                            {{ vehicle.customer_vehicle_number }}

                            <div class="secondary-data">
                                Contract #:
                                {{ vehicle.contract_id.contract_number }}
                                <br />
                                Build Start Date:
                                {{ vehicle.build_start_dt | moment("DD MMMM YYYY") }}
                            </div>

                            <div class="secondary-data"></div>
                        </td>

                        <td class="align-middle">{{ vehicle.vin }}</td>
                        <td class="align-middle text-center">
                            <span :class="vehicle.status | lowercase | slug">{{ vehicle.status }}</span>
                        </td>
                        <td class="align-middle">
                            {{ vehicle.make }} {{ vehicle.model }}
                            {{ vehicle.model_year }}
                            <div class="secondary-data">
                                Armor Level:
                                {{ vehicle.armor_level }}
                            </div>
                        </td>

                        <td class="align-middle">
                            <router-link
                                class="btn btn-table-view mr-2"
                                title="View this vehicle"
                                :to="{
                                    path: `/vehicles/view/${vehicle._id}`
                                }"
                            >
                                <font-awesome-icon :icon="['fal', 'search']"></font-awesome-icon>
                            </router-link>

                            <router-link
                                class="btn btn-table-edit mr-2"
                                title="Edit this vehicle"
                                :to="{
                                    path: `/vehicles/edit/${vehicle._id}`
                                }"
                            >
                                <font-awesome-icon :icon="['fal', 'edit']" size="lg"></font-awesome-icon>
                            </router-link>

                            <router-link class="btn btn-table-delete" to="/" title="Delete this vehicle">
                                <font-awesome-icon :icon="['fal', 'trash']" size="lg"></font-awesome-icon>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- create pagination links here  -->
            <div class="py-10">
                <jw-pagination
                    v-if="filteredVehicles.length"
                    :items="filteredVehicles"
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
            search: "",
            pageOfItems: []
        };
    },
    computed: {
        ...mapGetters({
            vehicles: "vehicle/getVehicles"
        }),
        filteredVehicles: function() {
            var searchTerm = this.search && this.search.toLowerCase();
            var vehicles = this.vehicles;
            if (searchTerm) {
                vehicles = vehicles.filter(function(row) {
                    return Object.keys(row).some(function(key) {
                        return (
                            String(row[key])
                                .toLowerCase()
                                .indexOf(searchTerm) > -1
                        );
                    });
                });
            }
            return vehicles;
        }
    },
    beforeCreate() {
        this.$store.dispatch("vehicle/fetch");
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
        goToDetails(id) {
            //console.log("you're going to the detail page" + id);
            this.$router.push({
                path: `/vehicles/details/${id}`
            });
        }
    }
};
</script>

<style></style>
