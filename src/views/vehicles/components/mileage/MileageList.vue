<template>
    <div>
        <li v-for="miles in mileage" :key="miles._id" class="pb-4">
            <div class="flex flex-row border-b border-gray-300">
                <div class="icon mr-3">
                    <font-awesome-icon
                        :icon="['fal', 'check-circle']"
                        size="lg"
                        class="text-blue-500"
                    ></font-awesome-icon>
                </div>
                <div class="mileage-count text-left w-1/3">
                    <div class="text-xl">{{ miles.miles }}<span class="text-sm ml-1">miles</span></div>
                </div>

                <div class="reported-date text-sm ml-10">
                    {{ miles.reported_dt | moment("DD MMMM YYYY") }}
                </div>
            </div>
        </li>
    </div>
</template>

<script>
export default {
    props: {
        mileage: {
            type: Array,
            default: () => [],
            required: true
        }
    }
};
</script>

<style lang="scss" scoped></style>
