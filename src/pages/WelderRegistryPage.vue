<template>
  <SideBar></SideBar>
  <div class="content">
    <div class="input-area">
        <input @keypress="searchWeldersOnEnter" type="text" v-model="searchValuesString">
        <button @click="searchWelders">Search</button>
    </div>
    <WelderRegistryPagination></WelderRegistryPagination>
    <WelderRegistryTable></WelderRegistryTable>
  </div>
  <div class="welder-filter-bar">
    <WelderFilterBar></WelderFilterBar>
  </div>
</template>
  
  
<!--
<=====================================================================>
-->


<script>
  import SideBar from "@/components/SideBar.vue"
  import WelderRegistryTable from "@/components/welder_registry_components/WelderRegistryTable.vue"
  import WelderFilterBar from "@/components/welder_registry_components/WelderFilterBar.vue"
  import WelderRegistryPagination from "@/components/welder_registry_components/welderRegistryPagination.vue"

  export default{
    name: "WelderRegistry",
    data(){
      return {
        searchValuesString: ""
      }
    },
    components: { SideBar, WelderRegistryTable, WelderFilterBar, WelderRegistryPagination },
    methods: {
      searchWelders() {
        this.$store.commit("welderRegistry/setCurrentPage", 1)
        this.extractSearchValues()
        this.$store.dispatch("welderRegistry/getWelders")
      },
      searchWeldersOnEnter(event){
        if (event.key == "Enter"){
          this.searchWelders()
        }
      },
      extractSearchValues(){
        if (this.searchValuesString === ""){
          return 
        }
        let kleymos = [];
        let certificationNumbers = []
        let names = []
        let searchValues = this.searchValuesString.split(';');

        for (let i = 0; i < searchValues.length; i++){
          let value = searchValues[i].trim()
          if (/^[A-Z0-9]{4}$/.test(value)) {
            kleymos.push(value)
          }
          else if (/^[А-Я]+[-][0-9А-Я]+[-][IV]+[-][0-9]+$/.test(value)) {
            certificationNumbers.push(value)
          }
          else {
            names.push(value)
          }
        }

        this.$store.commit("welderRegistry/setSearchValues", {
          'kleymos': kleymos,
          'names': names,
          'certificationNumbers': certificationNumbers
        })
      }
    }
  }
</script>


<!--
<=====================================================================>
-->


<style scoped>
  body {
      background: rgb(237, 246, 252); 
  }
  *{
      margin: auto;
  }
  .content{
    float: left;
    margin: 2vw;
    margin-top: 5vw;
  }
  .welder-filter-bar{
    margin-top: 12vh;
    width: 20vw;
    float: right;
  }
  .input-area{
    margin-bottom: 2vw;
  }
  .input-area input[type=text]{
    width: 40vw;
    height: 3vh;
    margin-right: 2vw;
    border: 1px solid blue;
    border-radius: 5px;
  }
  .input-area button{
    background-color: aqua;
    border: 1px solid lightblue;
    border-radius: 5px;
  }
  .input-area input:focus{
    border: 3px solid lightblue;
    border-radius: 5px;
  }
  .input-area button:hover{
    cursor: pointer
  }
</style>
