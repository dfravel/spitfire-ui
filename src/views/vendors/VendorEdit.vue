<template>
    <div class="container mx-auto px-2">
        <div class="mt-4 mb-4">
            <div class="text-right">
                <router-link class="btn btn-secondary" to="/vendors">
                    <font-awesome-icon :icon="['fal', 'industry-alt']" size="lg" class="mr-2"></font-awesome-icon>
                    Cancel and return
                </router-link>
            </div>
        </div>
        <div class="bg-white shadow-md rounded my-6">
            <div class="flex flex-row bg-gray-200">
                <div class="w-1/3 my-4 text-left px-8">
                    <div class="text-2xl">Edit a Vendor</div>
                    <div class="text-sm">
                        Please edit the vendor information. Required fields are indicated in red.
                    </div>
                </div>
                <div class="w-2/3 my-4 text-left px-8">
                    <div>
                        <form @submit.prevent="handleSubmit">
                            <div class="flex flex-col mb-6" :class="{ invalid: $v.vendor.name.$error }">
                                <BaseFormLabel fieldLabel="Vendor Name" required="true" fieldName="name" />
                                <BaseTextInput
                                    v-model="vendor.name"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Please enter the vendor's name"
                                    :value="vendor.name"
                                    @blur="$v.vendor.name.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-6" :class="{ invalid: $v.vendor.vendor_type.$error }">
                                <BaseFormLabel fieldLabel="Vendor Type" required="true" fieldName="vendor_type" />
                                <BaseSelect
                                    :options="vendorTypes"
                                    v-model="vendor.vendor_type"
                                    :class="{
                                        error: $v.vendor.vendor_type.$error
                                    }"
                                    @blur="$v.vendor.vendor_type.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-6" :class="{ invalid: $v.vendor.contact.$error }">
                                <BaseFormLabel fieldLabel="Main Contact" required="true" fieldName="contact" />
                                <BaseTextInput
                                    v-model="vendor.contact"
                                    type="text"
                                    name="contact"
                                    id="contact"
                                    placeholder="Please enter the name of the main contact"
                                    @blur="$v.vendor.contact.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="Street Address" required="false" fieldName="address" />
                                <BaseTextInput
                                    v-model="vendor.address"
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Please enter the vendor's street address"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="City/Town" required="false" fieldName="city" />
                                <BaseTextInput
                                    v-model="vendor.city"
                                    type="text"
                                    name="city"
                                    id="city"
                                    placeholder="Please enter the vendor's city/town/municipality"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="State" required="false" fieldName="state" />
                                <BaseTextInput
                                    v-model="vendor.state"
                                    type="text"
                                    name="state"
                                    id="state"
                                    placeholder="Please enter the vendor's state"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="Postal Code" required="false" fieldName="postal_code" />
                                <BaseTextInput
                                    v-model="vendor.postal_code"
                                    type="text"
                                    name="postal_code"
                                    id="postal_code"
                                    placeholder="Please enter the vendor's postal code"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="Country" required="false" fieldName="country_code" />
                                <BaseTextInput
                                    v-model="vendor.country_code"
                                    type="text"
                                    name="country_code"
                                    id="country_code"
                                    placeholder="Please enter the vendor's country"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="Phone" required="false" fieldName="phone" />
                                <BaseTextInput
                                    v-model="vendor.phone"
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Please enter the vendor's main phone number"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="Email Address" required="false" fieldName="email" />
                                <BaseTextInput
                                    v-model="vendor.email"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Please enter the vendor's main email address"
                                />
                            </div>

                            <div class="flex flex-col mb-6">
                                <BaseFormLabel fieldLabel="Website" required="false" fieldName="website" />
                                <BaseTextInput
                                    v-model="vendor.website"
                                    type="url"
                                    name="website"
                                    id="website"
                                    placeholder="Please enter the vendor's website (if known)"
                                />
                            </div>

                            <BaseSubmitButton type="submit" :disabled="$v.$anyError">
                                <font-awesome-icon :icon="['fal', 'save']" size="lg" class="mr-2"></font-awesome-icon>
                                Update Vendor
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
import { mapState, mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";
import BaseFormLabel from "@/components/forms/BaseFormLabel.vue";
import BaseTextInput from "@/components/forms/BaseTextInput.vue";
import BaseSelect from "@/components/forms/BaseSelect.vue";
import BaseSubmitButton from "@/components/forms/BaseSubmitButton.vue";

export default {
    data() {
        // using the parameter to get the data for this vendor
        const vendorId = this.$route.params.id;
        const vendorTypes = [
            { _id: "Manufacturer", name: "Manufacturer" },
            { _id: "Shipper", name: "Shipper" }
        ];
        return {
            vendorId,
            vendorTypes
        };
    },
    validations: {
        vendor: {
            name: { required },
            vendor_type: { required },
            contact: { required }
        }
    },
    components: {
        BaseFormLabel,
        BaseTextInput,
        BaseSelect,
        BaseSubmitButton
    },
    computed: mapState({
        vendor: state => state.vendor.vendor
    }),
    created() {
        this.getById(this.vendorId);
        this.$log.info(`the page has been created and the vendor information is ` + JSON.stringify(this.vendor));
    },

    mounted() {
        this.$log.info(`the page has been mounted and the vendor information is ` + JSON.stringify(this.vendor));
    },

    methods: {
        ...mapActions({
            getById: "vendor/getById"
        }),

        handleSubmit() {
            this.$log.info(
                `the form has been submitted. the updated vendor information is ` + JSON.stringify(this.vendor)
            );
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$log.info(`here i am`);
                this.$log.info(this.vendor);
                this.$store
                    .dispatch("vendor/put", this.vendor)
                    .then(response => {
                        this.$log.info(
                            `success! we've successfully updated the vendor ${JSON.stringify(response.data)}`
                        );
                        this.$router.push({
                            path: `/vendors/details/view/` + this.vendorId
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
