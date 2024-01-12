<template>
    <RegistryRow>
        <td class="row_cell row_index"><span>{{ index + 1 }}</span></td>
        <td class="row_cell name"><router-link :to="{ name: 'welder', params: { id: kleymo } }" class="welder_link">{{ name }}</router-link></td>
        <td class="row_cell kleymo"><span>{{ kleymo }}</span></td>
        <td class="row_cell birthday"><span>{{ birthday }}</span></td>
        <td class="row_cell nation"><span>{{ nation }}</span></td>
        <td class="row_cell passport"><span>{{ passportId }}</span></td>
        <td class="row_cell sicil"><span>{{ sicilNumber }}</span></td>
        <td v-if="status==0" class="row_cell status status_not_ok">&#10008;</td>
        <td v-else-if="status==1" class="row_cell status status_ok">&#10004;</td>
    </RegistryRow>
</template>


<script>
    import RegistryRow from "@/components/RegistryRow.vue"

    export default{
        name: "WelderRegisrtyRow",
        components: { RegistryRow },
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
            sicilNumber: {
                type: String,
                default: "-",
            },
            status: {
                type: Number,
            }
        }
    }
</script>

<style scoped>
    .row_index{
        min-width: 3vw;
    }
    .name{
        text-align: left;
        min-width: 15vw;
    }
    .kleymo{
        min-width: 5vw;
    }
    .birthday{
        min-width: 3vw;
    }
    .welder_link{
        text-decoration: none;
        color: rgb(7, 80, 175);;
    }
    .status_ok{
        color: green;
    }
    .status_not_ok{
        color: red;
    }
    .welder_link:hover{
        cursor: pointer;
        font-weight: bold;
    }
</style>