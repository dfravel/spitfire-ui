<template>
    <div>
        <select :value="value" @change="updateValue" v-bind="$attrs" v-on="$listeners" class="form-select block w-full">
            <option v-for="option in options" :value="option._id" :key="option._id">{{ option.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        options: {
            type: Array,
            required: true
        },
        value: [String, Number],
        label: String
    },
    methods: {
        updateValue(event) {
            this.$emit("input", event.target.value);
        }
    }
};
</script>
