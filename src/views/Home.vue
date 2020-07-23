<template>
    <div class="container mx-auto px-2">
        <h2 class="text-red-600 mt-4">
            System Manager Home Page
        </h2>
        <div class="flex flex-wrap -mx-2 mt-10 mb-10">
            <div class="w-1/4 px-2 mb-8">
                <div class="home-box">
                    <div class="px-6 py-4 mt-4">
                        <img src="@/assets/images/contracting-logo.png" />
                        <div class="font-bold text-xl mb-4">Acquisitions</div>
                        <router-link class="btn-home-button" to="/contracts">>> view contracts</router-link>
                    </div>
                </div>
            </div>

            <div class="w-1/4 px-2">
                <div class="home-box">
                    <div class="px-6 py-4">
                        <img src="@/assets/images/build-status-logo.png" />
                        <div class="font-bold text-xl mb-4">Vendor Build Status</div>
                        <router-link class="btn-home-button" to="/vehicles">>> view status</router-link>
                    </div>
                </div>
            </div>

            <div class="w-1/4 px-2">
                <div class="home-box">
                    <div class="px-6 py-4 mt-4">
                        <img src="@/assets/images/inspection-status-logo.png" />
                        <div class="font-bold text-xl mb-4">Inspection Status</div>
                        <router-link class="btn-home-button" to="/vehicles">>> view status</router-link>
                    </div>
                </div>
            </div>

            <div class="w-1/4 px-2">
                <div class="home-box">
                    <div class="px-6 py-4 mt-4">
                        <img src="@/assets/images/ship-deliver-frankfurt.png" />
                        <div class="font-bold text-xl mb-4">Ship/Deliver – Frankfurt</div>
                        <router-link class="btn-home-button" to="/vehicles">>>view ship/deliver</router-link>
                    </div>
                </div>
            </div>

            <div class="w-1/4 px-2 mb-8">
                <div class="home-box">
                    <div class="px-6 py-4">
                        <img src="@/assets/images/frankfurt-inventory-logo.png" />
                        <div class="font-bold text-xl mb-4">Frankfurt Inventory</div>
                        <router-link class="btn-home-button" to="/vehicles">>> view inventory</router-link>
                    </div>
                </div>
            </div>

            <div class="w-1/4 px-2">
                <div class="home-box">
                    <div class="px-6 py-4 mt-3">
                        <img src="@/assets/images/post-shipping-logo.png" />
                        <div class="font-bold text-xl mb-4">Ship/Deliver – Posts</div>
                        <router-link class="btn-home-button" to="/vehicles">>> view shipping</router-link>
                    </div>
                </div>
            </div>

            <div class="w-1/4 px-2">
                <div class="home-box">
                    <div class="px-6 py-4 mt-3">
                        <img src="@/assets/images/ops-maintainence-logo.png" />
                        <div class="font-bold text-xl mb-4">Ops/Maintainence Status</div>
                        <router-link class="btn-home-button" to="/vehicles">>> view maintenance</router-link>
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
export default {
    name: "home"

    // created() {
    //     this.$log.info("hello");
    // }
};
</script>
