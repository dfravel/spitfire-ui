import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import contractRoutes from "./contracts/routes";
import contractLineRoutes from "./contract_lines/routes";
import vendorRoutes from "./vendors/routes";
import postRoutes from "./posts/routes";
import vehicleRoutes from "./vehicles/routes";
import mapRoutes from "./maps/routes";

Vue.use(VueRouter);

const baseRoutes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            title: `Home | ${process.env.VUE_APP_TITLE}`
        }
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
        meta: {
            title: `Dashboard | ${process.env.VUE_APP_TITLE}`
        }
    },

    {
        path: "/build-status",
        name: "build-status",
        component: () => import(/* webpackChunkName: "build-status" */ "../views/Build-Status.vue"),
        meta: {
            title: `Build Status | ${process.env.VUE_APP_TITLE}`
        }
    },
    {
        path: "/chat",
        name: "chat",
        component: () => import(/* webpackChunkName: "chat" */ "../views/Chat.vue"),
        meta: {
            title: `Chat | ${process.env.VUE_APP_TITLE}`
        }
    },

    {
        path: "/shipments",
        name: "shipments",
        component: () => import(/* webpackChunkName: "shipments" */ "../views/shipments/ShipmentList.vue"),
        meta: {
            title: `Manage Shipments | ${process.env.VUE_APP_TITLE}`
        }
    },

    {
        path: "/settings",
        name: "settings",
        component: () => import(/* webpackChunkName: "settings" */ "../views/Settings.vue"),
        meta: {
            title: `Manage Settings | ${process.env.VUE_APP_TITLE}`
        }
    },

    {
        path: "/management-console",
        name: "management-console",
        component: () => import(/* webpackChunkName: "management-console" */ "../views/Management-Console.vue"),
        meta: {
            title: `Management Console | ${process.env.VUE_APP_TITLE}`
        }
    },

    {
        path: "/maps",
        name: "maps",
        component: () => import(/* webpackChunkName: "maps" */ "../views/Maps.vue"),
        meta: {
            title: `Maps | ${process.env.VUE_APP_TITLE}`
        }
    },

    {
        path: "/post-dashboard",
        name: "post-dashboard",
        component: () => import(/* webpackChunkName: "post-dashboard" */ "../views/Post-Dashboard.vue"),
        meta: {
            title: `Post Dashboard | ${process.env.VUE_APP_TITLE}`
        }
    },

    {
        path: "/post-home",
        name: "post-home",
        component: () => import(/* webpackChunkName: "post-home" */ "../views/Post-Home.vue"),
        meta: {
            title: `Post-home | ${process.env.VUE_APP_TITLE}`
        }
    },

    {
        path: "/reports",
        name: "reports",
        component: () => import(/* webpackChunkName: "eports" */ "../views/Reports.vue"),
        meta: {
            title: `Reports | ${process.env.VUE_APP_TITLE}`
        }
    },

    {
        path: "/shipper-console",
        name: "shipper-console",
        component: () => import(/* webpackChunkName: "shipper-console" */ "../views/Shipper-Console.vue"),
        meta: {
            title: `Shipper Console | ${process.env.VUE_APP_TITLE}`
        }
    },

    {
        path: "/shipper-home",
        name: "shipper-home",
        component: () => import(/* webpackChunkName: "shipper-home" */ "../views/Shipper-Home.vue"),
        meta: {
            title: `Shipper Home | ${process.env.VUE_APP_TITLE}`
        }
    },

    {
        path: "/vendor-dashboard",
        name: "vendor-dashboard",
        component: () => import(/* webpackChunkName: "vendor-dashboard" */ "../views/Vendor-Dashboard.vue"),
        meta: {
            title: `MVendor Dashboard | ${process.env.VUE_APP_TITLE}`
        }
    },

    {
        path: "/vendor-home",
        name: "vendor-home",
        component: () => import(/* webpackChunkName: "vendor-home" */ "../views/Vendor-Home.vue"),
        meta: {
            title: `Vendor Home | ${process.env.VUE_APP_TITLE}`
        }
    }
];

const routes = baseRoutes.concat(
    contractRoutes,
    contractLineRoutes,
    vendorRoutes,
    postRoutes,
    vehicleRoutes,
    mapRoutes
);
const router = new VueRouter({
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags
        .map(tagDef => {
            const tag = document.createElement("meta");

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });

            // We use this to track which meta tags we create, so we don't interfere with other ones.
            tag.setAttribute("data-vue-router-controlled", "");

            return tag;
        })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    next();
});

export default router;
