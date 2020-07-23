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
                    <div class="text-2xl">Add an Inspection Report</div>
                    <div class="text-sm">
                        Please enter your inspection report. After you successfully save this page you'll be redirected
                        to a form where you can upload any files associated with this inspection.
                    </div>
                </div>
                <div class="w-2/3 my-4 text-left px-8">
                    <div>
                        <form @submit.prevent="handleSubmit">
                            <div class="flex flex-col mb-6" :class="{ invalid: $v.inspection.inspection_type.$error }">
                                <BaseFormLabel
                                    fieldLabel="Inspection Type"
                                    required="true"
                                    fieldName="inspection_type"
                                />
                                <BaseSelect
                                    :options="inspectionTypes"
                                    v-model="inspection.inspection_type"
                                    :class="{
                                        error: $v.inspection.inspection_type.$error
                                    }"
                                    @blur="$v.inspection.inspection_type.$touch()"
                                />
                            </div>

                            <div
                                class="flex flex-col mb-6"
                                :class="{ invalid: $v.inspection.inspection_personnel.$error }"
                            >
                                <base-form-label
                                    fieldLabel="Inspector Personnel"
                                    required="true"
                                    fieldName="inspection_personnel"
                                ></base-form-label>
                                <BaseTextInput
                                    v-model="inspection.inspection_personnel"
                                    type="text"
                                    name="inspection_personnel"
                                    id="inspection_personnel"
                                    placeholder="Please enter the inspection name"
                                    @blur="$v.inspection.inspection_personnel.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <base-form-label
                                    fieldLabel="Approval Date"
                                    required="false"
                                    fieldName="inspection_personnel"
                                ></base-form-label>
                                <BaseTextInput
                                    v-model="inspection.approval_dt"
                                    type="date"
                                    name="approval_dt"
                                    id="approval_dt"
                                    placeholder="Please enter the approval date (if applicable)"
                                />
                            </div>

                            <div
                                class="flex flex-col mb-6"
                                :class="{ invalid: $v.inspection.inspection_result.$error }"
                            >
                                <BaseFormLabel
                                    fieldLabel="Inspection Result"
                                    required="true"
                                    fieldName="inspection_result"
                                />
                                <BaseTextarea
                                    v-model="inspection.inspection_result"
                                    name="inspection_result"
                                    rows="10"
                                    id="inspection_result"
                                    placeholder="Please enter the inspection results."
                                    @blur="$v.inspection.inspection_result.$touch()"
                                />
                            </div>

                            <BaseSubmitButton type="submit" :disabled="$v.$anyError">
                                <font-awesome-icon :icon="['fal', 'save']" size="lg" class="mr-2"></font-awesome-icon>
                                Save Inspection
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
        const inspectionTypes = [
            { _id: "Mid-Build", name: "Mid-Build" },
            { _id: "Final", name: "Final" },
            { _id: "Incident", name: "Incident" },
            { _id: "Recommend Disposal", name: "Recommend Dispopsal" }
        ];
        return {
            vehicleId,
            inspectionTypes,

            inspection: this.createFreshInspectionObject()
        };
    },
    validations: {
        inspection: {
            inspection_type: { required },
            inspection_result: { required },
            inspection_personnel: { required }
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
        createFreshInspectionObject() {
            return {
                inspection_type: "",
                inspection_personnel: "",
                inspection_result: "",
                approval_dt: ""
            };
        },

        handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$log.info(this.inspection);
                this.$log.info(this.vehicleId);
                this.$store
                    .dispatch("inspection/post", [this.inspection, this.vehicleId])
                    .then(response => {
                        this.$log.info(
                            `success! we've successfully submitted the vehicle inspection ${JSON.stringify(
                                response.data
                            )}`
                        );
                        this.$router.push({
                            path: `/vehicles/inspection/attachment/add/${this.vehicleId}/${response.data[0]["_id"]}/`
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
