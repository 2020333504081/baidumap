<template>
  <div id="app">
    <tabber v-show="$route.meta.show"></tabber>

    <router-view/>
  </div>
</template>

<script>
  import tabber from "@/components/tabber"
export default {
  name: 'App',
  components:{tabber},
  mounted(){
    this.$axios({
      url: "http://localhost:8080/web22/fromCollections",
      method: "get",
      params: {

      }
    }).then((result) => {

  this.$store.dispatch('collect/loadData',result.data);

    }).catch(err => console.log(err))
    
  }
}
</script>

<style>

</style>
