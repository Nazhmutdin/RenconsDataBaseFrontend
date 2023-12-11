<template>
    <tr class="welder-row">
        <th class="row-item welder-name"><a href="" class="row-link welder-link">{{ fullName }}</a></th>
        <td class="row-item welder-kleymo"><span>{{ kleymo }}</span></td>
        <td class="row-item welder-additional-data welder-certifications-window"><span>show</span></td>
        <td class="row-item welder-additional-data welder-ndts-window"><span>show</span></td>
    </tr>
</template>


<!--
<=====================================================================>
-->


<script>
    export default {
        name: "WelderRow",
        props: {
            fullName: {
                type: String,
                default: "-",
            },
            kleymo: {
                type: String,
                default: "-",
            }
        }
    }

</script>


<!--
<=====================================================================>
-->


<style>
    .welder-row{
        height: 3vh;
    }
    .row-item{
        float: left;
        width: 15vw;
        font-size: 18px;
        color: rgb(7, 80, 175);
    }

    .row-item:not(:first-child){
        display: flex;
    }

    .welder-name{
        text-align: left;
    }

    .row-item:first-child{
        width: 35vw
    }

    .welder-link{
        text-decoration: none;
        font-weight: 900;
        color: rgb(7, 80, 175)
    }

    .welder-additional-data{
        transition: all .1 ease;
    }

    .welder-additional-data span:hover{
        font-weight: 900;
        cursor: pointer;
    }
</style>