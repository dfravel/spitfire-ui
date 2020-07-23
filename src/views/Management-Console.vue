<template>
    <div class="container mx-auto px-2 bg-">
        <h2 class="text-red-600 mt-4">
            Management Console Page. Static Page: Functional Version Currently Under Development.
        </h2>
        <div class="flex flex-wrap -mx-2 mt-10 mb-10">
            <div class="w-1/2 px-2 mb-2">
                <table class="shadow-md">
                    <thead>
                        <tr>
                            <th colspan="5">Vehicle Build Status</th>
                        </tr>
                        <th class="py-4 px-4">Vendor</th>
                        <th class="py-4 px-4">VIN</th>
                        <th class="py-4 px-4">Model</th>
                        <th class="py-4 px-4">% Complete</th>
                        <th class="py-4 px-4">Payment Status</th>
                        <tr></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-4 px-4">Acme</td>
                            <td class="py-4 px-4 text-blue-600 underline">FURCH5379FURBO388</td>
                            <td class="py-4 px-4">Toyota Landcruiser</td>
                            <td class="py-4 px-4">25%</td>
                            <td class="py-4 px-4">Complete</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-4">Acme Western</td>
                            <td class="py-4 px-4 text-blue-600 underline">TECPH5356TECMA550</td>
                            <td class="py-4 px-4">Toyota Landcruiser</td>
                            <td class="py-4 px-4">45%</td>
                            <td class="py-4 px-4">Complete</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-4">Armor Eastern</td>
                            <td class="py-4 px-4 text-blue-600 underline">TECPH5267OFFA289</td>
                            <td class="py-4 px-4">Toyota Hilux</td>
                            <td class="py-4 px-4">100%</td>
                            <td class="py-4 px-4">Pending</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-4">Armor Northern</td>
                            <td class="py-4 px-4 text-blue-600 underline">TECCO6011FURTA506</td>
                            <td class="py-4 px-4">Chevrolet Blazer</td>
                            <td class="py-4 px-4">25%</td>
                            <td class="py-4 px-4">Pending</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-4">Armor Southern</td>
                            <td class="py-4 px-4 text-blue-600 underline">TECPH5842TECPH378</td>
                            <td class="py-4 px-4">Mercedes S450</td>
                            <td class="py-4 px-4">10%</td>
                            <td class="py-4 px-4">Complete</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-4">Armor Eastern</td>
                            <td class="py-4 px-4 text-blue-600 underline">FURCH5378TECAC607</td>
                            <td class="py-4 px-4">Jeep Cherokee</td>
                            <td class="py-4 px-4">80%</td>
                            <td class="py-4 px-4">Complete</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="w-1/2 px-2 mb-2">
                <table class="shadow-md">
                    <thead>
                        <tr>
                            <th colspan="5">Vehicle Inspection Status</th>
                        </tr>
                        <th class="py-4 px-4">Vendor</th>
                        <th class="py-4 px-4">VIN</th>
                        <th class="py-4 px-4">Inspection</th>
                        <th class="py-4 px-4">Status</th>
                        <tr></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-4 px-4">Western Armor</td>
                            <td class="py-4 px-4 text-blue-600 underline">FURCH5379FURBO388</td>
                            <td class="py-4 px-4">Mid-Build</td>
                            <td class="py-4 px-4">Complete</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-4">Euro Armor</td>
                            <td class="py-4 px-4 text-blue-600 underline">TECPH5356TECMA550</td>
                            <td class="py-4 px-4">Toyota Landcruiser</td>
                            <td class="py-4 px-4">Scheduled</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-4">Western Armor</td>
                            <td class="py-4 px-4 text-blue-600 underline">TECPH5267OFFA289</td>
                            <td class="py-4 px-4">Toyota Hilux</td>
                            <td class="py-4 px-4">Complete</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-4">Eastern Armor</td>
                            <td class="py-4 px-4 text-blue-600 underline">TECCO6011FURTA506</td>
                            <td class="py-4 px-4">Chevrolet Blazer</td>
                            <td class="py-4 px-4">Unscheduled</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-4">Northern Armor</td>
                            <td class="py-4 px-4 text-blue-600 underline">TECPH5842TECPH378</td>
                            <td class="py-4 px-4">Mercedes S450</td>
                            <td class="py-4 px-4">Complete</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-4">Southern Armor</td>
                            <td class="py-4 px-4 text-blue-600 underline">TECCO3678TECPH314</td>
                            <td class="py-4 px-4">Jeep Cherokee</td>
                            <td class="py-4 px-4">Scheduled</td>
                        </tr>
                        <tr>
                            <td class="py-4 px-4">Western Armor</td>
                            <td class="py-4 px-4 text-blue-600 underline">FURBO5762FURCH541</td>
                            <td class="py-4 px-4">Jeep Cherokee</td>
                            <td class="py-4 px-4">Complete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!--Second Row-->

        <div class="flex flex-wrap mx-1 mt-10 mb-10">
            <div class="w-8/12 px-2 mb-2">
                <table class="shadow-md">
                    <thead>
                        <tr>
                            <th colspan="6">Vehicles In Transit</th>
                        </tr>
                        <th py-2 px-2>Vendor</th>
                        <th py-2 px-2>Shipper</th>
                        <th py-2 px-2>VIN</th>
                        <th py-2 px-2>Port of Embarkation</th>
                        <th py-2 px-2>Destination</th>
                        <th py-2 px-2>Expected Arrival Date</th>
                        <tr></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-2">Western Armor</td>
                            <td class="py-2 px-2">Cardinal Transport</td>
                            <td class="py-2 px-2 text-blue-600 underline">TECHPH5268OFFAR563</td>
                            <td class="py-2 px-2">Baltimore</td>
                            <td class="py-2 px-2">Frankfurt</td>
                            <td class="py-2 px-2">2/20/2020</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Euro Armor</td>
                            <td class="py-2 px-2">Hawk Frieght</td>
                            <td class="py-2 px-2 text-blue-600 underline">FURBO5787TECCO368</td>
                            <td class="py-2 px-2">Hamburg</td>
                            <td class="py-2 px-2">Bangkok</td>
                            <td class="py-2 px-2">2/21/2020</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Western Armor</td>
                            <td class="py-2 px-2">Eagle Shippers</td>
                            <td class="py-2 px-2 text-blue-600 underline">OFFAP4736TECAC493</td>
                            <td class="py-2 px-2">Charleston</td>
                            <td class="py-2 px-2">Frankfurt</td>
                            <td class="py-2 px-2">2/22/2020</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Eastern Armor</td>
                            <td class="py-2 px-2">Hawk Frieght</td>
                            <td class="py-2 px-2 text-blue-600 underline">TECMA6150OFFAP386</td>
                            <td class="py-2 px-2">Dulles</td>
                            <td class="py-2 px-2">Cairo</td>
                            <td class="py-2 px-2">2/3/2020</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Northern Armor</td>
                            <td class="py-2 px-2">Bluebird Transport</td>
                            <td class="py-2 px-2 text-blue-600 underline">TECAC5223TECPH396</td>
                            <td class="py-2 px-2">JFK</td>
                            <td class="py-2 px-2">Frankfurt</td>
                            <td class="py-2 px-2">2/2/2020</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Southern Armor</td>
                            <td class="py-2 px-2">Osprey Solutions</td>
                            <td class="py-2 px-2 text-blue-600 underline">TECCO4590OFFST562</td>
                            <td class="py-2 px-2">Norfolk</td>
                            <td class="py-2 px-2">Frankfurt</td>
                            <td class="py-2 px-2">2/25/2020</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="w-4/12 px-2 mb-2">
                <table class="shadow-md">
                    <thead>
                        <tr>
                            <th colspan="4">Incident</th>
                        </tr>
                        <th py-2 px-2>Date</th>
                        <th py-2 px-2>Location</th>
                        <th py-2 px-2>VIN</th>
                        <th py-2 px-2>Status</th>
                        <tr></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-2">1/20/2020</td>
                            <td class="py-2 px-2">Pretoria</td>
                            <td class="py-2 px-2 text-blue-600 underline">FURCH46540FFAP450</td>
                            <td class="py-2 px-2">Non-Operational</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">1/10/2020</td>
                            <td class="py-2 px-2">Rome</td>
                            <td class="py-2 px-2 text-blue-600 underline">TECAC4185FURCH544</td>
                            <td class="py-2 px-2">Non-Operational</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">1/13/2020</td>
                            <td class="py-2 px-2">Kabul</td>
                            <td class="py-2 px-2 text-blue-600 underline">OFFAP4738TECPH312</td>
                            <td class="py-2 px-2">Destoyed</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">1/10/2020</td>
                            <td class="py-2 px-2">Lyon</td>
                            <td class="py-2 px-2 text-blue-600 underline">TECMA4205OFFPA659</td>
                            <td class="py-2 px-2">Non-Operational</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">12/29/2019</td>
                            <td class="py-2 px-2">Beijing</td>
                            <td class="py-2 px-2 text-blue-600 underline">FURTA4642OFFST624</td>
                            <td class="py-2 px-2">Non-Operational</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
