export default function(instance) {
    return {
        async getWelderNDT(ident) {
            return instance.get(`welder-ndts/${ident}`)
        },
        async getWelderNDTs(payload, page, pageSize) {
            console.log(payload)
            return instance.post(`welder-ndts/?page=${page}&page_size=${pageSize}`, payload)
        }
    }
}