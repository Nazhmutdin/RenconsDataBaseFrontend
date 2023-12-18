<template>
    <div class="welder-page">
        <div class="welder-data-block">
            <div class="name-kleymo-area">
                <span class="welder-name-kleymo">{{ welder.name }} ({{ welder.kleymo }})</span>
                <span v-if="welder.staus == 0" class="welder-status ok-status">&#10004;</span>
                <span v-else="welder.staus == 1" class="welder-status not-ok-status">&#10008;</span>
            </div>
            <div class="welder-data">
                <div class="passport">
                    <h3>Passport: {{ passport }}</h3>
                </div>
                <div class="birthday">
                    <h3>Birthday: {{ birthday }}</h3>
                </div>
                <div class="nation">
                    <h3>Nation: {{ nation }}</h3>
                </div>
            </div>
        </div>
        <WelderCertificationTable></WelderCertificationTable>
    </div>
</template>

<script>
    import utils from "@/mixins/utils.js"
    import WelderCertificationTable from "@/components/welder_page_components/WelderCertificationTable"
    export default{
        name: "WelderPage",
        mixins: [utils],
        components: { WelderCertificationTable },
        data(){
            return {
                welder: this.getWelder()
            }
        },
        methods: {
            async getWelder() {
                this.welder = (await this.$v1Api.welder.getWelder(this.$route.params.id)).data
                console.log(this.welder)
            }
        },
        computed: {
            passport: function(){
                if (this.welder.passport_id !== null){
                    return this.welder.passport_id
                }

                return "-"
            },
            birthday: function(){
                if (this.welder.birthday !== null){
                    return this.formatDate(this.welder.birthday, "ru-RU")
                }

                return "-"
            },
            nation: function(){
                if (this.welder.nation !== null){
                    return this.welder.nation
                }

                return "-"
            }
        }
    }
</script>

<style>
    .welder-page{
        margin: 2vh 0 0 1vw ;
    }
    .welder-status{
        margin-left: 10px;
    }
    .ok-status{
        color:green;
    }
    .not-ok-status{
        color:red;
    }
    .name-kleymo-area{
        color: rgb(21, 82, 151);
        font-size: 30px;
    }
    .welder-name-kleymo{
        font-weight: bold;
    }
    .welder-data{
        margin-top: 1.5vh;
    }
    .welder-data div{
        color: rgb(21, 82, 151);
        font-size: 18px;
        font-weight: 600;
        margin-bottom: .5vh;
    }
</style>