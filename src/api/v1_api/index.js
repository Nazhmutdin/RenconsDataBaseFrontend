import welder_http from "./welder"
import instance from "./instance"

export default {
    welder: welder_http(instance)
}
