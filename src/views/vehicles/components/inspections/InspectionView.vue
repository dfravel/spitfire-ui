<template>
    <div class="container mx-auto px-2">
        <div class="mt-4 mb-4">
            <div class="text-right">
                <router-link class="btn btn-secondary" :to="{ path: `/vehicles/view/${this.vehicleId}` }">
                    <font-awesome-icon :icon="['fal', 'industry-alt']" size="lg" class="mr-2"></font-awesome-icon>
                    Return to Vehicle Detail
                </router-link>
            </div>
        </div>
        <div class="bg-white shadow-md rounded my-6">
            <div class="flex flex-row bg-gray-200">
                <div class="w-1/4 my-4 text-left px-8">
                    <div class="text-2xl">
                        Inspection information
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
                                            :icon="['fal', 'wrench']"
                                            transform="shrink-8"
                                        ></font-awesome-icon>
                                    </font-awesome-layers>
                                </div>
                            </div>
                            <div class="w-3/4">
                                <div class="text-2xl pt-2">Inspection Type: {{ inspection.inspection_type }}</div>
                                <div class="text-lg">
                                    Inspection Date: {{ inspection.approval_dt | moment("DD MMMM YYYY") }}
                                </div>
                                <div class="text-lg">
                                    Inspection Result: Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                                    quisquam laboriosam consequatur nisi inventore laborum. Illum amet, ex eum esse
                                    quaerat blanditiis dicta! Quod cupiditate sit voluptatum dolores doloremque facilis?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore facere modi
                                    veritatis! Mollitia distinctio, dignissimos ad accusantium laborum minus vel est.
                                    Facilis ipsam, placeat commodi aperiam odit delectus eveniet!
                                </div>

                                <div class="text-2xl mt-5 mb-2">Attachments</div>
                                <ul class="pb-10">
                                    <li v-for="attachment in inspection.attachments" :key="attachment._id" class="py-2">
                                        <font-awesome-icon
                                            :icon="['fal', 'check-circle']"
                                            size="lg"
                                            class="text-blue-500 mr-2"
                                        ></font-awesome-icon>
                                        <a :href="attachment.file_path">{{ attachment.name }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        // using the parameter to get the data for this vendor
        const vehicleId = this.$route.params.vehicleId;
        const inspectionId = this.$route.params.inspectionId;
        return {
            vehicleId,
            inspectionId,
            inspection: [],
            errors: []
        };
    },

    // computed: {
    //     ...mapState(["inspection/inspections"]),
    //     ...mapGetters({
    //         getContractById: "inspection/getInspectionById"
    //     }),

    //     inspection() {
    //         return this.getInspectionById(this.inspectionId);
    //     }
    // },
    // beforeCreate() {},
    mounted() {
        axios
            .get(`http://localhost:4000/api/v1/vehicle/inspections/${this.vehicleId}/${this.inspectionId}`)
            // .get(
            //     "http://ec2-52-54-99-190.compute-1.amazonaws.com/api/v1/vehicles/inspection/" +
            //         this.vehicleId +
            //         "/" +
            //         this.inspectionId
            // )
            .then(response => {
                this.inspection = response.data.data;
            })
            .catch(e => {
                this.errors.push(e);
            });
    }
};
</script>

<style lang="scss" scoped></style>
