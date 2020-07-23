<template>
    <div class="container mx-auto px-2">
        <div class="mt-4">
            <div class="text-right">
                <router-link
                    class="btn btn-secondary"
                    :to="{
                        path: `/vehicles/view/${vehicle._id}`
                    }"
                >
                    <font-awesome-icon :icon="['fal', 'landmark-alt']" size="lg" class="mr-2"></font-awesome-icon>
                    Cancel and return
                </router-link>
            </div>
        </div>
        <div class="bg-white shadow-md rounded my-6">
            <div class="flex flex-row bg-gray-200">
                <div class="w-1/3 my-4 text-left px-8">
                    <div class="text-2xl">Edit a Vehicle</div>
                    <div class="text-sm">
                        Please edit the vehicle information.
                    </div>
                </div>
                <div class="w-2/3 my-4 text-left px-8">
                    <div>
                        <form @submit.prevent="handleSubmit">
                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="VIN" required="false" fieldName="vin" />
                                <BaseTextInput
                                    v-model="vehicle.vin"
                                    type="text"
                                    name="vin"
                                    id="vin"
                                    :value="vehicle.vin"
                                    placeholder="Please enter the vehicle's VIN"
                                />
                            </div>

                            <!-- status values -->
                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="Current Status" required="false" fieldName="status" />
                                <BaseSelect :options="statuses" v-model="vehicle.status" />
                            </div>

                            <!-- Contract Received Date -->
                            <div class="flex flex-col mb-6">
                                <BaseFormLabel
                                    fieldLabel="Contract Received Date"
                                    required="false"
                                    fieldName="contract_received_dt"
                                />
                                <BaseTextInput
                                    v-model="vehicle.contract_received_dt"
                                    type="date"
                                    name="contract_received_dt"
                                    id="contract_received_dt"
                                    :value="vehicle.contract_received_dt"
                                    placeholder="Please enter the date the contract was received"
                                />
                            </div>

                            <!-- Build Date -->
                            <div class="flex flex-col mb-6">
                                <BaseFormLabel
                                    fieldLabel="Build Start Date"
                                    required="false"
                                    fieldName="build_start_dt"
                                />
                                <BaseTextInput
                                    v-model="vehicle.build_start_dt"
                                    type="date"
                                    name="build_start_dt"
                                    id="build_start_dt"
                                    :value="vehicle.build_start_dt"
                                    placeholder="Please enter the build start date"
                                />
                            </div>

                            <!-- post values -->
                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="Assigned Post" required="false" fieldName="post_id" />
                                <BaseSelect :options="posts" v-model="vehicle.post_id" />
                            </div>

                            <!-- percent complete -->
                            <div class="flex flex-col mb-6">
                                <BaseFormLabel
                                    fieldLabel="Percent Complete"
                                    required="false"
                                    fieldName="percent_complete"
                                />
                                <BaseTextInput
                                    v-model="vehicle.percent_complete"
                                    type="number"
                                    name="percent_complete"
                                    id="percent_complete"
                                    :value="vehicle.percent_complete"
                                    placeholder="Please enter the percent complete in increments of 10"
                                />
                            </div>

                            <BaseSubmitButton type="submit">
                                <font-awesome-icon :icon="['fal', 'save']" size="lg" class="mr-2"></font-awesome-icon>
                                Update Vehicle Information
                            </BaseSubmitButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BaseFormLabel from "@/components/forms/BaseFormLabel.vue";
import BaseTextInput from "@/components/forms/BaseTextInput.vue";
import BaseSelect from "@/components/forms/BaseSelect.vue";
import BaseSubmitButton from "@/components/forms/BaseSubmitButton.vue";

export default {
    data() {
        const vehicleId = this.$route.params.id;
        const statuses = [
            { _id: "Ordered", name: "Ordered" },
            { _id: "In Production", name: "In Production" },
            { _id: "Mid-Build Inspection", name: "Mid-Build Inspection" },
            { _id: "Final Inspection", name: "Final Inspection" },
            { _id: "In Transit - Frankfurt", name: "In Transit - Frankfurt" },
            { _id: "Accepted - On Hand - Frankfurt", name: "Accepted - On Hand - Frankfurt" },
            { _id: "On Hand - Gemershein", name: "On Hand - Gemershein" },
            { _id: "Accepted at Post", name: "Accepted at Post" },
            { _id: "Rejected Frankfurt", name: "Rejected Frankfurt" },
            { _id: "In Transit - Post", name: "In Transit - Post" },
            { _id: "Operational", name: "Operational" },
            { _id: "Non-Operational", name: "Non-Operational" },
            { _id: "Retired", name: "Retired" }
        ];
        return {
            vehicleId,
            statuses
        };
    },

    components: {
        BaseFormLabel,
        BaseTextInput,
        BaseSelect,
        BaseSubmitButton
    },
    computed: mapState({
        vehicle: state => state.vehicle.vehicle,
        posts: state => state.post.posts
    }),

    created() {
        this.getById(this.vehicleId);
        this.getPosts();
        this.$log.info(`the page has been created and the vehicle information is ` + JSON.stringify(this.vehicle));
        this.$log.info(`we have retrieved the list of posts ` + JSON.stringify(this.posts));
    },

    mounted() {
        this.$log.info(`the page has been mounted and the vehicle information is ` + JSON.stringify(this.vehicle));
    },
    methods: {
        ...mapActions({
            getById: "vehicle/getById",
            getPosts: "post/fetch"
        }),

        handleSubmit() {
            this.$log.info(
                `the form has been submitted. the updated vehicle information is ` + JSON.stringify(this.vendor)
            );
            // this.$v.$touch();
            // if (!this.$v.$invalid) {
            this.$log.info(`here i am`);
            this.$log.info(this.vehicle);
            this.$store
                .dispatch("vehicle/put", this.vehicle)
                .then(response => {
                    this.$log.info(`success! we've successfully updated the vehicle ${JSON.stringify(response.data)}`);
                    this.$router.push({
                        path: `/vehicles/view/` + this.vehicleId
                    });
                })
                .catch(error => {
                    this.$log.error(`there was an error with the form submission ${error}`);
                });
            // } else {
            //     this.$log.error("The form failed the validation rules");
            // }
        }
    }
};
</script>

<style lang="scss" scoped></style>
