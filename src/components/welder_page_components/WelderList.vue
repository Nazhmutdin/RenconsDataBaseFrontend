<template>
    <div class="input-area">
        <input type="text" v-model="search_value">
        <button @click="searchWelder">Search</button>
    </div>
    <table v-if="welders.length != 0" class="content-table">
        <thead class="content-table-header">
            <tr>
                <th class="header-item welder-name"><b>Full Name</b></th>
                <th class="header-item welder-kleymo"><b>Kleymo</b></th>
                <th class="header-item welder-certifications-window"><b>Certifications</b></th>
                <th class="header-item welder-ndts-window"><b>NDTs</b></th>
            </tr>

        </thead>
        <tbody>
            <WelderRow v-for="(welder, index) in welders" :key="index" :fullName="welder.fullName" :kleymo="welder.kleymo"></WelderRow>
        </tbody>
    </table>

    <table v-else><div class="empty-content-container">Empty😧</div></table>
</template>


<!--
<=====================================================================>
-->


<script>
    import WelderRow from "@/components/welder_page_components/WelderRow.vue"

    export default{
        name: "WelderList",
        components: { WelderRow },
        methods: {
            async searchWelder() {
                const data = (await this.$v1Api.welder.getWelders(undefined, 1, 100)).data
                console.log(data)
                this.welders = data.result
            }
        },

        data(){
            return {
                search_value: "",
                welders: []
            }
        }
    }
</script>


<!--
<=====================================================================>
-->


<style>
    .input-area{
        margin-bottom: 2vw;
    }

    .input-area input[type=text]{
        width: 25vw;
        height: 3vh;
        margin-right: 2vw;
        border: 1px solid blue;
        border-radius: 5px;
    }

    .input-area button{
        background-color: aqua;
        border: 1px solid lightblue;
        border-radius: 5px;
    }

    .input-area input:focus{
        border: 3px solid lightblue;
        border-radius: 5px;
    }

    .input-area button:hover{
        cursor: pointer
    }

    .content-table{
        margin: 0;
    }

    .header-item{
        float: left;
        width: 15vw;
        font-size: 20px;
        color: rgb(24, 114, 217);
        margin: 0;
    }

    .welder-ndts-window, .welder-kleymo{
        width: 8vw
    }

    .header-item:first-child{
        width: 35vw
    }

    .header-item{
        display: flex;
    }

    .content tr th, .content tr td{
        border-bottom: 1px solid rgb(78, 184, 238);
    }
</style>