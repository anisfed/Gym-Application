import {LOGIN, LOGOUT} from "@/apps/auth/mutation-types.js";

const USER = {
    username: 'admin',
    password: 'admin'
}
const authStore = {
    state: {
        isAuthenticated: false,
        user: null
    },
    getters: {
        isAuthenticated(state) {
            return state.isAuthenticated;
        }
    },
    mutations: {
        [LOGIN](state, data) {
            state.isAuthenticated = true;
            state.user = data;
        },
        [LOGOUT](state) {
            state.isAuthenticated = false;

        }
    },
    actions: {
        [LOGIN]({commit}, {data}) {
            //TODO: call the backend to authenticate the user
            if (data.username !== USER.username || data.password !== USER.password) {
                localStorage.removeItem('token');
                return false;
            }
            localStorage.setItem('token', "loremipsumdolorsitamet");
            commit(LOGIN, data);
            return true;

        },
        [LOGOUT]({commit}) {
            commit(LOGOUT);
        }
    },
}
export default authStore;