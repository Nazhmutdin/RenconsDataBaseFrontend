<template>
  <SideBar></SideBar>
  <div class="content">
    <WelderList></WelderList>
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
  import WelderList from "@/components/welder_registry_components/WelderList.vue"
  import WelderFilterBar from "@/components/welder_registry_components/WelderFilterBar.vue"

  export default{
    name: "WelderRegistry",
    components: { SideBar, WelderList, WelderFilterBar }
  }
</script>


<!--
<=====================================================================>
-->


<style>

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
</style>
