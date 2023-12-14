import Vuex from 'vuex'

import welder_registry_store from "./welder_registry_store"


export default new Vuex.Store({
    modules: { 
        welderRegistry: welder_registry_store 
    }
})