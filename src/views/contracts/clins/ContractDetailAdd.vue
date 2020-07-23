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

        <!-- CLIN Section -->
        <form @submit.prevent="handleSubmit">
            <div class="bg-white shadow-md rounded my-6">
                <div class="flex flex-row bg-gray-200">
                    <div class="w-1/3 my-4 text-left px-8">
                        <div class="text-2xl">Contract Line Details</div>
                        <div class="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                    <div class="w-2/3 my-4 text-left px-8">
                        <div>
                            <div class="flex flex-col mb-6" :class="{ invalid: $v.contractLine.clin.$error }">
                                <BaseFormLabel
                                    fieldLabel="Contract Line Item Number (CLIN)"
                                    required="true"
                                    fieldName="clin"
                                />
                                <BaseTextInput
                                    v-model="contractLine.clin"
                                    type="text"
                                    name="clin"
                                    id="clin"
                                    placeholder="Please enter the CLIN"
                                    @blur="$v.contractLine.clin.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-4" :class="{ invalid: $v.contractLine.vehicle_type.$error }">
                                <BaseFormLabel fieldLabel="Vehicle Type" required="true" fieldName="vehicle_type" />
                                <BaseSelect
                                    :options="vehicleTypes"
                                    v-model="contractLine.vehicle_type"
                                    :class="{
                                        error: $v.contractLine.vehicle_type.$error
                                    }"
                                    @blur="$v.contractLine.vehicle_type.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-4" :class="{ invalid: $v.contractLine.make.$error }">
                                <BaseFormLabel fieldLabel="Make" required="true" fieldName="make" />
                                <BaseTextInput
                                    v-model="contractLine.make"
                                    type="text"
                                    name="make"
                                    id="make"
                                    placeholder="Please enter the make of the vehicle (i.e. Toyota)"
                                    @blur="$v.contractLine.make.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-4" :class="{ invalid: $v.contractLine.model.$error }">
                                <BaseFormLabel fieldLabel="Model" required="true" fieldName="model" />
                                <BaseTextInput
                                    v-model="contractLine.model"
                                    type="text"
                                    name="model"
                                    id="model"
                                    placeholder="Please enter the model of the vehicle"
                                    @blur="$v.contractLine.model.$touch()"
                                />
                            </div>

                            <div class="flex flex-col mb-4" :class="{ invalid: $v.contractLine.model_year.$error }">
                                <BaseFormLabel fieldLabel="Model Year" required="true" fieldName="model_year" />
                                <BaseTextInput
                                    v-model="contractLine.model_year"
                                    type="text"
                                    name="model_year"
                                    id="model_year"
                                    placeholder="Please enter the model year of the vehicle(s)"
                                    @blur="$v.contractLine.model_year.$touch()"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white shadow-md rounded my-6">
                <div class="flex flex-row bg-gray-200">
                    <div class="w-1/3 my-4 text-left px-8">
                        <div class="text-2xl">Quantity and Price</div>
                        <div class="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                    <div class="w-2/3 my-4 text-left px-8">
                        <div class="flex flex-col mb-4" :class="{ invalid: $v.contractLine.quantity.$error }">
                            <BaseFormLabel fieldLabel="Quantity Required" required="true" fieldName="quantity" />
                            <BaseTextInput
                                v-model="contractLine.quantity"
                                type="text"
                                name="quantity"
                                id="quantity"
                                placeholder="Please enter the quantity required"
                                @blur="$v.contractLine.quantity.$touch()"
                            />
                        </div>

                        <div class="flex flex-col mb-4" :class="{ invalid: $v.contractLine.unit_price.$error }">
                            <BaseFormLabel fieldLabel="Unit Price" required="true" fieldName="unit_price" />
                            <BaseTextInput
                                v-model="contractLine.unit_price"
                                type="text"
                                name="unit_price"
                                id="unit_price"
                                placeholder="Please enter the unit price for each vehicle"
                                @blur="$v.contractLine.unit_price.$touch()"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Armor Package  -->
            <div class="bg-white shadow-md rounded my-6">
                <div class="flex flex-row bg-gray-200">
                    <div class="w-1/3 my-4 text-left px-8">
                        <div class="text-2xl">Armor Requirements</div>
                        <div class="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                    <div class="w-2/3 my-4 text-left px-8">
                        <div class="flex flex-col mb-6" :class="{ invalid: $v.contractLine.armor_level.$error }">
                            <BaseFormLabel fieldLabel="Armor Level" required="true" fieldName="armor_level" />
                            <BaseSelect
                                :options="armorLevels"
                                v-model="contractLine.armor_level"
                                :class="{
                                    error: $v.contractLine.armor_level.$error
                                }"
                                @blur="$v.contractLine.armor_level.$touch()"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Airbag Configuration  -->
            <div class="bg-white shadow-md rounded my-6">
                <div class="flex flex-row bg-gray-200">
                    <div class="w-1/3 my-4 text-left px-8">
                        <div class="text-2xl">Airbag Config</div>
                        <div class="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                    <div class="w-2/3 my-4 text-left px-8">
                        <BaseFormLabel fieldLabel="Airbag Configuration" required="false" fieldName="airbag_config" />
                        <BaseCheckbox
                            :options="airbagConfigOptions"
                            v-model="contractLine.airbag_config"
                            name="airbag_config"
                        />
                    </div>
                </div>
            </div>

            <!-- Glass Tinting  -->
            <div class="bg-white shadow-md rounded my-6">
                <div class="flex flex-row bg-gray-200">
                    <div class="w-1/3 my-4 text-left px-8">
                        <div class="text-2xl">Glass Tinting</div>
                        <div class="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                    <div class="w-2/3 my-4 text-left px-8">
                        <BaseFormLabel fieldLabel="Glass Tinting Options" required="false" fieldName="glass_tinting" />
                        <BaseCheckbox
                            :options="glassTintingOptions"
                            v-model="contractLine.glass_tinting"
                            name="glass_tinting"
                        />
                    </div>
                </div>
            </div>

            <div class="bg-white shadow-md rounded my-6">
                <div class="flex flex-row bg-gray-200">
                    <div class="w-1/3 my-4 text-left px-8">
                        <div class="text-2xl">Communications Equipment</div>
                        <div class="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                    <div class="w-2/3 my-4 text-left px-8">
                        <div class="flex flex-row mb-6 w-full">
                            <div class="w-1/2 pr-4">
                                <BaseFormLabel
                                    fieldLabel="Tactical Package"
                                    required="false"
                                    fieldName="tactical_package"
                                />
                                <div class="flex flex-col">
                                    <BaseRadioButton
                                        radioLabel="Basic"
                                        radioValue="Basic"
                                        v-model="contractLine.tactical_package"
                                    />
                                    <BaseRadioButton
                                        radioLabel="Plus"
                                        radioValue="Plus"
                                        v-model="contractLine.tactical_package"
                                    />
                                </div>
                            </div>

                            <div class="w-1/2">
                                <BaseFormLabel fieldLabel="Audio Package" required="false" fieldName="audio_package" />
                                <div class="flex flex-col">
                                    <BaseRadioButton
                                        radioLabel="Standard"
                                        radioValue="Standard"
                                        v-model="contractLine.audio_package"
                                    />
                                    <BaseRadioButton
                                        radioLabel="Upgrade"
                                        radioValue="Upgrade"
                                        v-model="contractLine.audio_package"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white shadow-md rounded my-6">
                <div class="flex flex-row bg-gray-200">
                    <div class="w-1/3 my-4 text-left px-8">
                        <div class="text-2xl">Additional Specifications</div>
                        <div class="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                    <div class="w-2/3 my-4 text-left px-8">
                        <div class="flex flex-col mb-4">
                            <BaseFormLabel fieldLabel="Trim Package" required="false" fieldName="trim_package" />
                            <BaseTextInput
                                v-model="contractLine.trim_package"
                                type="text"
                                name="trim_package"
                                id="trim_package"
                                placeholder="Please enter the trim package"
                            />
                        </div>

                        <div class="flex flex-col mb-4">
                            <BaseFormLabel fieldLabel="Curb Weight (kg)" required="false" fieldName="curb_weight" />
                            <BaseTextInput
                                v-model="contractLine.curb_weight"
                                type="number"
                                step=".01"
                                name="curb_weight"
                                id="curb_weight"
                                placeholder="Please enter the curb weight in kilograms"
                            />
                        </div>

                        <div class="flex flex-col mb-4">
                            <BaseFormLabel
                                fieldLabel="Engine Size (cubic liters)"
                                required="false"
                                fieldName="engine_size"
                            />
                            <BaseTextInput
                                v-model="contractLine.engine_size"
                                type="number"
                                step=".01"
                                name="engine_size"
                                id="engine_size"
                                placeholder="Please enter the engine size in cubic liters"
                            />
                        </div>

                        <div class="flex flex-col mb-4">
                            <BaseFormLabel fieldLabel="Gross Weight (kg)" required="false" fieldName="gross_weight" />
                            <BaseTextInput
                                v-model="contractLine.gross_weight"
                                type="number"
                                step=".01"
                                name="gross_weight"
                                id="gross_weight"
                                placeholder="Please enter the gross weight in kilograms"
                            />
                        </div>

                        <div class="flex flex-col mb-4">
                            <BaseFormLabel
                                fieldLabel="Spare Parts Kits (1-5)"
                                required="false"
                                fieldName="spare_parts_kits"
                            />
                            <BaseTextInput
                                v-model="contractLine.spare_parts_kits"
                                type="number"
                                step=".01"
                                name="spare_parts_kits"
                                id="spare_parts_kits"
                                placeholder="Please enter the number of spare parts kits required (1-5)"
                            />
                        </div>

                        <div class="flex flex-row mb-6 w-full">
                            <div class="w-1/2 pr-4">
                                <BaseFormLabel
                                    fieldLabel="Number of Doors"
                                    required="false"
                                    fieldName="number_of_doors"
                                />
                                <BaseTextInput
                                    v-model="contractLine.number_of_doors"
                                    type="number"
                                    name="number_of_doors"
                                    id="number_of_doors"
                                    placeholder="Please enter the number of doors"
                                />
                            </div>

                            <div class="w-1/2">
                                <BaseFormLabel
                                    fieldLabel="Number of Seats"
                                    required="false"
                                    fieldName="number_of_seats"
                                />
                                <BaseTextInput
                                    v-model="contractLine.number_of_seats"
                                    type="number"
                                    name="number_of_seats"
                                    id="number_of_seats"
                                    placeholder="Please enter the number of seats"
                                />
                            </div>
                        </div>

                        <div class="flex flex-row mb-6 w-full">
                            <div class="w-1/2 pr-4">
                                <BaseFormLabel fieldLabel="Drive Train" required="false" fieldName="drive_train" />
                                <div class="flex flex-col">
                                    <BaseRadioButton
                                        radioLabel="LHD"
                                        radioValue="LHD"
                                        v-model="contractLine.drive_train"
                                    />
                                    <BaseRadioButton
                                        radioLabel="RHD"
                                        radioValue="RHD"
                                        v-model="contractLine.drive_train"
                                    />
                                </div>
                            </div>

                            <div class="w-1/2">
                                <BaseFormLabel fieldLabel="Drive Type" />
                                <div class="flex flex-col">
                                    <BaseRadioButton
                                        radioLabel="AWD"
                                        radioValue="AWD"
                                        v-model="contractLine.drive_type"
                                    />
                                    <BaseRadioButton
                                        radioLabel="2WD"
                                        radioValue="2WD"
                                        v-model="contractLine.drive_type"
                                    />
                                    <BaseRadioButton
                                        radioLabel="4WD"
                                        radioValue="4WD"
                                        v-model="contractLine.drive_type"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-row mb-6 w-full">
                            <div class="w-1/2 pr-4">
                                <div class="flex flex-col">
                                    <BaseFormLabel fieldLabel="Transmission" />
                                    <div class="flex flex-col">
                                        <BaseRadioButton
                                            radioLabel="Automatic"
                                            radioValue="Automatic"
                                            v-model="contractLine.transmission"
                                        />

                                        <BaseRadioButton
                                            radioLabel="Standard"
                                            radioValue="Standard"
                                            v-model="contractLine.transmission"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="w-1/2">
                                <div class="flex flex-col">
                                    <BaseFormLabel fieldLabel="Fuel Type" />
                                    <div class="flex flex-col">
                                        <BaseRadioButton
                                            radioLabel="Gas"
                                            radioValue="Gas"
                                            v-model="contractLine.fuel_type"
                                        />
                                        <BaseRadioButton
                                            radioLabel="Diesel"
                                            radioValue="Diesel"
                                            v-model="contractLine.fuel_type"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-row mb-6 w-full">
                            <div class="w-1/2 pr-4">
                                <BaseFormLabel fieldLabel="Exterior Color" />
                                <div class="flex flex-col">
                                    <BaseRadioButton
                                        radioLabel="Dark"
                                        radioValue="Dark"
                                        v-model="contractLine.exterior_color"
                                    />
                                    <BaseRadioButton
                                        radioLabel="Light"
                                        radioValue="Light"
                                        v-model="contractLine.exterior_color"
                                    />
                                </div>
                            </div>
                            <div class="w-1/2">
                                <BaseFormLabel fieldLabel="Interior Color" />

                                <div class="flex flex-col">
                                    <BaseRadioButton
                                        radioLabel="Dark"
                                        radioValue="Dark"
                                        v-model="contractLine.interior_color"
                                    />
                                    <BaseRadioButton
                                        radioLabel="Light"
                                        radioValue="Light"
                                        v-model="contractLine.interior_color"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white shadow-md rounded my-6">
                <div class="flex flex-row bg-gray-200">
                    <div class="w-1/3 my-4 text-left px-8">
                        &nbsp;
                    </div>
                    <div class="w-2/3 my-4 text-left px-8">
                        <BaseSubmitButton type="submit" :disabled="$v.$anyError">
                            <font-awesome-icon :icon="['fal', 'save']" size="lg" class="mr-2"></font-awesome-icon>
                            Save Contract Line
                        </BaseSubmitButton>
                        <p v-if="$v.$anyError" class="error">
                            Please fill out the required field(s). Please scroll up to see the required fields and
                            individual errors.
                        </p>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import BaseFormLabel from "@/components/forms/BaseFormLabel.vue";
import BaseTextInput from "@/components/forms/BaseTextInput.vue";
import BaseSelect from "@/components/forms/BaseSelect.vue";
import BaseSubmitButton from "@/components/forms/BaseSubmitButton.vue";
import BaseRadioButton from "@/components/forms/BaseRadioButton.vue";
import BaseCheckbox from "@/components/forms/BaseCheckbox.vue";
export default {
    data() {
        const contractId = this.$route.params.id;

        const armorLevels = [
            { _id: "B4+", name: "B4+" },
            { _id: "B6", name: "B6" },
            { _id: "B6/7", name: "B6/7" },
            { _id: "B7", name: "B7" }
        ];

        const airbagConfigOptions = [
            { _id: "Front", name: "Front" },
            { _id: "Rear", name: "Rear" },
            { _id: "Side", name: "Side" }
        ];

        const glassTintingOptions = [
            { _id: "Front - Dark", name: "Front - Dark" },
            { _id: "Front - Medium", name: "Front - Medium" },
            { _id: "Front - Light", name: "Front - Light" },

            { _id: "Rear - Dark", name: "Rear - Dark" },
            { _id: "Rear - Medium", name: "Rear - Medium" },
            { _id: "Rear - Light", name: "Rear - Light" },

            { _id: "Sides - Dark", name: "Sides - Dark" },
            { _id: "Sides - Medium", name: "Sides - Medium" },
            { _id: "Sides - Light", name: "Sides - Light" }
        ];

        const vehicleTypes = [
            { _id: "SUV", name: "SUV" },
            { _id: "Sedan", name: "Sedan" },
            { _id: "Pickup", name: "Pickup" },
            { _id: "Truck", name: "Truck" },
            { _id: "Van", name: "Van" }
        ];

        return {
            contractId,
            armorLevels,
            vehicleTypes,
            airbagConfigOptions,
            glassTintingOptions,
            contractLine: this.createFreshContractLineObject()
        };
    },
    validations: {
        contractLine: {
            clin: { required },
            vehicle_type: { required },
            make: { required },
            model: { required },
            model_year: { required },
            armor_level: { required },
            quantity: { required },
            unit_price: { required }
        }
    },

    // mounted() {
    //     console.log("The id is: " + this.$route.params.id);
    // },

    components: {
        BaseFormLabel,
        BaseTextInput,
        BaseSelect,
        BaseSubmitButton,
        BaseRadioButton,
        BaseCheckbox
    },
    methods: {
        createFreshContractLineObject() {
            return {
                interior_color: "Light",
                abs: "true",
                exterior_color: "Dark",
                drive_type: "4WD",
                drive_train: "RHD",
                transmission: "Automatic",
                fuel_type: "Gas",
                number_of_seats: "4",
                number_of_doors: "4",
                make: "",
                model: "",
                model_year: "",
                armor_level: "",
                unit_price: "",
                quantity: "",
                clin: "",
                vehicle_type: "",
                trim_package: "",
                airbag_config: "Front",
                curb_weight: "",
                gross_weight: "",
                glass_tinting: "Front - Dark",
                engine_size: "",
                tactical_package: "Basic",
                audio_package: "Standard",
                spare_parts_kits: "2"
            };
        },
        handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$log.info(`We're pushing in ${JSON.stringify(this.contractLine)}`);
                this.$log.info(`the contract id is ${this.contractId}`);
                this.$store
                    .dispatch("contractLine/post", [this.contractLine, this.contractId])
                    .then(response => {
                        this.$log.info(
                            `success! we've successfully submitted the post ${JSON.stringify(response.data)}`
                        );
                        this.$router.push({
                            path: `/contracts/`
                        });
                        // this.contract = this.createFreshContractObject();
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
