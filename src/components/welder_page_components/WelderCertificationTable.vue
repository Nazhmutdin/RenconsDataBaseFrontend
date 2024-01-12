<template>
<div class="welder-certifications-table welder-table">
    <h2>Certifications ({{ certifications.length }})</h2>
    <table>
        <thead>
            <th class="table-header">№</th>
            <th class="table-header">certification number</th>
            <th class="table-header">method</th>
            <th class="table-header">certification date</th>
            <th class="table-header">expiration date</th>
            <th class="table-header">expirations date (fact)</th>
            <th class="table-header">diameter (mm)</th>
            <th class="table-header">thikness (mm)</th>
            <th class="table-header">GTD</th>
        </thead>
        <tbody>
            <WelderCertificationTableRow v-for="(certification, index) in certifications" 
            :key="index"
            :index="index"
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
                certifications: this.getWelderCertifications()
            }
        },
        methods: {
            async getWelderCertifications() {
                let payload = {
                    kleymos: [this.$route.params.id]
                }
                this.certifications = (await this.$api.v1Api.getWelderCertifications(payload, 1, 100)).data.result
                console.log(this.certifications)
            }
        }
    }
</script>

<style scoped src="@/styles/welder_page_table.css">
    .welder-certifications-table::after{
        content: "";
        display: block;
        margin: 1vw auto 0;
        width: 80%;
        height: 10px;
        background-color: rgb(33, 33, 248);
    }
</style>
