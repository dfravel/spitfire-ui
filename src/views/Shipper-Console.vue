<template>
    <div>
        <h2 class="text-red-600 mt-4">
            Shipper Console
        </h2>
        <div class="flex flex-wrap mx-2 mt-10 mb-10">
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
                            <td class="py-2 px-2">Atlantic Shippers</td>
                            <td class="py-2 px-2 text-blue-600 underline">TECHPH5268OFFAR563</td>
                            <td class="py-2 px-2">Hamburg</td>
                            <td class="py-2 px-2"> Shanghai</td>
                            <td class="py-2 px-2">2/20/2020</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Euro Armor</td>
                            <td class="py-2 px-2">Atlantic Shippers</td>
                            <td class="py-2 px-2 text-blue-600 underline">FURBO5787TECCO368</td>
                            <td class="py-2 px-2">Hamburg</td>
                            <td class="py-2 px-2">Osaka</td>
                            <td class="py-2 px-2">2/21/2020</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Western Armor</td>
                            <td class="py-2 px-2">Atlantic Shippers</td>
                            <td class="py-2 px-2 text-blue-600 underline">OFFAP4736TECAC493</td>
                            <td class="py-2 px-2">Hamburg</td>
                            <td class="py-2 px-2">Karachi</td>
                            <td class="py-2 px-2">2/22/2020</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Eastern Armor</td>
                            <td class="py-2 px-2">Atlantic Shippers</td>
                            <td class="py-2 px-2 text-blue-600 underline">TECMA6150OFFAP386</td>
                            <td class="py-2 px-2">Hamburg</td>
                            <td class="py-2 px-2">Alexandria</td>
                            <td class="py-2 px-2">2/3/2020</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Northern Armor</td>
                            <td class="py-2 px-2">Atlantic Shippers</td>
                            <td class="py-2 px-2 text-blue-600 underline">TECAC5223TECPH396</td>
                            <td class="py-2 px-2">Hamburg</td>
                            <td class="py-2 px-2">Cape Town</td>
                            <td class="py-2 px-2">2/2/2020</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Southern Armor</td>
                            <td class="py-2 px-2">Atlantic Shippers</td>
                            <td class="py-2 px-2 text-blue-600 underline">TECCO4590OFFST562</td>
                            <td class="py-2 px-2">Hamburg</td>
                            <td class="py-2 px-2">Columbo</td>
                            <td class="py-2 px-2">2/25/2020</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="w-4/12 px-2 mb-2">
                <table class="shadow-md">
                    <thead>
                        <tr>
                            <th colspan="2">RFQ Response History</th>
                        </tr>
                        <th py-2 px-2>---</th>
                        <th py-2 px-2>---</th>
                        <tr></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-2">Issued</td>
                            <td class="py-2 px-2">56</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Responded</td>
                            <td class="py-2 px-2">32</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Under Review</td>
                            <td class="py-2 px-2">5</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Awarded</td>
                            <td class="py-2 px-2">13</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!--Second Row-->

        <div class="flex flex-wrap mx-2 mt-10 mb-10">
            <div class="w-8/12 px-2 mb-2">
                <table class="shadow-md">
                    <thead>
                        <tr>
                            <th colspan="6">Vehicles Invoice Status</th>
                        </tr>
                        <th py-2 px-2>Invoice</th>
                        <th py-2 px-2>Date Recieved</th>
                        <th py-2 px-2>Status</th>
                        <th py-2 px-2>Modified Date</th>
                        <tr></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-2">INV-74783</td>
                            <td class="py-2 px-2">11/4/2019</td>
                            <td class="py-2 px-2">Under Review</td>
                            <td class="py-2 px-2">11/8/2019</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">INV-74784</td>
                            <td class="py-2 px-2">10/23/2019</td>
                            <td class="py-2 px-2">Processing</td>
                            <td class="py-2 px-2">11/25/2019</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">INV-74785</td>
                            <td class="py-2 px-2">8/23/2019</td>
                            <td class="py-2 px-2">Paid</td>
                            <td class="py-2 px-2">9/27/2019</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">INV-74786</td>
                            <td class="py-2 px-2">4/13/2019</td>
                            <td class="py-2 px-2">Paid</td>
                            <td class="py-2 px-2">5/20/2019</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="w-4/12 px-2 mb-2"></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
