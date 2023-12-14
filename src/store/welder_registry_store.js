import v1_api from '../api/v1_api/index'


export default{
    namespaced: true,
    state:{
        searchFilters: {
            certificationDateFrom: null,
            certificationDateBefore: null,
            expirationDateFrom: null,
            expirationDateBefore: null,
            expirationDateFactFrom: null,
            expirationDateFactBefore: null,
            detailThiknessFrom: null,
            detailThiknessBefore: null,
            detailDiameterFrom: null,
            detailDiameterBefore: null
        },
        searchValues: {
            names: null,
            kleymos: null,
            certificationNumbers: null
        },
        welders: [],
        count : 0
    },
    mutations:{
        async setSearchFilters(state, searchFilters){
            state.searchFilters = searchFilters
        },
        async setWelders(state, welders){
            state.welders = welders
        },
        async setSearchValues(state, values){
            state.searchValues = values
        },
        async setCount(state, count){
            state.count = count
        }
    },
    getters:{
        async getWelders(state){
            return state.welders
        },
        async getSearchFilters(state){
            return state.searchFilters
        },
        async getSearchValues(state){
            return state.searchValues
        },
        async getCount(state){
            return state.count
        }
    },
    actions:{
        async searchWelders(context) {

            let payload = {
                ...await context.getters["getSearchValues"],
                ...await context.getters["getSearchFilters"]
            }

            const data = (await v1_api.welder.getWelders(payload, 1, 100)).data
            await context.commit("setWelders", data.result)
            await context.commit("setCount", data.count)
        }
    }
}