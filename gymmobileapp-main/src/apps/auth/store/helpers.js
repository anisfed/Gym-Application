import {mapActions, mapGetters} from "vuex";
import {LOGIN, LOGOUT} from "@/apps/auth/mutation-types.js";

export const authStoreGetters = {
    ...mapGetters([
        'isAuthenticated'
    ]),
};

export const authStoreActions = {
    ...mapActions([
        LOGIN,
        LOGOUT
    ])
}