export default function(instance){
    return {
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
}