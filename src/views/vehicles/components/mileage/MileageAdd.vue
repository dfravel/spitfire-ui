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
                    <div class="text-2xl">Report Mileage</div>
                    <div class="text-sm">
                        Please enter the mileage and date recorded.
                    </div>
                </div>
                <div class="w-2/3 my-4 text-left px-8">
                    <div>
                        <form @submit.prevent="handleSubmit">
                            <div class="flex flex-col mb-6" :class="{ invalid: $v.mileage.miles.$error }">
                                <BaseFormLabel fieldLabel="Miles" required="true" fieldName="miles" />
                                <BaseTextInput
                                    v-model="mileage.miles"
                                    type="text"
                                    name="miles"
                                    id="miles"
                                    placeholder="Please enter the mileage"
                                    @blur="$v.mileage.miles.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <base-form-label
                                    fieldLabel="Reported Date"
                                    required="true"
                                    fieldName="reported_dt"
                                ></base-form-label>
                                <BaseTextInput
                                    v-model="mileage.reported_dt"
                                    type="date"
                                    name="reported_dt"
                                    id="reported_dt"
                                    placeholder="Please enter the mileage date"
                                />
                            </div>

                            <BaseSubmitButton type="submit" :disabled="$v.$anyError">
                                <font-awesome-icon :icon="['fal', 'save']" size="lg" class="mr-2"></font-awesome-icon>
                                Save Mileage
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
import BaseSubmitButton from "@/components/forms/BaseSubmitButton.vue";

export default {
    data() {
        const vehicleId = this.$route.params.id;
        return {
            vehicleId,
            mileage: this.createFreshMileageObject()
        };
    },
    validations: {
        mileage: {
            miles: { required },
            reported_dt: { required }
        }
    },
    components: {
        BaseFormLabel,
        BaseTextInput,
        BaseSubmitButton
    },

    methods: {
        createFreshMileageObject() {
            return {
                miles: "",
                reported_dt: ""
            };
        },

        handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$log.info(this.mileage);
                this.$log.info(this.vehicleId);
                this.$store
                    .dispatch("mileage/post", [this.mileage, this.vehicleId])
                    .then(response => {
                        this.$log.info(
                            `success! we've successfully submitted the vehicle mileage ${JSON.stringify(response.data)}`
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
