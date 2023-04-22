<template>
  <div>
    <!-- 搜索框 -->
  <span class="s1">
    <i @click="goback()" class="glyphicon glyphicon-chevron-left" style="z-index:1000;position:fixed;font-size:2rem;margin-top:2rem;margin-left:1rem;"></i>
    <div class="search">
      <span class="ss1"></span><div class="up">我的位置</div>
      <span class="ss2"></span>
     <span class="ss3" ></span>
     <span class="ss4"></span>
      <span class="ss5"></span><div class="down">终点</div>
      <div class="sd1">
        <i class="iconfont icon-jia" style="font-size:30px;"></i>
        <i class="iconfont icon-route-fill" style="font-size:30px;"></i>
        <i class="iconfont icon-yangshi_icon_tongyong_voice" style="font-size:30px;"></i>
      </div>
    </div>
</span>
<!-- 左右滑动菜单 -->
    <div class="menu" id="menu">
      <ul>
        <li v-for="(item,index) in menulist" :key="index"
        :class="active==index ? 'activeClass1':'activeClass2'" :id="index" v-model="x" @click="selectOne(index)"><i :class="item.icon" style="margin-right:0.3125rem;" v-show="x==index"></i>{{item.name}}</li>
      </ul>
    </div>
<!-- 切换内容 -->
<Public v-if="x==3"></Public>
<Newpower v-if="x==0"></Newpower>
<Hailing v-if="x==1"></Hailing>
<Jiache v-if="x==2"></Jiache>
<Zhixing v-if="x==4"></Zhixing>
<Buxing v-if="x==5"></Buxing>
<Qixing v-if="x==6"></Qixing>
<Huoche v-if="x==7||x==8||x==9"></Huoche>
  <Motuo v-if="x==10"></Motuo>
  </div>
</template>

<script>
import Public from '@/components/Details/Public.vue'
import Newpower from '@/components/Details/Newpower.vue'
import Hailing from '@/components/Details/Hailing'
import Jiache from '@/components/Details/Jiache'
import Zhixing from '@/components/Details/Zhixing'
import Buxing from '@/components/Details/Buxing'
import Qixing from '@/components/Details/Qixing'
import Huoche from '@/components/Details/Huoche'
import Motuo from '@/components/Details/Motuo'
export default{
    data(){
      return{
        menulist:[
          {name:"新能源",icon:"iconfont icon-dianchi",bcolor:"green"},
          {name:"打车",icon:"iconfont icon-taxi-fill",bcolor:"green"},
          {name:"驾车",icon:"iconfont icon-yangshi_icon_tongyong_car",bcolor:"green"},
          {name:"公共交通",icon:"iconfont icon-yangshi_icon_tongyong_bus",bcolor:"green"},
          {name:"智行",icon:"iconfont icon-dingshi",bcolor:"green"},
          {name:"步行",icon:"iconfont icon-walk-line",bcolor:"green"},
          {name:"骑行",icon:"iconfont icon-riding-fill",bcolor:"green"},
          {name:"火车",icon:"iconfont icon-huochepiaomianxing",bcolor:"green"},
          {name:"飞机",icon:"iconfont icon-lvxing",bcolor:"green"},
          {name:"客车",icon:"iconfont icon-keche",bcolor:"green"},
          {name:"摩托车",icon:"iconfont icon-motuoche",bcolor:"green"}
        ],
        x:-1,
        active:-1
      }
    },
    methods:{

    goback(){
      this.$router.go(-1);
    },
    selectOne(index){
       this.x=index;
        this.active=index;
        //console.log(this.$store.state.classify.cid);
    }

     },
     mounted(){
       if(this.$store.state.classify.cid==1){
         this.selectOne(3);
       }else if(this.$store.state.classify.cid==2){
         this.selectOne(2);
       }else if(this.$store.state.classify.cid==3){
         this.selectOne(1);
       }else if(this.$store.state.classify.cid==4){
         this.selectOne(4);
       }else if(this.$store.state.classify.cid==8){
         this.selectOne(6);
       }else if(this.$store.state.classify.cid==9){
         this.selectOne(5);
       }
     },
   components:{
     Public,
     Newpower,
     Hailing,
     Jiache,
     Zhixing,
     Buxing,
     Qixing,
     Huoche,
     Motuo
   }

  }
</script>

<style>
  .s1{
    position:fixed;
    top:0;
    z-index:500;
    background-color:white;
    display: inline-block;
    width:100%;
    height:10rem;
  }
  .search{
    width:31.25rem;
    height:8rem;
    background-color: #f7f7f7;
    border-radius: 0.5rem;
    margin-left:4.5rem;
    margin-top:1rem;
    padding-left:3.5rem;
    /* position:fixed; */
    z-index:1000;
  }
  .search .ss1{
    display:inline-block;
    width:10px;
    height:10px;
    border-radius: 5px;
    border:3px solid #14bfd1;
    margin-left:-2rem;
    transform: translateY(11px);
  }
  .search .ss2{
    display:inline-block;
    width:5px;
    height:5px;
    border-radius: 2.5px;
    background-color:#c9c5dc;
    margin-left:-1.8rem;
    transform: translateY(-20px);
  }
  .search .ss3{
    display:inline-block;
    width:5px;
    height:5px;
    border-radius: 2.5px;
    background-color:#c9c5dc;
    margin-left:-0.86rem;
    transform: translateY(-13px);
  }
  .search .ss4{
    display:inline-block;
    width:5px;
    height:5px;
    border-radius: 2.5px;
    background-color:#c9c5dc;
    margin-left:-0.86rem;
    transform: translateY(-5px);
  }
  .search .ss5{
    display:inline-block;
    width:10px;
    height:10px;
    border-radius: 5px;
    border:3px solid #fd6260;
    margin-left:-1.1rem;
    transform: translateY(10px);
  }
  .search .sd1{
    margin-top:-6rem;
    z-index:1000;
    font-size:25px;
    margin-left:16rem;
  }
  .search .up{
    border-bottom:solid 0.5px darkgrey;
    width:50%;
    height:50%;
    padding-top:1rem;
    margin-top:-1.9rem;
  }
  .search .down{
    /* border:solid; */
    width:50%;
    height:50%;
    padding-top:1rem;
    margin-top:-1.9rem;
  }

  .menu{
    width:96%;
    height:3.5rem;
    /* border:solid; */
    display:flex;
    flex-wrap: nowrap;
    overflow:scroll;
    line-height: 3.5rem;;
    margin-left:2%;
    margin-top:-3.5rem;
    position:fixed;
    z-index:1000;
  }
.menu::-webkit-scrollbar {
    display: none;
  }
  .menu ul{
    height:3.7rem;
    list-style: none;
    white-space: nowrap;
    background-color:white;
    /* border:solid; */
  }
  .menu ul .activeClass2{
    width:9rem;
    height:3rem;
    display:inline-block;
    text-align: center;
    margin-right:3rem;
    /* border:solid; */
    background-color:white;
    color:black;
    border-radius: 2rem;
    margin-top:0.3rem;
    line-height: 3rem;;
  }
  .menu ul .activeClass1{
    width:9rem;
    height:3rem;
    display:inline-block;
    text-align: center;
    margin-right:3rem;
    /* border:solid; */
    background-color:#05c592;
    color:white;
    border-radius: 2rem;
    margin-top:0.3rem;
    line-height: 3rem;;
  }

  .banner{
    width:100%;
    height:11rem;
    background-color:#f5f6f8;
    padding-top:1.3rem;
    margin-top:13rem;
  }
  .banner img{
    width:92%;
    margin-left:4%;
    height:88%;
    border-radius: 0.5rem;
  }

  .menu2{
    width:100%;
    height:8rem;
    background-color:white;
    position:absolute;
    top:24.5rem;
  }
  .menu2 ul{
    display: flex;
    flex-wrap:wrap;
    list-style:none;
    padding:0;
    margin-top:1rem;
  }
  .menu2 ul li{
    width:20%;
    margin:1rem 0;
  }
  .menu2 ul li span{
    display:inline-block;
    width:4rem;
    height:4rem;
    line-height: 4rem;
    border-radius: 1.6rem;
  }
  .menu2 ul li span i{
    font-size:2.5rem;
  }

  .tongqinka{
    width:100%;
    height:10rem;
    padding-left:2%;
    /* border:solid; */
  }
  .tongqinka .left{
    display:inline-block;
    border-right:solid 0.5px darkgrey;
    width:48%;
    height:4rem;
    padding-top:1rem;
    /* border:solid; */
  }
  .tongqinka .right{
    display:inline-block;
    /* border:solid; */
    width:48%;
    height:4rem;
    padding-top:1rem;
  }

  .add{
    width:98%;
    height:4rem;
    background-color:#eff3ff;
    color:#3e75c5;
    line-height:4rem;
    padding-left:1rem;
    border-radius:0.5rem;
    margin-top:0.5rem;
  }
  .add .text{

  }
  .add .button{
    display:inline-block;
    width:6rem;
    height:2.5rem;
    background-color: #3d9eff;
    color:white;
    border-radius:1.5rem;
    line-height: 2.5rem;
    text-align: center;
    position:relative;
    right:-3.5rem;

  }

  .history{
    display:inline-block;
    margin-right:7rem;
    margin-left:5rem;

  }
  .collection{
    display: inline-block;
  }
  .log{
    margin-left:2rem;
    list-style: none;
    margin-top:1rem;
  }
  .log li{
    width:34rem;
    border-bottom:1px solid darkgrey;
    padding-bottom:1rem;
    margin-bottom:1rem;
  }
</style>
