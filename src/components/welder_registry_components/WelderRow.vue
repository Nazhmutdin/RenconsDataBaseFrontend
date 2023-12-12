<template>
    <tr class="welder-row">
        <td class="row-item row-index"><span>{{ index + 1 }}</span></td>
        <th class="row-item welder-name"><a href="" class="welder-link">{{ name }}</a></th>
        <td class="row-item welder-kleymo"><span>{{ kleymo }}</span></td>
        <td class="row-item welder-birthday"><span>-</span></td>
        <td class="row-item welder-passport"><span>-</span></td>
        <td class="row-item welder-sicil"><span>-</span></td>
        <td class="row-item welder-nation"><span>{{ nation }}</span></td>
        <td class="row-item row-welder-certifications welder-certifications"><span>show</span></td>
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
                default: "-",
            },
            passportId: {
                type: String,
                default: "-",
            },
            sicilNumber: {
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
        font-size: 16px;
        color: rgb(7, 80, 175);
    }

    .welder-link{
        text-decoration: none;
        font-weight: normal;
        color: rgb(7, 80, 175);
        transition: all .1 ease;
    }

    .row-welder-certifications{
        transition: all .1 ease;
    }

    .welder-link:hover{
        font-weight: bold;
        cursor: pointer;
    }

    .row-welder-certifications span:hover{
        font-weight: bold;
        cursor: pointer;
    }
</style>