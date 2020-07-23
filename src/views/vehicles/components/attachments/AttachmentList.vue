<template>
    <div>
        <li v-for="attachment in attachments" :key="attachment._id">
            <div class="flex border-b border-gray-300 py-3 justify-between">
                <div class="w-5/6 text-lg">
                    <font-awesome-icon
                        :icon="['fal', 'check-circle']"
                        size="lg"
                        class="text-blue-500 mr-4"
                    ></font-awesome-icon>
                    {{ attachment.name }}
                </div>

                <div class="option-list w-1/6">
                    <router-link
                        class="btn btn-listing-edit"
                        title="View this attachment"
                        :to="{
                            path: `/vehicles/attachments/view/${vehicleId}/${attachment._id}`
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
        attachments: {
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
