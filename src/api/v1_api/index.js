import welderHttp from "./welder"
import welderCertificationHttp from "./welderCertification"
import welderNDTsHttp from "./welderNDTs"
import instance from "./instance"

export default {
    welder: welderHttp(instance),
    welderCertifications: welderCertificationHttp(instance),
    welderNDTs: welderNDTsHttp(instance)
}
