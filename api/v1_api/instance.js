import axios from "axios"

const instance = axios.create(
    {
        baseURL: "http://localhost:80/api/v1/",
        headers: {
            "Accept": "application/json",
            "Access-Control-Allow-Origin": true
        }
    }
)

export default instance