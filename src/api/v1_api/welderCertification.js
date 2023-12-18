export default function(instance) {
    return {
        async getWelderCertification(ident) {
            return instance.get(`welder-certifications/${ident}`)
        },
        async getWelderCertifications(kleymo) {
            return instance.post(`welder-certifications/`, 
            {
                kleymos: [kleymo]
            })
        }
    }
}
