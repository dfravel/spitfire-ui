<template>
    <div class="container mx-auto px-2"> 
                <h2 class="text-red-600 mt-4">
            Vendor Home Report
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
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
