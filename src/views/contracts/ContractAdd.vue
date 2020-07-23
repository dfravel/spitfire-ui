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
                    <div class="text-2xl">Contract Information</div>
                    <div class="text-sm">
                        Please enter the main contract information. All fields are required. After successful completion
                        of this page, you'll be directed to a new page where you can enter line item details.
                    </div>
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
                                    step=".01"
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
import { required } from "vuelidate/lib/validators";
import BaseFormLabel from "@/components/forms/BaseFormLabel.vue";
import BaseTextInput from "@/components/forms/BaseTextInput.vue";
import BaseSelect from "@/components/forms/BaseSelect.vue";
import BaseSubmitButton from "@/components/forms/BaseSubmitButton.vue";
import { mapGetters } from "vuex";

export default {
    data() {
        const statuses = [
            { _id: "New", name: "New" },
            { _id: "In Process", name: "In Process" },
            { _id: "Data Required", name: "Data Required" },
            { _id: "Delayed", name: "Delayed" },
            { _id: "Completed", name: "Completed" }
        ];
        return {
            statuses,
            contract: this.createFreshContractObject()
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
    beforeCreate() {
        this.$store.dispatch("vendor/fetch");
    },
    computed: {
        ...mapGetters({
            contracts: "contract/getContracts",
            vendors: "vendor/getVendors"
        })
    },
    methods: {
        createFreshContractObject() {
            return {
                contract_number: null,
                vendor: "",
                number_of_vehicles: "",
                total_contract_value: "",
                status: "",
                awarded_dt: ""
            };
        },

        handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$store
                    .dispatch("contract/post", this.contract)
                    .then(response => {
                        const contractId = response.data[0]["_id"];
                        this.$router.push({
                            path: `/contracts/details/add/${contractId}`
                        });
                        // this.contract = this.createFreshContractObject();
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
