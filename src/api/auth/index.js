import instance from "./instance" 

export default {
    async login(login, password){
        return instance.post(
            "login",
            {
                "login": login,
                "password": password
            } 
        )
    }
}