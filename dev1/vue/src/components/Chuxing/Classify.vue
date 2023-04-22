<template>
  <div class="functions">
    <!-- <h4 style="margin-left:0.625rem;">常用功能</h4> -->
    <ul class="classifyul">
      <router-link v-for="(item,index) in gridlist" :key="index" :to="item.url" tag="li" style="text-align:center;">
        <span :style="{background:item.bcolor,color:item.color}" @click="passid(item.id)">
          <i :class="item.icon"></i>
        </span>
        <div style="font-size:0.3125rem;color:black;margin-top:0.5rem;display:inline-block;width:100%;">{{item.name}}</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods:{
      passid(id){
        this.$store.state.classify.cid=id;
      }
    },
    created(){

    },
    props:["gridlist"]
  }
</script>

<style>
  .functions {
      width: 100%;
      height:30%;
      background-color: white;
      position:absolute;
      top:7rem;
    }
  .classifyul{
    display: flex;
    flex-wrap:wrap;
    list-style:none;
    padding:0;
    margin:0;
  }
  .classifyul li{
    width:20%;
    margin:1rem 0;
  }
  .classifyul li span{
    display:inline-block;
    width:2.5rem;
    height:2.5rem;
    border-radius: 0.9375rem;
  }
</style>
