<template>
 <div class="container mx-auto px-2">
             <h2 class="text-red-600 mt-4">
            Shipper Home Page
        </h2>
        <div class="flex flex-wrap -mx-2 mt-10 mb-10">
            <div class="w-1/4 px-2">
                <div class="home-box">
                    <div class="px-6 py-4 mt-3">
                        <img src="@/assets/images/post-shipping-logo.png" />
                        <div class="font-bold text-xl mb-4">Ship/Deliver – Posts</div>
                        <router-link class="btn-home-button" to="/shipper-dashboard"
                            >>> view shipping</router-link
                        >
                    </div>
                </div>
            </div>

            <div class="w-1/4 px-2">
                <div class="home-box">
                    <div class="px-6 py-4 mt-3">
                        <img src="@/assets/images/end-of-life-logo.png" />
                        <div class="font-bold text-xl mb-4">End of Life Status</div>
                        <router-link class="btn-home-button" to="/vehicles">>> view retired</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
