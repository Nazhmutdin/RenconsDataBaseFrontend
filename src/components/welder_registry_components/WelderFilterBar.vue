<template>
    <div class="filter-bar">
        <ul class="filters">
            <li class="filter">
                <strong>certification date:</strong>
                <div class="from_before">
                    <div class="from_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                        <input @change="setSearchFilters" v-model="searchFilters.certificationDateFrom" type="date" class="filter-input date-filter-input">  
                    </div>
                    <div class="before_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                        <input @change="setSearchFilters" v-model="searchFilters.certificationDateBefore" type="date" class="filter-input date-filter-input">
                    </div>
                </div>
            </li>
            <li class="filter">
                <strong>expiration date:</strong>
                <div class="from_before">
                    <div class="from_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                        <input @change="setSearchFilters" v-model="searchFilters.expirationDateFrom" type="date" class="filter-input date-filter-input">
                    </div>
                    <div class="before_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                        <input @change="setSearchFilters" v-model="searchFilters.expirationDateBefore" type="date" class="filter-input date-filter-input">
                    </div>
                </div>
            </li>
            <li class="filter">
                <strong>expiration date (fact):</strong>
                <div class="from_before">
                    <div class="from_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                        <input @change="setSearchFilters" v-model="searchFilters.expirationDateFactFrom" type="date" class="filter-input date-filter-input">
                    </div>
                    <div class="before_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                        <input @change="setSearchFilters" v-model="searchFilters.expirationDateFactBefore" type="date" class="filter-input date-filter-input">
                    </div>
                </div>
            </li>
            <li class="filter">
                <strong>detail thikness (mm):</strong>
                <div class="from_filter">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                    <input @change="setSearchFilters" v-model="searchFilters.detailThiknessFrom" type="number" class="filter-input filter-mm-number" pattern="\d+(\.\d+)?">
                </div>
                <div class="before_filter">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                    <input @change="setSearchFilters" v-model="searchFilters.detailThiknessBefore" type="number" class="filter-input filter-mm-number" pattern="\d+(\.\d+)?">
                </div>
            </li>
            <li class="filter">
                <strong>detail diameter (mm):</strong>
                <div class="from_filter">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                    <input @change="setSearchFilters" v-model="searchFilters.detailDiameterFrom" type="number" class="filter-input filter-mm-number" pattern="\d+(\.\d+)?">
                </div>
                <div class="before_filter">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                    <input @change="setSearchFilters" v-model="searchFilters.detailDiameterBefore" type="number" class="filter-input filter-mm-number" pattern="\d+(\.\d+)?">
                </div>
            </li>
            <li class="filter status-filter">
                <strong>status true:&nbsp;</strong>
                <input @change="setSearchFilters" v-model="searchFilters.status" class="filter-input" type="checkbox">
            </li>
        </ul>
    </div>
</template>



<!--
<=====================================================================>
-->


<script>
    export default{
        name: "WelderFilterBar",
        data(){
            return {
                searchFilters: {
                    certificationDateFrom: null,
                    certificationDateBefore: null,
                    expirationDateFrom: null,
                    expirationDateBefore: null,
                    expirationDateFactFrom: null,
                    expirationDateFactBefore: null,
                    detailThiknessFrom: null,
                    detailThiknessBefore: null,
                    detailDiameterFrom: null,
                    detailDiameterBefore: null,
                    status: 0
                }
            }
        },
        methods: {
            async setSearchFilters(){
                console.log(this.searchFilters)
                this.$store.commit("welderRegistry/setSearchFilters", this.searchFilters)
            }
        },
    }
</script>


<!--
<=====================================================================>
-->


<style>
    .filters{
        padding-left: 25px;
        padding-top: .3vw;
    }

    .filter-bar{
        background: rgb(213, 237, 249);
        border-radius: 7px;
        border: 2px solid blue;
        position: fixed;
        width: 18vw;
        font-size: max(16px, 1.1vw);
    }

    .filter{
        color:blue;
        list-style: none;
        padding-bottom: 1vw;
    }

    .filter:not(:last-child)::after{
        content: "";
        display: block;
        margin: 1vw auto 0;
        width: 6vw;
        height: 2px;
        background-color: rgb(33, 33, 248);
    }

    .materials-filter-input{
        width: 5.5vw;
        margin: auto 10px;
    }

    .select-button{
        height: max(16px, 1.1vw);
        border: rgb(152, 201, 245) solid 1px;
        background-color: rgb(221, 245, 252);
        border-radius: 5px;
    }

    .accordion{
        margin: 0;
    }

    .accordion-select{
        display: block;
    }

    .filter-input{
        border: rgb(152, 201, 245) solid 1px;
        border-radius: 5px;
        background-color: rgb(221, 245, 252);
        height: max(14px, .9vw);
    }

    .date-filter-input{
        width: 7vw;
    }

    .filter-mm-number{
        width: 5vw;
    }

    .from_filter, .before_filter{
        padding-top: 5px;
    }

    .status-filter .filter-input{
        padding-top: 100px;
    }

    .filter-input:focus{ 
        outline: none; 
    }
</style>