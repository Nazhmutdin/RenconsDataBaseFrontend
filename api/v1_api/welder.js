export default function(instance) {
    return {
        getWelder(ident) {
            return instance.get(`welders\\${ident}`)
        },
        getWelders(payload, page, pageSize) {
            return instance.post(`welders/?page=${page}&page_size=${pageSize}`, payload)
        }
    }
}
