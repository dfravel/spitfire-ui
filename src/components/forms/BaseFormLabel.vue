<template>
    <div class="mb-1 text-gray-700" :class="required === 'true' ? 'required' : ''">
        <label :for="this.fieldName">
            {{ this.fieldLabel }}
            <span v-if="required === 'true'" aria-hidden="true" class="required">*</span>
        </label>
    </div>
</template>

<script>
export default {
    props: ["required", "fieldLabel", "fieldName"]
};
</script>

<style lang="scss" scoped></style>
