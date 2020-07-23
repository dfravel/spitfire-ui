<template>
    <div class="container mx-auto px-2">
        <div class="mt-4">
            <div class="text-right">
                <button class="btn btn-primary">
                    <font-awesome-icon :icon="['fal', 'car']" size="lg" class="mr-2"></font-awesome-icon>
                    Create a vehicle
                </button>
            </div>
        </div>
        <div class="bg-white shadow-md rounded my-6">
            <table>
                <thead>
                    <tr>
                        <th>Vehicle Number</th>
                        <th>VIN (if assigned)</th>
                        <th>Status</th>
                        <th>Make / Model</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="vehicle in pageOfItems" v-bind:key="vehicle._id">
                        <td>{{ vehicle.customer_vehicle_number }}</td>
                        <td>{{ vehicle.vin }}</td>
                        <td>
                            <span :class="vehicle.status.toLowerCase()">{{ vehicle.status }}</span>
                        </td>
                        <td>{{ vehicle.make }} {{ vehicle.model }}</td>
                        <td class="align-middle">
                            <router-link class="btn btn-table-primary mr-2" to="/">
                                <font-awesome-icon :icon="['fal', 'edit']"></font-awesome-icon>
                                View
                            </router-link>

                            <router-link class="btn btn-table-secondary" to="/">
                                <font-awesome-icon :icon="['fal', 'trash']"></font-awesome-icon>
                                Delete
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- create pagination links here  -->
            <div class="py-10">
                <jw-pagination :items="vehicles" @changePage="onChangePage"></jw-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            pageOfItems: []
        };
    },
    computed: {
        ...mapGetters({
            vehicles: "vehicle/getVehicles"
        })
    },
    beforeCreate() {
        this.$store.dispatch("vehicle/fetch");
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    }
};
</script>

<style></style>
