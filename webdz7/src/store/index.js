import { createStore } from "vuex";
import ProjectDetailsModule from "./modules/ProjectDetailsModule";
import ProjectModule from "./modules/ProjectModule";

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        ProjectDetailsModule,
        ProjectModule,
    },
});
