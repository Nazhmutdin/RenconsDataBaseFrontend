import Vuex from 'vuex'

import welder_registry_store from "./welder_registry_store"
import welder_ndt_registry_store from "./welder_ndt_registry_store"


export default new Vuex.Store({
    modules: { 
        welderRegistry: welder_registry_store ,
        welderNDTRegistry: welder_ndt_registry_store
    },
    state: {
        isAuthenticated: false
    },
    getters: {
        getIsAuthenticated(state){
            return state.isAuthenticated
        }
    },
    mutations: {
        setIsAuthenticated(state, value){
            state.isAuthenticated = value
        }
    }
})