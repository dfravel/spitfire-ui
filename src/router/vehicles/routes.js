export default [
    {
        path: "/vehicles",
        name: "vehicles",
        component: () => import(/* webpackChunkName: "vehicles" */ "@/views/vehicles/VehicleList.vue"),
        meta: {
            title: `Manage Vehicles | ${process.env.VUE_APP_TITLE}`
        }
    },
    {
        path: "/vehicles/view/:id",
        name: "vehicleView",
        component: () => import(/* webpackChunkName: "vehicleView" */ "@/views/vehicles/VehicleView.vue"),
        meta: {
            title: `Manage Vehicles | ${process.env.VUE_APP_TITLE} | View Vehicle Detail`
        }
    },
    {
        path: "/vehicles/edit/:id",
        name: "vehicleEdit",
        component: () => import(/* webpackChunkName: "vehicleEdit" */ "@/views/vehicles/VehicleEdit.vue"),
        meta: {
            title: `Manage Vehicles | ${process.env.VUE_APP_TITLE} | Edit Vehicle Detail`
        }
    },
    {
        path: "/vehicles/inspection/add/:id",
        name: "vehicleInspectionAdd",
        component: () =>
            import(
                /* webpackChunkName: "vehicleInspectionAdd" */ "@/views/vehicles/components/inspections/InspectionAdd.vue"
            ),
        meta: {
            title: `Manage Vehicles | ${process.env.VUE_APP_TITLE} | Add an Inspection`
        }
    },
    {
        path: "/vehicles/inspection/attachment/add/:vehicleId/:inspectionId",
        name: "vehicleInspectionAddAttachment",
        component: () =>
            import(
                /* webpackChunkName: "vehicleInspectionAttachmentAdd" */ "@/views/vehicles/components/inspections/InspectionAddAttachment.vue"
            ),
        meta: {
            title: `Manage Vehicles | ${process.env.VUE_APP_TITLE} | Add Attachments to Inspection`
        }
    },
    {
        path: "/vehicles/inspection/view/:vehicleId/:inspectionId",
        name: "vehicleInspectionView",
        component: () =>
            import(
                /* webpackChunkName: "vehicleInspectionView" */ "@/views/vehicles/components/inspections/InspectionView.vue"
            ),
        meta: {
            title: `Manage Vehicles | ${process.env.VUE_APP_TITLE} | View an Inspection`
        }
    },

    {
        path: "/vehicles/attachments/view/:vehicleId/:id",
        name: "vehicleAttachmentView",
        component: () =>
            import(
                /* webpackChunkName: "vehicleAttachmentView" */ "@/views/vehicles/components/attachments/AttachmentView.vue"
            ),
        meta: {
            title: `Manage Vehicles | ${process.env.VUE_APP_TITLE} | View an Attachment`
        }
    },

    {
        path: "/vehicles/attachments/add/:id",
        name: "vehicleAttachmentAdd",
        component: () =>
            import(
                /* webpackChunkName: "vehicleAttachmentAdd" */ "@/views/vehicles/components/attachments/AddVehicleImage.vue"
            ),
        meta: {
            title: `Manage Vehicles | ${process.env.VUE_APP_TITLE} | Add Vehicle Image`
        }
    },

    {
        path: "/vehicles/attachments/multiple/add/:id",
        name: "vehicleAttachmentAddMultiple",
        component: () =>
            import(
                /* webpackChunkName: "vehicleAttachmentAddMultiple" */ "@/views/vehicles/components/attachments/AttachmentAdd.vue"
            ),
        meta: {
            title: `Manage Vehicles | ${process.env.VUE_APP_TITLE} | Add Multiple Files`
        }
    },

    {
        path: "/vehicles/maintenance/add/:id",
        name: "vehicleMaintenanceAdd",
        component: () =>
            import(
                /* webpackChunkName: "vehicleMaintenanceAdd" */ "@/views/vehicles/components/maintenance/MaintenanceAdd.vue"
            ),
        meta: {
            title: `Manage Vehicles | ${process.env.VUE_APP_TITLE} | Add Maintenance`
        }
    },
    {
        path: "/vehicles/maintenance/view/:vehicleId/:id",
        name: "vehicleMaintenanceView",
        component: () =>
            import(
                /* webpackChunkName: "vehicleInspectionAdd" */ "@/views/vehicles/components/maintenance/MaintenanceView.vue"
            ),
        meta: {
            title: `Manage Vehicles | ${process.env.VUE_APP_TITLE} | View Maintenance`
        }
    },

    {
        path: "/vehicles/mileage/add/:id",
        name: "vehicleMileageAdd",
        component: () =>
            import(/* webpackChunkName: "vehicleMileageAdd" */ "@/views/vehicles/components/mileage/MileageAdd.vue"),
        meta: {
            title: `Manage Vehicles | ${process.env.VUE_APP_TITLE} | Add Mileage`
        }
    }
];
