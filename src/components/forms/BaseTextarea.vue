<template>
    <div>
        <textarea
            class="form-input block w-full"
            :value="value"
            @input="updateValue"
            v-bind="$attrs"
            v-on="listeners"
        />
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        value: [String, Number]
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: this.updateValue
            };
        }
    },
    methods: {
        updateValue(event) {
            this.$emit("input", event.target.value);
        }
    }
};
</script>

<style lang="scss" scoped></style>
