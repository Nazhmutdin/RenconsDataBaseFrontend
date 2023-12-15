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
        count : 0,
        currentPage: 1,
        pageSize: 100
    },
    mutations:{
        setSearchFilters(state, searchFilters){
            state.searchFilters = searchFilters
        },
        setWelders(state, welders){
            state.welders = welders
        },
        setSearchValues(state, values){
            state.searchValues = values
        },
        setCount(state, count){
            state.count = count
        },
        setCurrentPage(state, currentPage){
            state.currentPage = currentPage
        },
        setPageSize(state, pageSize){
            state.pageSize = pageSize
        }
    },
    getters:{
        getWelders(state){
            return state.welders
        },
        getSearchFilters(state){
            return state.searchFilters
        },
        getSearchValues(state){
            return state.searchValues
        },
        getCount(state){
            return state.count
        },
        getCurrentPage(state){
            return state.currentPage
        },
        getPageSize(state){
            return state.pageSize
        }
    },
    actions:{
        async searchWelders(context) {

            let payload = {
                ...context.getters["getSearchValues"],
                ...context.getters["getSearchFilters"]
            }

            let page = context.getters["getCurrentPage"]
            let pageSize = context.getters["getPageSize"]

            const data = (await v1_api.welder.getWelders(payload, page, pageSize)).data
            context.commit("setWelders", data.result)
            context.commit("setCount", data.count)
        }
    }
}
