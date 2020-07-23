export default [
    {
        path: "/contracts",
        name: "contracts",
        component: () => import(/* webpackChunkName: "contractList" */ "@/views/contracts/ContractList.vue"),
        meta: {
            title: `Manage Contracts | ${process.env.VUE_APP_TITLE}`
        }
    },
    {
        path: "/contracts/add",
        name: "contractAdd",
        component: () => import(/* webpackChunkName: "contractAdd" */ "@/views/contracts/ContractAdd.vue"),
        meta: {
            title: `Manage Contracts | ${process.env.VUE_APP_TITLE} | Add a New Contract`
        }
    },
    {
        path: "/contracts/view/:id",
        name: "contractView",
        component: () => import(/* webpackChunkName: "contractView" */ "@/views/contracts/ContractView.vue"),
        meta: {
            title: `Manage Contracts | ${process.env.VUE_APP_TITLE} | View Contract`
        }
    },
    {
        path: "/contracts/edit/:id",
        name: "contractEdit",
        component: () => import(/* webpackChunkName: "contractEdit" */ "@/views/contracts/ContractEdit.vue"),
        meta: {
            title: `Manage Contracts | ${process.env.VUE_APP_TITLE} | Edit Contract`
        }
    }
];
