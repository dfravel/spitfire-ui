<template>
    <div class="container mx-auto px-2">
        <div class="mt-4 mb-4">
            <div class="text-right">
                <router-link
                    class="btn btn-primary mr-2"
                    :to="{
                        path: `/vehicles/edit/${vehicle._id}`
                    }"
                >
                    <font-awesome-icon :icon="['fal', 'edit']" size="lg" class="mr-2"></font-awesome-icon>
                    Edit this vehicle
                </router-link>
                <router-link class="btn btn-secondary" to="/vehicles">
                    <font-awesome-icon :icon="['fal', 'file-contract']" size="lg" class="mr-2"></font-awesome-icon>
                    Cancel and return
                </router-link>
            </div>
        </div>
        <div class="flex flex-wrap mb-2">
            <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                <div class="bg-green-600 border rounded shadow p-2">
                    <div class="flex flex-row items-center">
                        <div class="flex-1 text-left">
                            <div class="text-white text-sm">VIN</div>
                            <div class="text-white text-2xl">
                                {{ vehicle.vin || "Not Set" }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                <div class="bg-blue-600 border rounded shadow p-2">
                    <div class="flex flex-row items-center">
                        <div class="flex-1 text-left">
                            <div class="text-white text-sm">Vendor</div>
                            <h3 class="text-white text-2xl">
                                {{ vehicle.contract_id.vendor.name || "Vendor Name" }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                <div class="bg-orange-600 border rounded shadow p-2">
                    <div class="flex flex-row items-center">
                        <div class="flex-1 text-left">
                            <div class="text-sm text-white">Status</div>
                            <div class="text-white text-2xl">
                                {{ vehicle.status }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap mb-2">
            <div class="w-full md:w-1/3 xl:w-1/3 pt-3 px-3 md:pr-2">
                <!-- show vehicle photo if it exists -->
                <div class="listing-card mb-6 p-4">
                    <div
                        class="listing-detail-container"
                        v-if="vehicle.vehicle_image && vehicle.vehicle_image.length > 0"
                    >
                        <img :src="vehicle.vehicle_image" :alt="vehicle.vin" />
                    </div>
                    <div class="listing-detail-container" v-else>
                        <span class="alert">No photo associated with this vehicle</span>
                    </div>
                    <div class="mt-4">
                        <router-link
                            class="btn btn-secondary"
                            :to="{
                                path: `/vehicles/attachments/add/${vehicle._id}`
                            }"
                        >
                            Upload a photo
                        </router-link>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="flex flex-col items-left">
                        <div class="flex-1 text-left">
                            <div class="listing-title-container">
                                <div class="listing-title">Contract Information</div>
                            </div>
                        </div>

                        <div class="flex-2 text-left">
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div>
                                        <div class="text-lg">{{ vehicle.contract_id.contract_number }}</div>
                                        <div class="block text-xs">contract number</div>
                                    </div>
                                </div>
                            </div>

                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div>
                                        <div class="text-lg">{{ vehicle.contract_line_id.clin }}</div>
                                        <div class="block text-xs">clin</div>
                                    </div>
                                </div>
                            </div>

                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div>
                                        <div class="text-lg">
                                            {{ vehicle.contract_id.awarded_dt | moment("DD MMMM YYYY") }}
                                        </div>
                                        <div class="block text-xs">awarded date</div>
                                    </div>
                                </div>
                            </div>

                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div>
                                        <div class="text-lg">
                                            {{ vehicle.build_start_dt | moment("DD MMMM YYYY") }}
                                        </div>
                                        <div class="block text-xs">build start date</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="flex flex-col items-left">
                        <div class="listing-title-container">
                            <div class="listing-title">Specs</div>
                        </div>
                        <div class="text-left">
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Armor Level:</div>
                                    <div>{{ vehicle.armor_level }}</div>
                                </div>
                            </div>

                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex">
                                    <div class="font-bold w-1/2">Glass Tinting:</div>
                                    <div>
                                        <div v-for="tinting in vehicle.glass_tinting" :key="tinting">
                                            <div class="block">{{ tinting }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Airbag Config:</div>
                                    <div>
                                        <div v-for="airbag in vehicle.airbag_config" :key="airbag">
                                            <div class="block">{{ airbag }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Vehicle Type:</div>
                                    <div>{{ vehicle.vehicle_type }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Make:</div>
                                    <div>{{ vehicle.make }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Model:</div>
                                    <div>{{ vehicle.model }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Model Year:</div>
                                    <div>{{ vehicle.model_year }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Trim Package:</div>
                                    <div>{{ vehicle.trim_package || "na" }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Curb Weight:</div>
                                    <div>{{ vehicle.curb_weight || "na" }}(kg)</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Gross Weight:</div>
                                    <div>{{ vehicle.gross_weight || "na" }}(kg)</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Exterior Color:</div>
                                    <div>{{ vehicle.exterior_color }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Interior Color:</div>
                                    <div>{{ vehicle.interior_color }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Number of Doors:</div>
                                    <div>{{ vehicle.number_of_doors }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Number of Seats:</div>
                                    <div>{{ vehicle.number_of_seats }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Engine Size:</div>
                                    <div>{{ vehicle.engine_size || "na" }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Tactical Package:</div>
                                    <div>{{ vehicle.tactical_package }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Audio Package:</div>
                                    <div>{{ vehicle.audio_package }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Spare Parts Kits:</div>
                                    <div>{{ vehicle.spare_parts_kits }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Transmission:</div>
                                    <div>{{ vehicle.transmission }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Drive Type:</div>
                                    <div>{{ vehicle.drive_type }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Drive Side:</div>
                                    <div>{{ vehicle.drive_side }}</div>
                                </div>
                            </div>
                            <div class="py-2 px-2 border-b border-gray-300 w-full">
                                <div class="flex flex-row">
                                    <div class="font-bold w-1/2">Fuel Type:</div>
                                    <div>{{ vehicle.fuel_type }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="flex flex-col items-left">
                        <div class="flex-1 text-left">
                            <div class="listing-title-container">
                                <div class="listing-title">Mileage Reports</div>
                                <div class="listing-title-button">
                                    <router-link
                                        class="btn btn-listing-add mr-2 mt-1"
                                        title="Add Mileage"
                                        :to="{
                                            path: `/vehicles/mileage/add/${vehicle._id}`
                                        }"
                                    >
                                        <font-awesome-icon :icon="['fal', 'plus']"></font-awesome-icon>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex-2 text-left">
                            <div class="listing-detail-container" v-if="vehicle.mileage.length > 0">
                                <ul>
                                    <MileageList :mileage="vehicle.mileage" />
                                </ul>
                            </div>
                            <div class="listing-detail-container" v-else>
                                <span class="alert">There aren't any mileage reports entered</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="flex flex-col items-left">
                        <div class="flex-1 text-left">
                            <div class="listing-title-container">
                                <div class="listing-title">Attachments</div>
                                <div class="listing-title-button">
                                    <router-link
                                        class="btn btn-listing-add mr-2 mt-1"
                                        title="Add an Attachment"
                                        :to="{
                                            path: `/vehicles/attachments/multiple/add/${this.vehicleId}`
                                        }"
                                    >
                                        <font-awesome-icon :icon="['fal', 'plus']"></font-awesome-icon>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex-2 text-left">
                            <div class="listing-detail-container" v-if="vehicle.attachments.length > 0">
                                <ul>
                                    <AttachmentList :attachments="vehicle.attachments" :vehicleId="vehicle._id" />
                                </ul>
                            </div>
                            <div class="listing-detail-container" v-else>
                                <span class="alert">There aren't any attachments related to this vehicle</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-2/3 xl:w-2/3 pt-3 px-3 md:pr-2">
                <div class="bg-white border rounded shadow p-2 mb-5">
                    <div class="flex flex-col items-left">
                        <div class="flex-1 text-left">
                            <h5 class="text-gray-800 text-2xl">Assigned Post</h5>
                        </div>
                        <div class="flex-2">
                            <div id="map-canvas" v-if="vehicle.post_id">
                                <Map :lat="lat" :lng="lng" />
                            </div>
                            <div class="" v-else>
                                <div class="alert">There isn't a post assigned yet</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- for the MVP, we're going to hide the location history -->
                <!-- <div class="listing-card">
                    <div class="flex flex-col items-left">
                        <div class="listing-title-container flex flex-row align-center justify-between">
                            <div class="listing-title">Location History</div>
                            <div class="listing-title-button">
                                <router-link
                                    class="btn btn-listing-add mr-2 mt-1"
                                    title="Add a Destination"
                                    :to="{
                                        path: '/'
                                    }"
                                >
                                    <font-awesome-icon :icon="['fal', 'plus']"></font-awesome-icon>
                                </router-link>
                            </div>
                        </div>

                        <div class="flex-2 text-left">
                            <div class="listing-detail-container" v-if="vehicle.destinations.length > 0">
                                <ul>
                                    <li>We have destinations</li>
                                </ul>
                            </div>
                            <div class="listing-detail-container" v-else>
                                <span class="alert">There aren't any previous destinations entered</span>
                            </div>
                        </div>
                    </div>
                </div> -->

                <div class="listing-card">
                    <div class="flex flex-col items-left">
                        <div class="flex-1 text-left">
                            <div class="listing-title-container">
                                <div class="listing-title">Inspections</div>
                                <div class="listing-title-button">
                                    <router-link
                                        class="btn btn-listing-add mr-2 mt-1"
                                        title="Add an Inspection"
                                        :to="{
                                            path: `/vehicles/inspection/add/${vehicle._id}`
                                        }"
                                    >
                                        <font-awesome-icon :icon="['fal', 'plus']"></font-awesome-icon>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex-2 text-left">
                            <div class="listing-detail-container" v-if="vehicle.inspections.length > 0">
                                <ul>
                                    <InspectionList :inspections="vehicle.inspections" :vehicleId="vehicle._id" />
                                </ul>
                            </div>
                            <div class="listing-detail-container" v-else>
                                <span class="alert">There aren't any inspection reports entered</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="listing-card">
                    <div class="flex flex-col items-left">
                        <div class="flex-1 text-left">
                            <div class="listing-title-container">
                                <div class="listing-title">Maintenance</div>
                                <div class="listing-title-button">
                                    <router-link
                                        class="btn btn-listing-add mr-2 mt-1"
                                        title="Add Maintenance"
                                        :to="{
                                            path: `/vehicles/maintenance/add/${vehicle._id}`
                                        }"
                                    >
                                        <font-awesome-icon :icon="['fal', 'plus']"></font-awesome-icon>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex-2 text-left">
                            <div class="listing-detail-container" v-if="vehicle.maintenance.length > 0">
                                <ul>
                                    <MaintenanceList :maintenance="vehicle.maintenance" :vehicleId="vehicle._id" />
                                </ul>
                            </div>
                            <div class="listing-detail-container" v-else>
                                <span class="alert">There aren't any maintenance reports entered</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="listing-card">
                    <div class="flex flex-col items-left">
                        <div class="flex-1 text-left">
                            <div class="listing-title-container">
                                <div class="listing-title">Shipping</div>
                                <div class="listing-title-button">
                                    <router-link
                                        class="btn btn-listing-add mr-2 mt-1"
                                        title="Add Shipping"
                                        :to="{
                                            path: '/'
                                        }"
                                    >
                                        <font-awesome-icon :icon="['fal', 'plus']"></font-awesome-icon>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex-2 text-left">
                            <div class="listing-detail-container" v-if="vehicle.shipping.length > 0">
                                <ul>
                                    <li>We have shipping history</li>
                                </ul>
                            </div>
                            <div class="listing-detail-container" v-else>
                                <span class="alert">There aren't any shipping reports entered</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="bg-white shadow-md rounded mt-12 mb-6">{{ vehicle }}</div> -->
    </div>
</template>

<script>
import { mapState } from "vuex";
import MileageList from "@/views/vehicles/components/mileage/MileageList.vue";
import InspectionList from "@/views/vehicles/components/inspections/InspectionList.vue";
import MaintenanceList from "@/views/vehicles/components/maintenance/MaintenanceList.vue";
import AttachmentList from "@/views/vehicles/components/attachments/AttachmentList.vue";
import Map from "@/views/vehicles/components/Map.vue";
export default {
    data() {
        const vehicleId = this.$route.params.id;

        return {
            vehicleId,
            lat: 0,
            lng: 0
        };
    },
    computed: mapState({
        vehicle: state => state.vehicle.vehicle
    }),
    components: {
        MileageList,
        InspectionList,
        MaintenanceList,
        AttachmentList,
        Map
    },

    created() {
        this.$store.dispatch("vehicle/getById", this.vehicleId);
        // this.getById(this.vehicleId);
        this.$log.info(
            `${this.vehicleId} the page has been created and the vehicle information is ` + JSON.stringify(this.vehicle)
        );
    },

    beforeMount() {
        this.lat = Number(`${this.vehicle.post_id.location.lat}`);
        this.lng = Number(`${this.vehicle.post_id.location.lng}`);
    },

    mounted() {
        this.$log.info(
            `${this.vehicleId} - the page has been mounted and the vehicle information is ` +
                JSON.stringify(this.vehicle)
        );
    }

    // methods: {
    //     ...mapActions({
    //         getById: "vehicle/getById"
    //     })
    // }
};
</script>

<style lang="scss" scoped>
#map_canvas {
    width: 100%;
    height: 450px;
}
</style>
