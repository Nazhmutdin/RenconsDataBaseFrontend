export default function(instance) {
    return {
        async getWelderCertification(ident) {
            return instance.get(`welder-certifications/${ident}`)
        },
        async getWelderCertifications(payload, page, pageSize) {
            return instance.post(`welder-certifications/?page=${page}&page_size=${pageSize}`, payload)
        }
    }
}
