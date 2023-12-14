<template>
    <div class="input-area">
        <input type="text" v-model="searchValuesString" lab>
        <button @click="searchWelders">Search</button>
    </div>
    <table v-if="welders.length != 0" class="content-table">
        <thead class="content-table-header">
            <tr>
                <th class="header-item header-row-index"><b>№</b></th>
                <th class="header-item header-welder-name"><b>Full Name</b></th>
                <th class="header-item header-welder-kleymo"><b>Kleymo</b></th>
                <th class="header-item header-welder-birthday"><b>Birthday</b></th>
                <th class="header-item header-welder-nation"><b>Nation</b></th>
                <th class="header-item header-welder-passport"><b>Passport</b></th>
                <th class="header-item header-welder-status"><b>Status</b></th>
                <th class="header-item header-welder-certifications"><b>Certifications</b></th>
            </tr>

        </thead>
        <tbody>
            <WelderRow v-for="(welder, index) in welders" :status="welder.status" :sicilNumber="welder.sicil_number" :passportId="welder.passport_id" :key="index" :index="index" :name="welder.name" :kleymo="welder.kleymo" :nation="welder.nation" :birthday="welder.birthday"></WelderRow>
        </tbody>
    </table>

    <table v-else><div class="empty-content-container">Empty😧</div></table>
</template>


<!--
<=====================================================================>
-->


<script>
    import WelderRow from "@/components/welder_registry_components/WelderRow.vue"

    export default{
        name: "WelderList",
        components: { WelderRow },
        methods: {
            async searchWelders() {
                await this.extractNamesKleymosCertificatioNumbers()
                await this.$store.dispatch("welderRegistry/searchWelders")
                this.welders = await this.$store.getters["welderRegistry/getWelders"]
                console.log(await this.$store.getters["welderRegistry/getCount"])
            },
            async extractNamesKleymosCertificatioNumbers(){
                let kleymos = [];
                let certificationNumbers = []
                let names = []
                let searchValues = this.searchValuesString.split(';');

                for (let i = 0; i < searchValues.length; i++){
                    let value = searchValues[i].trim()
                    if (/^[A-Z0-9]{4}$/.test(value)) {
                        kleymos.push(value)
                    }
                    else if (/^[А-Я]+[-][0-9А-Я]+[-][IV]+[-][0-9]+$/.test(value)) {
                        certificationNumbers.push(value)
                    }
                    else {
                        names.push(value)
                    }
                }

                this.$store.commit("welderRegistry/setSearchValues", {
                    'kleymos': kleymos,
                    'names': names,
                    'certificationNumbers': certificationNumbers
                })
            }
        },

        data(){
            return {
                searchValuesString: "",
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
        width: 40vw;
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
        font-size: min(2.5vh, 18px);
        color: rgb(24, 114, 217);
        margin: 0;
    }

    .welder-kleymo, .header-welder-kleymo{
        width: 6vw;
        text-align: center;
    }

    .welder-birthday, .header-welder-birthday{
        width: 6vw;
        text-align: center;
    }

    .row-index, .header-row-index{
        width: 4vw;
        text-align: center;
    }

    .welder-name{
        width: 25vw;
        text-align: left;
    }

    .welder-name span{
        padding-left: 2px;
    }

    .header-welder-name{
        width: 25vw;
        text-align: left;
    }

    .welder-passport, .header-welder-passport{
        width: 7vw;
        text-align: center;
    }

    .welder-status, .header-welder-status{
        width: 7vw;
        text-align: center;
    }

    .welder-nation, .header-welder-nation{
        width: 6vw;
        text-align: center;
    }

    .welder-certifications, .header-welder-certifications{
        width: 10vw;
        text-align: center;
    }

    .content tr th, .content tr td{
        border-bottom: 1px solid rgb(78, 184, 238);
    }
</style>