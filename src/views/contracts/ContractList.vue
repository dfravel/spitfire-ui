<template>
    <div class="container mx-auto px-2">
        <div class="mt-4">
            <div class="text-right">
                <router-link class="btn btn-secondary" to="/contracts/add">
                    <font-awesome-icon :icon="['fal', 'file-contract']" size="lg" class="mr-2"></font-awesome-icon>
                    Create a contract
                </router-link>
            </div>
        </div>
        <div class="-mt-6 text-left">
            <form>
                <input name="query" class="form-input w-1/2" v-model="search" placeholder="Enter search term" />
            </form>
        </div>
        <div class="bg-white shadow-md rounded mt-2 mb-6">
            <table>
                <thead>
                    <tr>
                        <th v-for="column in columns" :key="column.key" :class="column.class ? column.class : ''">
                            {{ column.label }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="contract in pageOfItems" v-bind:key="contract._id" class="listTable">
                        <td>
                            {{ contract.contract_number | uppercase }}
                            <div class="secondary-data">
                                Awarded:
                                {{ contract.awarded_dt | moment("DD MMMM YYYY") }}
                            </div>
                        </td>
                        <td>
                            {{ contract.vendor.name }}
                            <div class="secondary-data">Contact: {{ contract.vendor.contact }}</div>
                        </td>
                        <td class="text-center align-middle">
                            <span :class="contract.status | lowercase | slug">{{ contract.status }}</span>
                        </td>
                        <td>
                            {{ contract.total_contract_value | toCurrency }}
                            <div class="secondary-data">Payment Status: TBD</div>
                        </td>
                        <td class="text-center align-middle">
                            <div v-if="contract.contract_lines.length > 0">
                                <router-link
                                    class="btn btn-table-drilldown mr-2"
                                    :to="'/contracts/details/view/' + contract._id"
                                >
                                    {{ contract.contract_lines.length }}
                                </router-link>
                            </div>
                        </td>

                        <td class="text-center align-middle">
                            &nbsp;
                            <!-- <span class="btn btn-table-drilldown mr-2">
                                0
                            </span> -->
                        </td>

                        <td class="align-middle">
                            <router-link
                                class="btn btn-table-view mr-2"
                                title="View this contract"
                                :to="'/contracts/view/' + contract._id"
                            >
                                <font-awesome-icon :icon="['fal', 'search']" size="lg"></font-awesome-icon>
                            </router-link>

                            <router-link
                                class="btn btn-table-edit mr-2"
                                title="Edit this contract"
                                :to="'/contracts/edit/' + contract._id"
                            >
                                <font-awesome-icon :icon="['fal', 'edit']" size="lg"></font-awesome-icon>
                            </router-link>

                            <router-link class="btn btn-table-delete" to="/" title="Delete this contract">
                                <font-awesome-icon :icon="['fal', 'trash']" size="lg"></font-awesome-icon>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- create pagination links here  -->
            <div class="py-10">
                <jw-pagination
                    v-if="filteredContracts.length"
                    :items="filteredContracts"
                    :pageSize="10"
                    @changePage="onChangePage"
                ></jw-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        const columns = [
            { label: "Contract Number", key: "contract_number" },
            { label: "Vendor", key: "vendor" },
            { label: "Status", key: "status", class: "text-center" },
            { label: "Value", key: "total_contract_value" },
            { label: "CLINS", key: "clin_count" },
            { label: "MODs", key: "mod_count" },
            { label: "Options", key: "options" }
        ];

        // const customLabels = {
        //     first: "<<",
        //     last: ">>",
        //     previous: "<",
        //     next: ">"
        // };

        return {
            search: "",
            columns,
            pageOfItems: []
            // customLabels
        };
    },
    computed: {
        ...mapGetters({
            contracts: "contract/getContracts"
        }),
        filteredContracts: function() {
            var searchTerm = this.search && this.search.toLowerCase();
            var contracts = this.contracts;
            if (searchTerm) {
                contracts = contracts.filter(function(row) {
                    return Object.keys(row).some(function(key) {
                        return (
                            String(row[key])
                                .toLowerCase()
                                .indexOf(searchTerm) > -1
                        );
                    });
                });
            }
            return contracts;
        }
    },
    beforeCreate() {
        this.$store.dispatch("contract/fetch");
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    }
};
</script>

<style></style>
