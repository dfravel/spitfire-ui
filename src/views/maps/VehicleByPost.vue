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
                <gmap-marker v-for="vehicle in vehicles" :key="vehicle._id" :position="getPosition(vehicle)" />
            </gmap-map>

            <!-- <div class="mt-4 p-10">
                <ul>
                    <li v-for="vehicle in vehicles" :key="vehicle._id">
                        <div class="flex flex-row py-1">
                            <div class="mr-4">{{ vehicle }}</div>
                        </div>
                    </li>
                </ul>
            </div> -->
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
            vehicles: []
        };
    },
    computed: {
        google: gmapApi
    },
    mounted() {
        axios
            .get("http://ec2-52-54-99-190.compute-1.amazonaws.com/api/v1/maps/vehicles")
            .then(response => {
                this.vehicles = response.data.data;
            })
            .catch(e => {
                this.errors.push(e);
            });
    },
    methods: {
        getPosition: function(vehicle) {
            var lat = "50.110924";
            var lng = "8.682127";

            // console.log(vehicle.post_id);

            if (vehicle.post_id) {
                // console.log("we have a post");

                if (vehicle.post_id.location) {
                    // console.log("we have a post location");
                    lat = vehicle.post_id.location.lat;
                    lng = vehicle.post_id.location.lng;
                }
            }

            return {
                lat: parseFloat(lat),
                lng: parseFloat(lng)
            };
        }
    }
};
</script>

<style lang="scss" scoped></style>
