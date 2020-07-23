export default [
    {
        path: "/vendors",
        name: "vendors",
        component: () => import(/* webpackChunkName: "vendorList" */ "@/views/vendors/VendorList.vue"),
        meta: {
            title: `Manage Vendors | ${process.env.VUE_APP_TITLE}`
        }
    },
    {
        path: "/vendors/view/:id",
        name: "vendorView",
        component: () => import(/* webpackChunkName: "vendorView" */ "@/views/vendors/VendorView.vue"),
        meta: {
            title: `Manage Vendors | ${process.env.VUE_APP_TITLE} | View Vendor Detail`
        }
    },
    {
        path: "/vendors/edit/:id",
        name: "vendorEdit",
        component: () => import(/* webpackChunkName: "vendorEdit" */ "@/views/vendors/VendorEdit.vue"),
        meta: {
            title: `Manage Vendors | ${process.env.VUE_APP_TITLE} | Edit Vendor Detail`
        }
    },
    {
        path: "/vendors/add",
        name: "vendorAdd",
        component: () => import(/* webpackChunkName: "vendorAdd" */ "@/views/vendors/VendorAdd.vue"),
        meta: {
            title: `Manage Vendors | ${process.env.VUE_APP_TITLE} | Add a New Vendor`
        }
    }
];
