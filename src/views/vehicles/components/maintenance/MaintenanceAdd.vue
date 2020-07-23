<template>
    <div class="container mx-auto px-2">
        <div class="mt-4">
            <div class="text-right">
                <router-link class="btn btn-secondary" :to="{ path: '/vehicles/view/' + this.vehicleId }">
                    <font-awesome-icon :icon="['fal', 'file-contract']" size="lg" class="mr-2"></font-awesome-icon>
                    Cancel and return
                </router-link>
            </div>
        </div>
        <div class="bg-white shadow-md rounded my-6">
            <div class="flex flex-row bg-gray-200">
                <div class="w-1/3 my-4 text-left px-8">
                    <div class="text-2xl">Add a Maintenance Report</div>
                    <div class="text-sm">
                        Please enter your maintenance report and upload any files associated with this maintenance
                        activity.
                    </div>
                </div>
                <div class="w-2/3 my-4 text-left px-8">
                    <div>
                        <form @submit.prevent="handleSubmit">
                            <div
                                class="flex flex-col mb-6"
                                :class="{ invalid: $v.maintenance.maintenance_process.$error }"
                            >
                                <BaseFormLabel
                                    fieldLabel="Maintenance Type"
                                    required="true"
                                    fieldName="maintenance_process"
                                />
                                <BaseSelect
                                    :options="maintenanceProcesses"
                                    v-model="maintenance.maintenance_process"
                                    :class="{
                                        error: $v.maintenance.maintenance_process.$error
                                    }"
                                    @blur="$v.maintenance.maintenance_process.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-6" :class="{ invalid: $v.maintenance.technician.$error }">
                                <base-form-label
                                    fieldLabel="Technician"
                                    required="true"
                                    fieldName="technician"
                                ></base-form-label>
                                <BaseTextInput
                                    v-model="maintenance.technician"
                                    type="text"
                                    name="technician"
                                    id="technician"
                                    placeholder="Please enter the technician name"
                                    @blur="$v.maintenance.technician.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <base-form-label
                                    fieldLabel="Completed Date"
                                    required="false"
                                    fieldName="completed_dt"
                                ></base-form-label>
                                <BaseTextInput
                                    v-model="maintenance.completed_dt"
                                    type="date"
                                    name="completed_dt"
                                    id="completed_dt"
                                    placeholder="Please enter the completed date (if applicable)"
                                />
                            </div>

                            <div class="flex flex-col mb-6" :class="{ invalid: $v.maintenance.description.$error }">
                                <BaseFormLabel fieldLabel="Description" required="true" fieldName="description" />
                                <BaseTextarea
                                    v-model="maintenance.description"
                                    name="description"
                                    rows="10"
                                    id="description"
                                    placeholder="Please enter the maintenance description. You can also upload files below."
                                    @blur="$v.maintenance.description.$touch()"
                                />
                            </div>

                            <BaseSubmitButton type="submit" :disabled="$v.$anyError">
                                <font-awesome-icon :icon="['fal', 'save']" size="lg" class="mr-2"></font-awesome-icon>
                                Save Maintenance
                            </BaseSubmitButton>
                            <p v-if="$v.$anyError" class="error">Please fill out the required field(s).</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import BaseFormLabel from "@/components/forms/BaseFormLabel.vue";
import BaseTextInput from "@/components/forms/BaseTextInput.vue";
import BaseTextarea from "@/components/forms/BaseTextarea.vue";
import BaseSelect from "@/components/forms/BaseSelect.vue";
import BaseSubmitButton from "@/components/forms/BaseSubmitButton.vue";

export default {
    data() {
        const vehicleId = this.$route.params.id;
        const maintenanceProcesses = [
            { _id: "Routine Maintenance", name: "Routine Maintenance" },
            { _id: "Minor Repair", name: "Minor Repair" },
            { _id: "Major Repair", name: "Major Repair" }
        ];
        return {
            vehicleId,
            maintenanceProcesses,

            maintenance: this.createFreshMaintenanceObject()
        };
    },
    validations: {
        maintenance: {
            maintenance_process: { required },
            description: { required },
            technician: { required },
            completed_dt: { required }
        }
    },
    components: {
        BaseFormLabel,
        BaseTextInput,
        BaseSelect,
        BaseSubmitButton,
        BaseTextarea
    },

    methods: {
        createFreshMaintenanceObject() {
            return {
                maintenance_process: "",
                description: "",
                technicial: "",
                completed_dt: ""
            };
        },

        handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$log.info(this.maintenance);
                this.$log.info(this.vehicleId);
                this.$store
                    .dispatch("maintenance/post", [this.maintenance, this.vehicleId])
                    .then(response => {
                        this.$log.info(
                            `success! we've successfully submitted the vehicle maintenance ${JSON.stringify(
                                response.data
                            )}`
                        );
                        this.$router.push({
                            path: `/vehicles/view/${this.vehicleId}`
                        });
                    })
                    .catch(error => {
                        this.$log.error(`there was an error with the form submission ${error}`);
                    });
            } else {
                this.$log.error("The form failed the validation rules");
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
