import api from "../api/v1_api/index"

export default {
    install(Vue){
        Vue.config.globalProperties.$v1Api = api
    }
}


