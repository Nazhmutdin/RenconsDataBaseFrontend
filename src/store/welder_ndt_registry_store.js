import v1_api from '../api/v1_api/index'


export default{
    namespaced: true,
    state:{
        searchFilters: {},
        searchValues: {},
        ndts: [],
        count: null,
        currentPage: 1,
        pageSize: 100
    },
    mutations:{
        setNDTs(state, value){
            state.ndts = value
        },
        setCount(state, value){
            state.count = value
        },
        setCurrentPage(state, value){
            state.currentPage = value
        },
        setSearchValues(state, value){
            state.searchValues = value
        }
    },
    getters:{
        getSearchValues(state){
            return state.searchValues
        },
        getSearchFilters(state){
            return state.searchFilters
        },
        getCurrentPage(state){
            return state.currentPage
        },
        getPageSize(state){
            return state.pageSize
        },
        getNDTs(state){
            return state.ndts
        },
        getCount(state){
            return state.count
        }
    },
    actions:{
        async getWelderNDTs(context) {

            let payload = {
                ...context.getters["getSearchValues"],
                ...context.getters["getSearchFilters"]
            }

            let page = context.getters["getCurrentPage"]
            let pageSize = context.getters["getPageSize"]
            console.log(page, pageSize)

            const data = (await v1_api.welderNDTs.getWelderNDTs(payload, page, pageSize)).data
            console.log(data)
            context.commit("setNDTs", data.result)
            context.commit("setCount", data.count)
        }
    }
}
