export default function(instance) {
    return {
        async getWelder(ident) {
            return instance.get(`welders/${ident}`)
        },
        async getWelders(payload, page, pageSize) {
            console.log(payload)
            return instance.post(`welders/?page=${page}&page_size=${pageSize}`, payload)
        }
    }
}
