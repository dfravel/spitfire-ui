<template>
    <div class="container mx-auto px-2">
        <div class="mt-4 mb-4">
            <div class="text-right">
                <router-link class="btn btn-secondary" to="/vendors">
                    <font-awesome-icon :icon="['fal', 'industry-alt']" size="lg" class="mr-2"></font-awesome-icon>
                    Return to Vendor List
                </router-link>
            </div>
        </div>
        <div class="bg-white shadow-md rounded my-6">
            <div class="flex flex-row bg-gray-200">
                <div class="w-1/4 my-4 text-left px-8">
                    <div class="text-2xl">
                        Vendor information
                    </div>
                </div>
                <div class="w-3/4 my-4 text-left px-8">
                    <div class="bg-white rounded overflow-hidden shadow-lg">
                        <div class="flex flex-row">
                            <div class="w-1/4  align-middle text-center">
                                <div class="mt-10" v-if="vendor.vendor_type == 'Shipper'">
                                    <font-awesome-layers class="fa-5x">
                                        <font-awesome-icon :icon="['fal', 'circle']" />
                                        <font-awesome-icon
                                            :icon="['fal', 'ship']"
                                            transform="left-2 shrink-8"
                                        ></font-awesome-icon>
                                    </font-awesome-layers>
                                </div>
                                <div class="mt-10" v-else>
                                    <font-awesome-layers class="fa-5x">
                                        <font-awesome-icon :icon="['fal', 'circle']" />
                                        <font-awesome-icon
                                            :icon="['fal', 'cars']"
                                            transform="left-2 shrink-8"
                                        ></font-awesome-icon>
                                    </font-awesome-layers>
                                </div>
                            </div>
                            <div class="w-3/4">
                                <div class="px-6 py-4">
                                    <div class="text-2xl mb-1">{{ vendor.name }}</div>
                                    <div class="text-base">{{ vendor.address }}</div>
                                    <div class="text-base mb-2">
                                        {{ vendor.city }} {{ vendor.state }} {{ vendor.postal_code }}
                                        {{ vendor.country_code }}
                                    </div>
                                </div>
                                <div class="px-6 py-4">
                                    <span
                                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                                        >#send email</span
                                    >
                                    <span
                                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                                        >#visit website</span
                                    >
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
import { mapState, mapActions } from "vuex";

export default {
    data() {
        // using the parameter to get the data for this vendor
        const vendorId = this.$route.params.id;
        return {
            vendorId
        };
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
        })
    }
};
</script>

<style lang="scss" scoped></style>
