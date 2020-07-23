<template>
    <div class="container mx-auto px-2">
        <div class="mt-4">
            <div class="text-right">
                <router-link class="btn btn-secondary" to="/contracts">
                    <font-awesome-icon :icon="['fal', 'file-contract']" size="lg" class="mr-2"></font-awesome-icon>
                    Cancel and return
                </router-link>
            </div>
        </div>
        <div class="bg-white shadow-md rounded my-6">
            <div class="flex flex-row bg-gray-200">
                <div class="w-1/3 my-4 text-left px-8">
                    <div class="text-2xl">Edit Contract Information</div>
                </div>
                <div class="w-2/3 my-4 text-left px-8">
                    <div>
                        <form @submit.prevent="handleSubmit">
                            <div class="flex flex-col mb-6" :class="{ invalid: $v.contract.contract_number.$error }">
                                <BaseFormLabel
                                    fieldLabel="Contract Number"
                                    required="true"
                                    fieldName="contract_number"
                                />
                                <BaseTextInput
                                    v-model="contract.contract_number"
                                    type="text"
                                    name="contract_number"
                                    id="contract_number"
                                    placeholder="Please enter the contract number"
                                    @blur="$v.contract.contract_number.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-6" :class="{ invalid: $v.contract.vendor.$error }">
                                <BaseFormLabel fieldLabel="Awarded To (Vendor)" required="true" fieldName="vendor" />
                                <BaseSelect
                                    :options="vendors"
                                    v-model="contract.vendor"
                                    :class="{
                                        error: $v.contract.vendor.$error
                                    }"
                                    @blur="$v.contract.vendor.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-6" :class="{ invalid: $v.contract.number_of_vehicles.$error }">
                                <BaseFormLabel
                                    fieldLabel="Number of Vehicles"
                                    required="true"
                                    fieldName="number_of_vehicles"
                                />
                                <BaseTextInput
                                    v-model="contract.number_of_vehicles"
                                    type="number"
                                    name="number_of_vehicles"
                                    id="number_of_vehicles"
                                    placeholder="Please enter the number of vehicles on the contract"
                                    @blur="$v.contract.number_of_vehicles.$touch()"
                                />
                            </div>

                            <div
                                class="flex flex-col mb-6"
                                :class="{ invalid: $v.contract.total_contract_value.$error }"
                            >
                                <base-form-label
                                    fieldLabel="Total Contract Value"
                                    required="true"
                                    fieldName="total_contract_value"
                                ></base-form-label>
                                <BaseTextInput
                                    v-model="contract.total_contract_value"
                                    type="number"
                                    name="total_contract_value"
                                    id="total_contract_value"
                                    placeholder="Please enter the total contract value"
                                    @blur="$v.contract.total_contract_value.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-6" :class="{ invalid: $v.contract.status.$error }">
                                <BaseFormLabel fieldLabel="Contract Status" required="true" fieldName="status" />
                                <BaseSelect
                                    :options="statuses"
                                    v-model="contract.status"
                                    :class="{
                                        error: $v.contract.status.$error
                                    }"
                                    @blur="$v.contract.status.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-6" :class="{ invalid: $v.contract.awarded_dt.$error }">
                                <BaseFormLabel
                                    fieldLabel="Contract Awarded Date"
                                    required="true"
                                    fieldName="awarded_dt"
                                />
                                <BaseTextInput
                                    v-model="contract.awarded_dt"
                                    type="date"
                                    name="awarded_dt"
                                    id="awarded_dt"
                                    placeholder="Please enter the date the contract was awarded"
                                    @blur="$v.contract.awarded_dt.$touch()"
                                />
                            </div>
                            <BaseSubmitButton type="submit" :disabled="$v.$anyError">
                                <font-awesome-icon :icon="['fal', 'save']" size="lg" class="mr-2"></font-awesome-icon>
                                Save Contract
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
        const contractId = this.$route.params.id;
        const statuses = [
            { _id: "New", name: "New" },
            { _id: "In Process", name: "In Process" },
            { _id: "Data Required", name: "Data Required" },
            { _id: "Delayed", name: "Delayed" },
            { _id: "Completed", name: "Completed" }
        ];
        return {
            contractId,
            statuses
        };
    },
    validations: {
        contract: {
            contract_number: { required },
            vendor: { required },
            number_of_vehicles: { required },
            total_contract_value: { required },
            status: { required },
            awarded_dt: { required }
        }
    },
    components: {
        BaseFormLabel,
        BaseTextInput,
        BaseSelect,
        BaseSubmitButton
    },

    created() {
        this.getById(this.contractId);
        this.getVendors();
        this.$log.info(`the page has been created and the contract information is ` + JSON.stringify(this.contract));
    },

    mounted() {
        this.$log.info(`the page has been mounted and the contract information is ` + JSON.stringify(this.contract));
    },
    computed: mapState({
        vendors: state => state.vendor.vendors,
        contract: state => state.contract.contract
    }),

    methods: {
        ...mapActions({
            getById: "contract/getById",
            getVendors: "vendor/fetch"
        }),

        handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$store
                    .dispatch("contract/put", this.contract)
                    .then(response => {
                        this.$log.info(
                            `success! we've successfully updated the contract ${JSON.stringify(response.data)}`
                        );
                        this.$router.push({
                            path: `/contracts/view/` + this.contractId
                        });
                    })
                    .catch(() => {
                        this.$log.info("this is a test");
                    });
            } else {
                this.$log.info("an error occurred and we are exiting");
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
