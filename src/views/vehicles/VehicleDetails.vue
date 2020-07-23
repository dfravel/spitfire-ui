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
                            <div class="flex flex-col mb-4">
                                <label class="mb-1 text-gray-700" for="clin">Contract Line Item Number (CLIN)</label>
                                <input
                                    class="form-input mt-1 block w-full"
                                    type="text"
                                    name="clin"
                                    id="clin"
                                    placeholder="Please enter the CLIN"
                                    v-model="clin"
                                />
                            </div>

                            <div class="flex flex-col mb-4">
                                <label class="mb-1 text-gray-700" for="vehicle_type">Vehicle Type</label>
                                <select
                                    class="form-select block w-full"
                                    name="vehicle_type"
                                    id="vehicle_type"
                                    v-model="vehicle_type"
                                >
                                    <option value="">Please Select</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Pickup">Pickup</option>
                                    <option value="Truck">Truck</option>
                                    <option value="Van">Van</option>
                                </select>
                            </div>

                            <div class="flex flex-col mb-4">
                                <label class="mb-1 text-gray-700" for="make">Make</label>
                                <input
                                    class="form-input block w-full"
                                    type="text"
                                    name="make"
                                    id="make"
                                    placeholder="Please enter the make of the vehicle (i.e. Toyota)"
                                    v-model="make"
                                />
                            </div>

                            <div class="flex flex-col mb-4">
                                <label class="mb-1 text-gray-700" for="model">Model</label>
                                <input
                                    class="form-input mt-1 block w-full"
                                    type="text"
                                    name="model"
                                    id="model"
                                    placeholder="Please enter the model of the vehicle"
                                    v-model="model"
                                />
                            </div>

                            <div class="flex flex-col mb-4">
                                <label class="mb-1 text-gray-700" for="status">Model Year</label>
                                <input
                                    class="form-input mt-1 block w-full"
                                    type="number"
                                    name="model_year"
                                    id="model_year"
                                    v-model="model_year"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: ["id"]
};
</script>

<style lang="scss" scoped></style>
