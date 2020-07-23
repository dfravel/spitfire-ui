<template>
<div class="w-full px-2 bg-gray-400 -mt-2">
                        <h2 class="text-red-600 mt-4">
            Executive Dashboard
        </h2>
<div class="flex mx-1 mt-10 mb-10 bg-fixed">
        <div class="w-1/4 px-2 mb-2">
                <table class="shadow-md bg-gray-500">
                    <thead>
                        <tr>
                            <th colspan="2" class="text-blue-600 underline bg-gray-500 border-b-1">
                                <a href="/contracts">Acquisitions</a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-2 text-blue-600 underline border-t-0"><a href="/contracts">In Process</a></td>
                            <td class="py-2 px-2">5</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2 text-blue-600 underline"><a href="/contracts">Delayed</a></td>
                            <td class="py-2 px-2">3</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Completed</td>
                            <td class="py-2 px-2">75</td>
                        </tr>
            </tbody>
        </table>
    </div>

    <div class="w-1/4 px-2 mb-2">
                <table class="shadow-md bg-gray-500 border-transparent">
                    <thead>
                        <tr>
                            <th colspan="3" class="text-blue-600 underline bg-gray-500">
                                <a href="/vehicles">Operations</a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-2">Operational Vehicles</td>
                            <td class="py-2 px-2">125</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Non-Operational Vehicles</td>
                            <td class="py-2 px-2">35</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Retired Vehicles</td>
                            <td class="py-2 px-2">75</td>
                        </tr>
            </tbody>
        </table>
    </div>

    <div class="w-1/4 px-2 mb-2">
                <table class="shadow-md bg-gray-500">
                    <thead>
                        <tr>
                            <th colspan="3" class="text-blue-600 underline bg-gray-500">
                                <a href="/vehicles">Vendor Status</a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-2">Ordered</td>
                            <td class="py-2 px-2">23</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">In Production</td>
                            <td class="py-2 px-2">38</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Mid Build Inspection Complete</td>
                            <td class="py-2 px-2">22</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">Final Inspection Complete</td>
                            <td class="py-2 px-2">10</td>
                        </tr>
            </tbody>
        </table>
    </div>
        <div class="w-1/4 px-2 mb-2">
                <table class="shadow-md bg-gray-500">
                    <thead>
                        <tr>
                            <th colspan="3" class="text-blue-600 underline bg-gray-500">
                                <a href="/vehicles">Shipping</a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2 px-2 text-blue-600 underline"><a href="/vehicles">In-Transit - Frankfurt</a></td>
                            <td class="py-2 px-2">6</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">In Transit - Posts</td>
                            <td class="py-2 px-2">6</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">On-Hand - Frankfurt</td>
                            <td class="py-2 px-2">24</td>
                        </tr>
                        <tr>
                            <td class="py-2 px-2">On Hand - Germersheim</td>
                            <td class="py-2 px-2">18</td>
                        </tr>
            </tbody>
        </table>
    </div>

</div>

<div class="flex mx-1 mt-10 mb-100 border-gray-500 border-8">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6075130.025463703!2d4.704513635657544!3d51.30355041261578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2sus!4v1581205767039!5m2!1sen!2sus" width="100%" height="800" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
</div>



</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
