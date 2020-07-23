export default [
    {
        path: "/contracts/details/add/:id",
        name: "contractDetailsAdd",
        component: () =>
            import(/* webpackChunkName: "contractDetailsAdd" */ "@/views/contracts/clins/ContractDetailAdd.vue"),
        meta: {
            title: `Manage Contracts | ${process.env.VUE_APP_TITLE} | Contract Detail`
        }
    }
];
