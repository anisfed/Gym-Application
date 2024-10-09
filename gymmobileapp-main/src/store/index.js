import {createStore} from 'vuex';
import authStore from "@/apps/auth/store/AuthStore.js";

const store = createStore({
    state: {},
    mutations: {},
    actions: {
        // Define actions here if needed
    },
    getters: {
        // Define getters here if needed
    },
    modules: {
        authStore
    }
});

export default store;
