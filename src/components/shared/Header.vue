<template>
    <div>
        <div class="bg-blue-700">
            <div class="container mx-auto px-2">
                <div class="flex items-center py-2 justify-end">
                    <div class="w-1/4 md:hidden">
                        <svg
                            class="fill-current text-white h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z"
                            />
                        </svg>
                    </div>
                    <div class="w-1/2">
                        <img class src="@/assets/images/spitfire-logo-small.png" />
                    </div>

                    <div class="w-1/2 flex flex-row text-right justify-end align-middle">
                        <div class="text-white mr-6 mt-1">
                            <router-link to="/chat" class>
                                <font-awesome-icon
                                    :icon="['fal', 'comment']"
                                    size="lg"
                                    class="mr-1"
                                ></font-awesome-icon>
                            </router-link>
                        </div>

                        <div class="text-white mr-6 mt-1">
                            <router-link to="/settings" class>
                                <font-awesome-icon :icon="['fal', 'cogs']" size="lg" class="mr-1"></font-awesome-icon>
                            </router-link>
                        </div>

                        <div class="flex flex-row item-center">
                            <div class="mr-2">
                                <img class="h-8 w-8 rounded-full" src="@/assets/images/default-avatar.jpg" alt />
                            </div>

                            <span class="text-white text-base mr-1 mt-1">User Name</span>
                            <div>
                                <svg
                                    class="fill-current text-white h-4 w-4 block opacity-50 mt-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
                                    />
                                </svg>
                            </div>
                        </div>
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
