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
            <th class="table-header">diameter(mm)</th>
            <th class="table-header">thikness(mm)</th>
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
                this.certifications = (await this.$v1Api.welderCertifications.getWelderCertifications(this.$route.params.id)).data.result
                console.log(this.certifications)
            }
        }
    }
</script>

<style scoped src="@/styles/welder_page_table.css">
    
</style>