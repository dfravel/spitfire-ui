export default [
    {
        path: "/posts",
        name: "posts",
        component: () => import(/* webpackChunkName: "postList" */ "@/views/posts/PostList.vue"),
        meta: {
            title: `Manage Posts | ${process.env.VUE_APP_TITLE}`
        }
    },
    {
        path: "/posts/edit/:id",
        name: "postEdit",
        component: () => import(/* webpackChunkName: "postEdit" */ "@/views/posts/PostEdit.vue"),
        meta: {
            title: `Manage Posts | ${process.env.VUE_APP_TITLE} | Edit Post Detail`
        }
    },
    {
        path: "/posts/view/:id",
        name: "postView",
        component: () => import(/* webpackChunkName: "postEdit" */ "@/views/posts/PostView.vue"),
        meta: {
            title: `Manage Posts | ${process.env.VUE_APP_TITLE} | View Post Detail`
        }
    },
    {
        path: "/posts/add",
        name: "postAdd",
        component: () => import(/* webpackChunkName: "postAdd" */ "@/views/posts/PostAdd.vue"),
        meta: {
            title: `Manage Posts | ${process.env.VUE_APP_TITLE} | Add a New Post`
        }
    }
];
