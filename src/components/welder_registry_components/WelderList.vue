<template>
    <div v-show="getCount() != 0" class="summary-welders-count">
        <span><b>Welders found:</b>&nbsp;{{ getCount() }}</span>
    </div>
    <table v-if="welders.length != 0" class="content-table">
        <thead class="content-table-header">
            <tr>
                <th class="header-item header-row-index">№</th>
                <th class="header-item header-welder-name">Full Name</th>
                <th class="header-item header-welder-kleymo">Kleymo</th>
                <th class="header-item header-welder-birthday">Birthday</th>
                <th class="header-item header-welder-nation">Nation</th>
                <th class="header-item header-welder-passport">Passport</th>
                <th class="header-item header-welder-status">Status</th>
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

    export default{
        name: "WelderList",
        components: { WelderRow },
        methods: {
            getCount(){
                return this.$store.getters["welderRegistry/getCount"]
            }
        },
        computed: {
            welders: function(){
                return this.$store.getters["welderRegistry/getWelders"]
            }
        }
    }
</script>


<!--
<=====================================================================>
-->


<style scoped>
    .summary-welders-count{
        margin-bottom: 1vw;
        font-size: 16px;
        color: rgb(24, 114, 217);
    }
    .content-table{
        margin: 0;
    }
    .header-item{
        float: left;
        border-bottom: 4px double rgb(32, 78, 186);
        font-size: min(2.5vh, 18px);
        font-weight: bold;
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