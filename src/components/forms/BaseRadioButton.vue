<template>
    <div>
        <div
            class="flex flex-row radio-button-container justify-between"
            :class="{
                active: this.activeValue === this.radioValue
            }"
            @click="updateActiveValue"
            @keydown.space="updateActiveValue"
        >
            <div>
                <div class="text-base">
                    {{ this.radioLabel }}
                </div>
            </div>

            <div v-if="this.activeValue === this.radioValue">
                <font-awesome-icon :icon="['fal', 'check-circle']" size="lg" class="text-white"></font-awesome-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    model: {
        prop: "activeValue",
        event: "onSelectedValue"
    },
    props: ["radioLabel", "radioValue", "activeValue"],
    methods: {
        updateActiveValue() {
            this.$emit("onSelectedValue", this.radioValue);
        }
    }
};
</script>

<style lang="scss" scoped></style>
