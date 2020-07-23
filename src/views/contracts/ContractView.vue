<template>
    <div class="container mx-auto px-2">
        <div class="mt-4 mb-4">
            <div class="text-right">
                <router-link class="btn btn-secondary" to="/contracts">
                    <font-awesome-icon :icon="['fal', 'file-contract']" size="lg" class="mr-2"></font-awesome-icon>
                    Cancel and return
                </router-link>
            </div>
        </div>
        <div class="flex flex-wrap mb-2">
            <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                <div class="bg-green-600 border rounded shadow p-2">
                    <div class="flex flex-row items-center">
                        <div class="flex-1 text-left">
                            <h5 class="text-white">Contract Number</h5>
                            <h3 class="text-white text-3xl">
                                {{ contract.contract_number }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                <div class="bg-blue-600 border rounded shadow p-2">
                    <div class="flex flex-row items-center">
                        <div class="flex-1 text-left">
                            <h5 class="text-white">Awarded To</h5>
                            <h3 class="text-white text-3xl">
                                {{ contract.vendor.name }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                <div class="bg-orange-600 border rounded shadow p-2">
                    <div class="flex flex-row items-center">
                        <div class="flex-1 text-left">
                            <h5 class="text-white">Status</h5>
                            <h3 class="text-white text-3xl">
                                {{ contract.status }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white shadow-md rounded mt-12 mb-6">
            <table>
                <thead>
                    <tr>
                        <th v-for="column in columns" :key="column.name" :class="column.class ? column.class : ''">
                            {{ column.label }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="contractLine in contract.contract_lines" v-bind:key="contractLine._id">
                        <td>
                            {{ contractLine.clin }}
                        </td>
                        <td>
                            {{ contractLine.make }}
                        </td>
                        <td>
                            {{ contractLine.model }}
                        </td>
                        <td>
                            {{ contractLine.model_year }}
                        </td>
                        <td>
                            {{ contractLine.quantity }}
                        </td>
                        <td>
                            {{ contractLine.armor_level }}
                        </td>
                        <td class="align-middle">
                            <router-link
                                class="btn btn-table-view mr-2"
                                title="View CLIN Details"
                                :to="'/contracts/details/view/' + contract._id"
                            >
                                <font-awesome-icon :icon="['fal', 'search']" size="lg"></font-awesome-icon>
                            </router-link>

                            <router-link
                                class="btn btn-table-edit mr-2"
                                title="Edit CLIN Details"
                                :to="'/contracts/details/edit/' + contract._id"
                            >
                                <font-awesome-icon :icon="['fal', 'edit']" size="lg"></font-awesome-icon>
                            </router-link>

                            <router-link class="btn btn-table-delete" title="Delete this CLIN" to="/">
                                <font-awesome-icon :icon="['fal', 'trash']" size="lg"></font-awesome-icon>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
    data() {
        // using the parameter to get the data for this contract
        const contractId = this.$route.params.id;
        const columns = [
            { label: "CLIN", name: "clin" },
            { label: "Make", name: "make" },
            { label: "Model", name: "model" },
            { label: "Model Year", name: "model_year" },
            { label: "Quantity", name: "quantity" },
            { label: "Armor Level", name: "armor_level" },
            { label: "Options", name: "options" }
        ];
        return {
            contractId,
            columns
        };
    },
    computed: {
        ...mapState(["contract/contracts"]),
        ...mapGetters({
            getContractById: "contract/getContractById"
        }),

        contract() {
            return this.getContractById(this.contractId);
        }
    },
    beforeCreate() {},
    mounted() {
        this.$store.dispatch("contract/getById", this.contractId);
        // this.$log.info(`We're pushing in ${JSON.stringify(this.contractId)}`);
        // this.$log.info(`the contract id is ${this.contractId}`);
    }
};
</script>

<style lang="scss" scoped></style>
