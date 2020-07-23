<template>
    <div>
        <div
            class="bg-white shadow-md rounded mt-10 w-1/2 mx-auto text-left px-4 pb-6"
        >
            <h3 class="text-xl pt-6 pb-4">Add a vehicle</h3>
            <form @submit.prevent="handleSubmit">
                <div class="flex flex-col mb-4">
                    <label class="mb-2 text-gray-600" for="make"
                        >Vehicle Make</label
                    >
                    <input
                        class="border py-2 px-3 text-gray-900"
                        type="text"
                        name="make"
                        id="make"
                        placeholder="Please enter the vehicle make"
                        v-model="make"
                    />
                </div>

                <div class="flex flex-col mb-4">
                    <label class="mb-2 text-gray-600" for="model"
                        >Vehicle Model</label
                    >
                    <input
                        class="border py-2 px-3 text-gray-900"
                        type="text"
                        name="model"
                        id="model"
                        placeholder="Please enter the vehicle model"
                        v-model="model"
                    />
                </div>
                <div class="flex flex-col mb-4">
                    <label class="mb-2 text-gray-600" for="model_year"
                        >Model Year</label
                    >
                    <input
                        class="border py-2 px-3 text-gray-900"
                        type="text"
                        name="model_year"
                        id="model_year"
                        placeholder="Please enter the vehicle year"
                        v-model="model_year"
                    />
                </div>
                <button
                    class="block bg-blue-400 hover:bg-blue-800 text-white text-lg p-3 rounded"
                    type="submit"
                >
                    Save Vehicle
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
