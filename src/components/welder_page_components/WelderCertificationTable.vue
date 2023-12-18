<template>
<div class="welder-certifications-table-block">
    <span>Certifications:</span>
    <table class="welder-certifications-table">
        <thead>
            <th class="table-header">certification number</th>
            <th class="table-header">method</th>
            <th class="table-header">certification date</th>
            <th class="table-header">expiration date</th>
            <th class="table-header">expirations date (fact)</th>
            <th class="table-header">diameter(mm)</th>
            <th class="table-header">thikness(mm)</th>
            <th class="table-header">GTD</th>
        </thead>
        <tbody>
            <WelderCertificationTableRow v-for="(certification, index) in certifications" 
            :key="index"
            :certification="certification"></WelderCertificationTableRow>
        </tbody>
    </table>
</div>
</template>

<script>
    import utils from "@/mixins/utils.js"
    import WelderCertificationTableRow from "@/components/welder_page_components/WelderCertificationTableRow"
    export default{
        name: "WelderCertificationTable",
        mixins: [utils],
        components: { WelderCertificationTableRow },
        data(){
            return {
                welder: this.getWelder(),
                certifications: this.getWelderCertification()
            }
        },
        methods: {
            async getWelder() {
                this.welder = (await this.$v1Api.welder.getWelder(this.$route.params.id)).data
                console.log(this.welder)
            },
            async getWelderCertification() {
                this.certifications = (await this.$v1Api.welderCertifications.getWelderCertifications(this.$route.params.id)).data.result
                console.log(this.certifications)
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
    .welder-certifications-table-block{
        margin: 2vw 0 0 0;
    }
    .welder-certifications-table{
        margin: 0;
        border-collapse: collapse; 
        border-spacing: 0;
    }
    thead th{
        color: rgb(21, 82, 151);
        font-weight: bold;
        font-size: max(18px, 14px);
        border-bottom: 5px double blue;
        padding: 0 5vw;
        padding: 0;
    }
    .table-header{
        padding: 0 15px;
    }
</style>