export default [
    {
        path: "/maps/vehicles-by-post",
        name: "vehiclesByPost",
        component: () => import(/* webpackChunkName: "mapVehiclesByPost" */ "@/views/maps/VehicleByPost.vue"),
        meta: {
            title: `Maps | ${process.env.VUE_APP_TITLE} | View Vehicles By Post`
        }
    },
    {
        path: "/maps/vehicles-by-sea",
        name: "vehiclesBySea",
        component: () => import(/* webpackChunkName: "mapVehiclesBySea" */ "@/views/maps/VehicleBySea.vue"),
        meta: {
            title: `Maps | ${process.env.VUE_APP_TITLE} | View Vehicles By Sea`
        }
    }
];
