<template>
    <div class="container mx-auto px-2">
        <div class="mt-4">
            <div class="text-right">
                <router-link class="btn btn-secondary" :to="{ path: '/maps' }">
                    <font-awesome-icon :icon="['fal', 'map-marker']" size="lg" class="mr-2"></font-awesome-icon>
                    Cancel and return
                </router-link>
            </div>
        </div>
        <div class="bg-white shadow-md rounded my-6">
            <gmap-map :center="center" :zoom="3" style="width:100%;  height: 750px;">
                <gmap-marker v-for="vehicle in vehicles" :key="vehicle" :position="getPosition(vehicle)" />
            </gmap-map>

            <div class="mt-4 p-10">
                <ul>
                    <li v-for="vehicle in vehicles" :key="vehicle">
                        <div class="flex flex-row py-1">
                            <div class="mr-4">Shipping ID: {{ vehicle[0] }}</div>
                            <div class="mr-4">Latitude: {{ vehicle[3] }}</div>
                            <div class="mr-4">Longitude: {{ vehicle[4] }}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { gmapApi } from "vue2-google-maps";
export default {
    name: "GoogleMap",
    data() {
        return {
            // default to Frankfurt to keep it simple
            center: { lat: 50.110924, lng: 8.682127 },
            markers: [],
            vehicles: [],
            errors: []
        };
    },
    computed: {
        google: gmapApi
    },
    mounted() {
        axios
            .get("http://ec2-18-212-100-255.compute-1.amazonaws.com:32007/api/getvessels_live")
            .then(response => {
                this.vehicles = response.data;
            })
            .catch(e => {
                this.errors.push(e);
            });
    },
    methods: {
        getPosition: function(vehicle) {
            return {
                lat: parseFloat(vehicle[3]),
                lng: parseFloat(vehicle[4])
            };
        }
    }
};
</script>

<style lang="scss" scoped></style>
