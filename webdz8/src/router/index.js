import { createRouter, createWebHistory } from "vue-router";
import InternoComponent from "../views/InternoComponent.vue";
import BlogComponent from "../views/BlogComponent.vue";
import BlogdetailsComponent from "../views/BlogdetailsComponent.vue";
import ProjectComponent from "../views/ProjectComponent.vue";
import ProjectDetailsComponent from "../views/ProjectDetailsComponent.vue";
import NotFoundComponent from "../views/NotFoundComponent.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: InternoComponent,
    },
    {
        path: "/blog",
        name: "Blog",
        component: BlogComponent,
    },
    {
        path: "/blogdetails",
        name: "Blogdetails",
        component: BlogdetailsComponent,
    },
    {
        path: "/project",
        name: "Project",
        component: ProjectComponent,
    },
    {
        path: "/projectdetails",
        name: "ProjectDetails",
        component: ProjectDetailsComponent,
    },
    {
        path: "/:CatchAll(.*)",
        name: "404",
        component: NotFoundComponent,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
