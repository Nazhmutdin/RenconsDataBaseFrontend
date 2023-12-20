<template>
    <div class="input-area">
        <input @keypress="searchWeldersOnEnter" type="text" v-model="searchValuesString" lab>
        <button @click="searchWelders">Search</button>
    </div>
    <div v-show="getCount() != 0" class="summary-welders-count">
        <span><b>Welders found:</b>&nbsp;{{ getCount() }}</span>
    </div>
    <div class="pagination">
        <WelderRegistryPagination></WelderRegistryPagination>
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
            </tr>
        </thead>
        <tbody>
            <WelderRow v-for="(welder, index) in welders" :status="welder.status" :passportId="welder.passport_id" :key="index" :index="index" :name="welder.name" :kleymo="welder.kleymo" :nation="welder.nation" :birthday="welder.birthday"></WelderRow>
        </tbody>
    </table>

    <table v-else><div class="empty-content-container">Empty😧</div></table>
</template>


<!--
<=====================================================================>
-->


<script>
    import WelderRow from "@/components/welder_registry_components/WelderRow.vue"
    import WelderRegistryPagination from "@/components/welder_registry_components/welderRegistryPagination.vue"

    export default{
        name: "WelderList",
        components: { WelderRow, WelderRegistryPagination },
        methods: {
            async searchWelders() {
                this.$store.commit("welderRegistry/setCurrentPage", 1)
                await this.extractNamesKleymosCertificatioNumbers()
                await this.$store.dispatch("welderRegistry/searchWelders")
            },
            async searchWeldersOnEnter(event){
                if (event.key == "Enter"){
                    await this.searchWelders()
                }
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
            },
            getCount(){
                return this.$store.getters["welderRegistry/getCount"]
            }
        },

        computed: {
            welders: function(){
                return this.$store.getters["welderRegistry/getWelders"]
            }
        },

        data(){
            return {
                searchValuesString: ""
            }
        }
    }
</script>


<!--
<=====================================================================>
-->


<style scoped>
    .input-area{
        margin-bottom: 2vw;
    }
    .summary-welders-count{
        margin-bottom: 1vw;
        font-size: 16px;
        color: rgb(24, 114, 217);
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
        border-bottom: 4px double rgb(32, 78, 186);
    }
    .header-item b {
        font-size: min(2.5vh, 18px);
        color: rgb(24, 114, 217);
    }
    .row-index, .header-row-index{
        width: 4vw;
        text-align: center;
    }
    .welder-name, .header-welder-name{
        width: 30vw;
        text-align: left;
    }
    .welder-kleymo, .header-welder-kleymo{
        width: 6vw;
        text-align: center;
    }
    .welder-birthday, .header-welder-birthday{
        width: 6vw;
        text-align: center;
    }
    .welder-nation, .header-welder-nation{
        width: 6vw;
        text-align: center;
    }
    .welder-passport, .header-welder-passport{
        width: 7vw;
        text-align: center;
    }
    .welder-status, .header-welder-status{
        width: 7vw;
        text-align: center;
        margin: 0;
    }
</style>