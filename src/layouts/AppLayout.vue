<template>
    <div>
        <Header />
        <NavBar />
    </div>
</template>

<script>
import NavBar from "@/components/shared/NavBar.vue";
import Header from "@/components/shared/Header.vue";
export default {
    components: {
        Header,
        NavBar
    }
};
</script>

<style lang="scss" scoped></style>
