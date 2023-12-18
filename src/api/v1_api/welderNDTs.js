export default function(instance) {
    return {
        async getWelderNDT(ident) {
            return instance.get(`welder-ndts/${ident}`)
        },
        async getWelderNDTs(kleymo) {
            return instance.post(`welder-ndts/`, 
            {
                kleymos: [kleymo]
            })
        }
    }
}