<template>
    <div>
        <ul class="pb-2" v-for="option in options" :key="option._id">
            <li>
                <input type="checkbox" :value="option._id" v-bind="$attrs" class="form-checkbox mr-3" />
                <label :for="option._id">{{ option.name }}</label>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        options: {
            type: Array,
            required: true
        }
    }
};
</script>
