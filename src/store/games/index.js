import VuexPersistence from 'vuex-persist'
import { state } from "./state";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";
const plugins = [new VuexPersistence({ storage: window.sessionStorage, }).plugin]

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
    plugins,
}