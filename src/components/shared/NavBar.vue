<template>
    <div>
        <div class="hidden bg-blue-700 md:block md:bg-white md:border-b">
            <div class="container mx-auto px-2">
                <div class="md:flex">
                    <div class="flex -mb-px mr-12">
                        <router-link to="/" class="nav-link">
                            <font-awesome-icon :icon="['fal', 'home']" size="sm" class="mr-2"></font-awesome-icon>
                            Home
                        </router-link>
                    </div>
                    <div class="flex -mb-px mr-12">
                        <router-link to="/dashboard" class="nav-link">
                            <font-awesome-icon
                                :icon="['fal', 'tachometer-alt-slow']"
                                size="sm"
                                class="mr-2"
                            ></font-awesome-icon>
                            Dashboard
                        </router-link>
                    </div>
                    <div class="flex -mb-px mr-12">
                        <router-link to="/management-console" class="nav-link">
                            <font-awesome-icon :icon="['fal', 'analytics']" size="sm" class="mr-2"></font-awesome-icon>
                            Console
                        </router-link>
                    </div>
                    <div class="flex -mb-px mr-12">
                        <router-link
                            to="/contracts"
                            class="nav-link"
                            :class="{
                                'router-link-exact-active':
                                    $route.name === 'contractAdd' || $route.name === 'contractDetails'
                            }"
                        >
                            <font-awesome-icon
                                :icon="['fal', 'file-contract']"
                                size="sm"
                                class="mr-2"
                            ></font-awesome-icon>
                            Contracts
                        </router-link>
                    </div>
                    <div class="flex -mb-px mr-12">
                        <router-link to="/vendors" class="nav-link">
                            <font-awesome-icon
                                :icon="['fal', 'industry-alt']"
                                size="sm"
                                class="mr-2"
                            ></font-awesome-icon>
                            Vendors
                        </router-link>
                    </div>
                    <div class="flex -mb-px mr-12">
                        <router-link
                            to="/vehicles"
                            class="nav-link"
                            :class="{
                                'router-link-exact-active':
                                    $route.name === 'vehicleView' || $route.name === 'vehicleInspectionAdd'
                            }"
                        >
                            <font-awesome-icon :icon="['fal', 'cars']" size="sm" class="mr-2"></font-awesome-icon>
                            Vehicles
                        </router-link>
                    </div>

                    <div class="flex -mb-px mr-12">
                        <router-link to="/shipments" class="nav-link">
                            <font-awesome-icon :icon="['fal', 'ship']" size="sm" class="mr-2"></font-awesome-icon>
                            Shipments
                        </router-link>
                    </div>
                    <div class="flex -mb-px mr-12">
                        <router-link to="/posts" class="nav-link">
                            <font-awesome-icon
                                :icon="['fal', 'landmark-alt']"
                                size="sm"
                                class="mr-2"
                            ></font-awesome-icon>
                            Posts
                        </router-link>
                    </div>

                    <div class="flex -mb-px mr-12">
                        <router-link to="/maps" class="nav-link">
                            <font-awesome-icon :icon="['fal', 'map']" size="sm" class="mr-2"></font-awesome-icon>
                            Maps
                        </router-link>
                    </div>

                    <div class="flex -mb-px mr-12">
                        <a
                            href="http://ec2-52-23-29-97.compute-1.amazonaws.com/#/workbooks/11?:origin=card_share_link"
                            class="nav-link"
                            target="_blank"
                        >
                            <font-awesome-icon :icon="['fal', 'suitcase']" size="sm" class="mr-2"></font-awesome-icon>
                            Reports
                        </a>
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
