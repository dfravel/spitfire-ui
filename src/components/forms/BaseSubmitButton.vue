<template>
    <div>
        <button v-on="$listeners" v-bind="$attrs" class="btn-form-submit">
            <slot />
        </button>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
