<template>
    <div class="filter-bar">
        <ul class="filters">
            <li class="filter">
                <strong>certification date: </strong>
                <div class="from_before">
                    <div class="from_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;from </span>
                        <input type="date" class="filter-input date-filter-input">  
                    </div>
                    <div class="before_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;before </span>
                        <input type="date" class="filter-input date-filter-input">
                    </div>
                </div>
            </li>
            <li class="filter">
                <strong>expiration date</strong>
                <div class="from_before">
                    <div class="from_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                        <input type="date" class="filter-input date-filter-input">
                    </div>
                    <div class="before_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                        <input type="date" class="filter-input date-filter-input">
                    </div>
                </div>
            </li>
            <li class="filter">
                <strong>detail thikness (mm)</strong>
                <div class="from_filter">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                    <input type="number" class="filter-input mm-number" pattern="\d+(\.\d+)?">
                </div>
                <div class="before_filter">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                    <input type="number" class="filter-input mm-number" pattern="\d+(\.\d+)?">
                </div>
            </li>
            <li class="filter">
                <strong>detail diameter (mm)</strong>
                <div class="from_filter">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                    <input type="number" class="filter-input mm-number" pattern="\d+(\.\d+)?">
                </div>
                <div class="before_filter">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                    <input type="number" class="filter-input mm-number" pattern="\d+(\.\d+)?">
                </div>
            </li>
            <li class="filter materials-filter">
                <strong>materials:&nbsp;</strong>
                <button class="select-button" value="hide" @click="searchFunction">Select</button>
                <div class="accordion">
                    <div class="accordion-select" ref="accordionSelect">
                    </div>
                </div>
            </li>
            <li class="filter">
                <strong>GTD: &nbsp;</strong>
                <button class="select-button" value="hide" @click="searchFunction">Select</button>
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
        methods: {
            searchFunction(event){
                console.log(`\\`)
                if (event.target.value === "hide"){
                    this.$refs.accordionSelect.style.display = "block"
                    event.target.value = "block"
                }
                else {
                    this.$refs.accordionSelect.style.display = "none"
                    event.target.value = "hide"
                }
            }
        }
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
        width: 16vw;
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
        width: 5vw;
        height: max(14px, .9vw);
    }

    .from_filter, .before_filter{
        padding-top: 5px;
    }

    .filter-input:focus{ 
        outline: none; 
    }
</style>