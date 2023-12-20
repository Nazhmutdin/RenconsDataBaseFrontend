<template>
    <tr class="welder-row">
        <td class="row-item row-index"><span>{{ index + 1 }}</span></td>
        <th class="row-item welder-name"><router-link :to="{ name: 'welder', params: { id: kleymo } }" class="welder-link">{{ name }}</router-link></th>
        <td class="row-item welder-kleymo"><span>{{ kleymo }}</span></td>
        <td class="row-item welder-birthday"><span>-</span></td>
        <td class="row-item welder-nation"><span>-</span></td>
        <td class="row-item welder-passport"><span>-</span></td>
        <td v-if="status==0" class="row-item welder-status"><span>&#10008;</span></td>
        <td v-else-if="status==1" class="row-item welder-status"><span>&#10004;</span></td>
        <!-- <td class="row-item row-welder-certifications welder-certifications"><span>show</span></td> -->
    </tr>
</template>


<!--
<=====================================================================>
-->


<script>
    export default {
        name: "WelderRow",
        props: {
            index: {
                type: Number,
            },
            name: {
                type: String,
                default: "-",
            },
            kleymo: {
                type: String,
                default: "-",
            },
            birthday: {
                type: String,
                default: "-",
            },
            nation: {
                type: String,
                default: "",
            },
            passportId: {
                type: String,
                default: "-",
            },
            status: {
                type: Number,
            }
        }
    }

</script>


<!--
<=====================================================================>
-->


<style scoped>
    .row-item{
        float: left;
        height: 3vh;
        color: rgb(7, 80, 175);
    }
    .welder-link{
        text-decoration: none;
        font-weight: normal;
        color: rgb(7, 80, 175);
        transition: all .1 ease;
    }
    .welder-link:hover{
        font-weight: bold;
        cursor: pointer;
    }
    .row-index{
        width: 4vw;
        text-align: center;
    }
    .welder-name{
        width: 30vw;
        text-align: left;
    }
    .welder-kleymo{
        width: 6vw;
        text-align: center;
    }
    .welder-birthday{
        width: 6vw;
        text-align: center;
    }
    .welder-nation{
        width: 6vw;
        text-align: center;
    }
    .welder-passport{
        width: 7vw;
        text-align: center;
    }
    .welder-status{
        width: 7vw;
        text-align: center;
        margin: 0;
    }
    .welder-row th, .welder-row td{
        border-bottom: 1px solid rgb(78, 184, 238);
    }
</style>