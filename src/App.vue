<template>
    <div id="app" class="font-sans bg-gray-100 flex flex-col min-h-screen w-full h-full relative">
        <div class="fixed w-full top-0 shadow z-10">
            <Header />
            <NavBar />
            <NotificationContainer />
        </div>

        <div class="pt-24">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </div>

        <Footer />
    </div>
</template>

<script>
import NavBar from "@/components/shared/NavBar.vue";
import Header from "@/components/shared/Header.vue";
import Footer from "@/components/shared/Footer.vue";
import NotificationContainer from "@/components/shared/NotificationContainer.vue";
export default {
    components: {
        Header,
        NavBar,
        Footer,
        NotificationContainer
    }
};
</script>

<style lang="scss" scoped>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.fade-enter {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-out;
}

.fade-leave-to {
    opacity: 0;
}

.slide-fade-enter {
    transform: translateX(10px);
    opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.5s ease-out;
}

.slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
}
</style>
