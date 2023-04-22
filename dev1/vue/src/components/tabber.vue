<template>
      <ul class="navul">
        <router-link to="/chuxing" tag="li">
          <i class="iconfont icon-route-fill"></i><span>出行</span>
        </router-link>

        <router-link to="/zhoubian" tag="li">
          <i class="iconfont icon-yangshi_icon_tongyong_compass"></i><span>周边</span>
        </router-link>
        
        <router-link to="/dache" tag="li">
          <i class="iconfont icon-taxi-fill"></i><span>打车</span>
        </router-link>

       <li @click="wode()" id="wode">
         <i class="iconfont icon-yangshi_icon_tongyong_my_account"></i><span>我的</span>
       </li>
      </ul>



</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      flag:0
      // navlist:[
      //   {name:"出行",icon:"iconfont icon-route-fill",url:"/chuxing"},
      //   {name:"周边",icon:"iconfont icon-yangshi_icon_tongyong_compass",url:"/zhoubian"},
      //   {name:"我的",icon:"iconfont icon-yangshi_icon_tongyong_my_account",url:""}
      // ]
    }
  },
  methods:{
    wode(){
         var listitem=JSON.parse(localStorage.getItem("users")||"[]");
         for(var i=0;i<listitem.length;i++){
           if(listitem[i].phone=='12345678901'){
             this.$router.push('/wode');
             this.flag=1;
           }
         }
         if(this.flag==0||listitem.length==0){
           this.$router.push('/denglu');
         }

    }
  },
  mounted(){

  }
}
</script>


<style>

</style>
