import axios from "axios"

const instance = axios.create(
    {
        baseURL: "http://10.10.116.158:8000/api/v1/",
        headers: {
            "Accept": "application/json",
            "Access-Control-Allow-Origin": true
        }
    }
)

export default instance