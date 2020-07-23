<template>
    <div>
        <li v-for="inspection in inspections" :key="inspection._id">
            <div class="flex border-b border-gray-300 py-3">
                <div class="w-3/6 text-lg">
                    <font-awesome-icon
                        :icon="['fal', 'check-circle']"
                        size="lg"
                        class="text-blue-500 mr-4"
                    ></font-awesome-icon>
                    {{ inspection.inspection_type }}
                </div>

                <div class="text-sm w-2/6">
                    {{ inspection.approval_dt | moment("DD MMMM YYYY") }}
                </div>

                <div class="option-list w-1/6">
                    <router-link
                        class="btn btn-listing-edit"
                        title="View this inspection"
                        :to="{
                            path: `/vehicles/inspection/view/${vehicleId}/${inspection._id}`
                        }"
                    >
                        <font-awesome-icon :icon="['fal', 'search']"></font-awesome-icon>
                    </router-link>
                </div>
            </div>
        </li>
    </div>
</template>

<script>
export default {
    props: {
        inspections: {
            type: Array,
            default: () => [],
            required: true
        },
        vehicleId: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped></style>
