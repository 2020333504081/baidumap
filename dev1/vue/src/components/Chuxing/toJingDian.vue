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
      <span class="ss5"></span><div class="down">梦湖景区</div>
      <div class="sd1">
        <i class="iconfont icon-jia" style="font-size:30px;"></i>
        <i class="iconfont icon-route-fill" style="font-size:30px;"></i>
        <i class="iconfont icon-yangshi_icon_tongyong_voice" style="font-size:30px;"></i>
      </div>
      <!-- 下面灰色的背景部分 -->
      <div style="width:50rem;height:60rem;margin-top:5rem;margin-left:-10rem;background-color:#eaebef;padding-top:1rem;">
        <ul class="filter1">
          <li id="l1" style="border-bottom:3px solid green;" @click="tuijian()">推荐线路</li>
          <li id="l2" style="border-bottom:3px solid green;" @click="shaobuxing()">少步行</li>
          <li id="l3" style="border-bottom:3px solid green;" @click="shijianduan()">时间短</li>
          <li id="l4" style="border-bottom:3px solid green;" @click="shaohuancheng()">少换乘</li><span style="color:grey;margin:-1rem 2rem 0 -1rem;">|</span>
          <li style="margin-left:-1rem;">现在出发<i style="font-size: 1rem;margin-left:0.5rem;"class="glyphicon glyphicon-triangle-bottom"></i></li>
        </ul>

         <div style="width:35rem;height:5rem;line-height:5rem;background-color:#fae0c8;border-radius: 1rem;margin-left:3rem;padding-left:1.5rem;">
           <i style="color:red;margin-right:1rem;" class="iconfont icon-hongbao"></i>每日绿色出行，抢京东卡~
         </div>

<!-- 推荐线路 -->
        <div v-if="flag==1">
         <router-link to="/luxian" tag="div" class="fangan">
           <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">30分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">1.0公里</span>
           <span style="float:right;margin-right:1.5rem;margin-top:0.8rem;display:inline-block;width:4rem;height:2rem;text-align: center;line-height: 2rem;border-radius:3px;background-color:#ccfaed;color:#21c799">最佳</span>
           <div style="border:1px solid #527fa8;color:#527fa8;width:4.5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">68路</div>
           <div style="color:grey">3站·市疾控中心站上车</div>
         </router-link>
         <div class="fangan">
           <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">32分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">1.3公里</span>
           <div style="border:1px solid #527fa8;color:#527fa8;width:5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">B36路</div>
           <div style="color:grey">2站·市疾控中心站上车</div>
         </div>
         <div class="fangan">
           <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">34分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">395米</span><br/>
           <span style="display:inline-block;border:1px solid #527fa8;color:#527fa8;width:5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">B7路</span>
           <i class="glyphicon glyphicon-triangle-right"></i>
           <span style="display:inline-block;border:1px solid #527fa8;color:#527fa8;width:5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">68路</span>
           <div style="color:grey">5站·利民嘉苑站上车</div>
         </div>
         <div class="fangan">
           <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">36分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">1.7公里</span>
           <div style="border:1px solid #527fa8;color:#527fa8;width:4.5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">B7路</div>
           <div style="color:grey">1站·利民嘉苑站上车</div>
         </div>
         </div>
         <!-- 少步行 -->
      <div v-if="flag==2">
        <div class="fangan">
          <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">34分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">395米</span><br/>
         <span style="float:right;margin-right:1.5rem;margin-top:-2rem;display:inline-block;width:4rem;height:2rem;text-align: center;line-height: 2rem;border-radius:3px;background-color:#ccfaed;color:#21c799">最佳</span>
          <span style="display:inline-block;border:1px solid #527fa8;color:#527fa8;width:5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">B7路</span>
          <i class="glyphicon glyphicon-triangle-right"></i>
          <span style="display:inline-block;border:1px solid #527fa8;color:#527fa8;width:5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">68路</span>
          <div style="color:grey">5站·利民嘉苑站上车</div>
        </div>
         <div class="fangan">
           <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">30分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">1.0公里</span>
           <div style="border:1px solid #527fa8;color:#527fa8;width:4.5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">68路</div>
           <div style="color:grey">3站·市疾控中心站上车</div>
         </div>
         <div class="fangan">
           <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">32分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">1.3公里</span>
           <div style="border:1px solid #527fa8;color:#527fa8;width:5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">B36路</div>
           <div style="color:grey">2站·市疾控中心站上车</div>
         </div>
         <div class="fangan">
           <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">36分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">1.7公里</span>
           <div style="border:1px solid #527fa8;color:#527fa8;width:4.5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">B7路</div>
           <div style="color:grey">1站·利民嘉苑站上车</div>
         </div>
         </div>
 <!-- 时间短 -->
      <div v-if="flag==3">
        <div class="fangan">
          <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">30分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">1.0公里</span>
          <span style="float:right;margin-right:1.5rem;margin-top:0.8rem;display:inline-block;width:4rem;height:2rem;text-align: center;line-height: 2rem;border-radius:3px;background-color:#ccfaed;color:#21c799">最佳</span>
          <div style="border:1px solid #527fa8;color:#527fa8;width:4.5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">68路</div>
          <div style="color:grey">3站·市疾控中心站上车</div>
        </div>
        <div class="fangan">
          <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">32分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">1.3公里</span>
          <div style="border:1px solid #527fa8;color:#527fa8;width:5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">B36路</div>
          <div style="color:grey">2站·市疾控中心站上车</div>
        </div>
        <div class="fangan">
          <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">34分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">395米</span><br/>
          <span style="display:inline-block;border:1px solid #527fa8;color:#527fa8;width:5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">B7路</span>
          <i class="glyphicon glyphicon-triangle-right"></i>
          <span style="display:inline-block;border:1px solid #527fa8;color:#527fa8;width:5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">68路</span>
          <div style="color:grey">5站·利民嘉苑站上车</div>
        </div>
         <div class="fangan">
           <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">36分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">1.7公里</span>
           <div style="border:1px solid #527fa8;color:#527fa8;width:4.5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">B7路</div>
           <div style="color:grey">1站·利民嘉苑站上车</div>
         </div>
         </div>
<!-- 少换乘-->
      <div v-if="flag==4">
        <div class="fangan">
          <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">30分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">1.0公里</span>
          <span style="float:right;margin-right:1.5rem;margin-top:0.8rem;display:inline-block;width:4rem;height:2rem;text-align: center;line-height: 2rem;border-radius:3px;background-color:#ccfaed;color:#21c799">最佳</span>
          <div style="border:1px solid #527fa8;color:#527fa8;width:4.5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">68路</div>
          <div style="color:grey">3站·市疾控中心站上车</div>
        </div>
        <div class="fangan">
          <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">32分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">1.3公里</span>
          <div style="border:1px solid #527fa8;color:#527fa8;width:5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">B36路</div>
          <div style="color:grey">2站·市疾控中心站上车</div>
        </div>
         <div class="fangan">
           <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">36分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">1.7公里</span>
           <div style="border:1px solid #527fa8;color:#527fa8;width:4.5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">B7路</div>
           <div style="color:grey">1站·利民嘉苑站上车</div>
         </div>
         <div class="fangan">
           <span style="font-size:2rem;font-weight: bold;margin-right:1rem;">34分钟</span><i style="font-size:2rem;margin-right:1rem;" class="iconfont icon-walk-line"></i><span style="font-size:1.5rem;font-weight:bold;">395米</span><br/>
           <span style="display:inline-block;border:1px solid #527fa8;color:#527fa8;width:5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">B7路</span>
           <i class="glyphicon glyphicon-triangle-right"></i>
           <span style="display:inline-block;border:1px solid #527fa8;color:#527fa8;width:5rem;height:3rem;text-align:center;line-height: 3rem;border-radius: 5px;margin-top:0.5rem;margin-bottom:0.6rem">68路</span>
           <div style="color:grey">5站·利民嘉苑站上车</div>
         </div>

         </div>

      </div>
    </div>
</span>
<!-- 左右滑动菜单 -->
    <div class="menut" id="menu">
      <ul>
        <li v-for="(item,index) in menulist" :key="index"
        :class="active==index ? 'activeClass1':'activeClass2'" :id="index" v-model="x" @click="selectOne(index)"><i :class="item.icon" style="margin-right:0.3125rem;" v-show="x==index"></i>{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

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
        active:-1,
        flag:1
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
    },
    tuijian(){
      this.flag=1;
      document.getElementById("l1").style.borderBottomColor="green";
      document.getElementById("l2").style.borderBottomColor="white";
      document.getElementById("l3").style.borderBottomColor="white";
      document.getElementById("l4").style.borderBottomColor="white";
    },
shaobuxing(){
      this.flag=2;
      document.getElementById("l2").style.borderBottomColor="green";
      document.getElementById("l1").style.borderBottomColor="white";
      document.getElementById("l3").style.borderBottomColor="white";
      document.getElementById("l4").style.borderBottomColor="white";
    },
    shijianduan(){
      this.flag=3;
      document.getElementById("l3").style.borderBottomColor="green";
      document.getElementById("l2").style.borderBottomColor="white";
      document.getElementById("l1").style.borderBottomColor="white";
      document.getElementById("l4").style.borderBottomColor="white";
    },
    shaohuancheng(){
      this.flag=4;
      document.getElementById("l4").style.borderBottomColor="green";
      document.getElementById("l2").style.borderBottomColor="white";
      document.getElementById("l3").style.borderBottomColor="white";
      document.getElementById("l1").style.borderBottomColor="white";
    },
     },
     mounted(){
       this.selectOne(3);
       this.tuijian();
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

  .menut{
    width:96%;
    height:3.5rem;
    /* border:solid; */
    display:flex;
    flex-wrap: nowrap;
    overflow:scroll;
    line-height: 3.5rem;;
    margin-left:2%;
    margin-top:9rem;
    position:fixed;
    z-index:1000;
  }
.menut::-webkit-scrollbar {
    display: none;
  }
  .menut ul{
    height:3.7rem;
    list-style: none;
    white-space: nowrap;
    background-color:white;
    /* border:solid; */
  }
  .menut ul .activeClass2{
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
  .menut ul .activeClass1{
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
.filter1{
  width:100%;
  height:3rem;
  line-height: 3rem;
  background-color: white;
  list-style: none;
  padding-left:3rem;

}
.filter1 li{
  display: inline-block;
  margin-right:2rem;
}
.fangan{
  width:35rem;
  height:10rem;
  background-color:white;
  border-radius: 1rem;
  margin-left:3rem;
  padding-left:1.5rem;
  margin-top:1rem;

}
</style>
