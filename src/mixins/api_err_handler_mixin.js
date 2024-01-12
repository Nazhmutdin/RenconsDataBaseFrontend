export default{
    methods: {
        async handleApiErr(action, errHandler){
            try{
                await action()
            } catch (err) {
                if (errHandler){
                    errHandler(err)
                } else{
                    console.log(err.response.data)
                }
            }
        }
    }
}