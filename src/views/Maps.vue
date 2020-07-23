<template>
    <div class="container mx-auto">
        <div class="bg-white shadow-md rounded my-6">
            <div class="flex flex-row bg-gray-200">
                <div class="w-1/4 my-4 text-left px-8">
                    <div class="text-2xl">
                        Sample Maps
                    </div>
                    <div class="mt-6 ml-6">
                        <font-awesome-layers class="fa-5x">
                            <font-awesome-icon :icon="['fal', 'circle']" />
                            <font-awesome-icon :icon="['fal', 'map-marker']" transform="shrink-8"></font-awesome-icon>
                        </font-awesome-layers>
                    </div>
                </div>
                <div class="w-3/4 my-4 text-left px-8">
                    <div class="bg-white rounded overflow-hidden shadow-lg">
                        <div class="flex flex-row">
                            <div class="w-1/2 pt-10 align-middle text-center">
                                <div class="px-6 py-4">
                                    View Map of Vehicles at Posts
                                </div>
                                <div class="pt-10 pb-20">
                                    <router-link class="btn btn-secondary" to="/maps/vehicles-by-post">
                                        <font-awesome-icon
                                            :icon="['fal', 'map-marker']"
                                            size="lg"
                                            class="mr-2"
                                        ></font-awesome-icon>
                                        View Map
                                    </router-link>
                                </div>
                            </div>
                            <div class="w-1/2 pt-10 align-middle text-center">
                                <div class="px-6 py-4">
                                    View Map of Vehicles at Sea
                                </div>
                                <div class="pt-10 pb-20">
                                    <a class="btn btn-secondary" href="https://www.marinetraffic.com" target="_blank">
                                        <font-awesome-icon
                                            :icon="['fal', 'map-marker']"
                                            size="lg"
                                            class="mr-2"
                                        ></font-awesome-icon>
                                        View Map
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
