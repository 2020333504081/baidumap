<template>
  <div style="background-color:#eaebef;margin-top:12.5rem;padding-top:1rem;">
    <!-- 上下车地点 -->
    <div style="background-color: white;height:15rem;padding-top:3%;padding-left:3%;">
      <div class="start">
        <div style="width:10px;height:10px;border:3px solid #14bad2;border-radius: 5px;margin-top:2.5rem;"></div>
        <div style="margin-top:-2.3rem;margin-left:1.5rem;font-size:1.6rem;">在<font style="color:green"> 福兰线（路口）西北侧 </font>上车</div>
        <div style="margin-left:1.5rem;color:grey">已推荐您附近合适上车点</div>
      </div>
      <div class="end">
        <div style="width:10px;height:10px;border:3px solid #fa725c;border-radius: 5px;margin-top:2.5rem;"></div>
        <div style="font-size:2.2rem;margin-top:-2.1rem;margin-left:1.5rem;">请输入您的目的地</div>
      </div>
    </div>
    <!-- 图标菜单 -->
    <div class="menu3">
      <ul>
        <router-link v-for="(item,index) in list3" :key="index" :to="item.url" tag="li" style="text-align:center;">
          <span :style="{color:item.color}">
            <i :class="item.icon"></i>
          </span>
          <div style="font-size:1.5rem;color:black;margin-top:0.5rem;display:inline-block;width:100%;">{{item.name}}</div>
        </router-link>
      </ul>
    </div>
    <!-- 常用地点 -->
<div class="changyong">
  <h4 style="margin-bottom: 1px;">常用地点</h4>
  <div class="youhui"><i class="iconfont icon-hongbao"></i>立抢50元通勤优惠></div>
    <div class="left"><i style="margin-right:0.5rem;color:#ff9a54;" class="iconfont icon-shouye"></i>设置家</div>
    <div class="right"><i style="margin-right:0.5rem;color:#3777fb;" class="iconfont icon-suitcase-full"></i>设置公司</div>

  </div>
    <!-- 福利券 -->
    <div style="width:96%;height:10rem;border-radius: 1rem;margin-left:2%;margin-top:1rem;"><img style="width:100%;height:100%;border-radius: 1rem;" src="@/assets/images/1.jpeg" alt=""></div>
    <div style="width:96%;height:10rem;border-radius: 1rem;margin-left:2%;margin-top:1rem;"><img style="width:100%;height:100%;border-radius: 1rem;" src="@/assets/images/3.jpeg" alt=""></div>
  </div>
</template>

<script>
  export default{
      data(){
        return{
          list3:[
            {name:'预约',color:'#ffa540',icon:'iconfont icon-yuyue1',url:''},
            {name:'租车',color:'#5690fb',icon:'iconfont icon-taxi-fill',url:''},
            {name:'代驾',color:'#947efd',icon:'iconfont icon-drive',url:''},
            {name:'自动驾驶',color:'#2aeda7',icon:'iconfont icon-zidongjiashi',url:''}

          ]
        }
      }


    }
</script>

<style>
  .start{
    width:97%;
    height:47%;
    border:1px solid white;
    padding-left:2rem;
  }
  .end{
    width:97%;
    height:47%;
    border-radius:1rem;
    background-color:#eaebef;
    padding-left:2rem;
    border:1px solid #eaebef;
  }

  .menu3{
    width:100%;
    height:10.5rem;
    background-color:#eaebef;
    position:absolute;
    top:28.5rem;
  }
  .menu3 ul{
    display: flex;
    flex-wrap:wrap;
    list-style:none;
    padding:0;
    margin-top:1rem;
  }
  .menu3 ul li{
    width:25%;
    margin:1rem 0;
  }
  .menu3 ul li span{
    display:inline-block;
    width:4rem;
    height:4rem;
    line-height: 4rem;
    border-radius: 1.6rem;
  }
  .menu3 ul li span i{
    font-size:2.5rem;
  }

  .changyong{
    width:96%;
    height:7rem;
    margin-left:2%;
    padding-left:2%;
    border:1px solid white;
    margin-top: 11rem;
    background-color: white;
    border-radius: 1rem;
  }
  .changyong .youhui{
    height:2rem;
    margin-top:-2rem;
    margin-left:20rem;
    background-color:#ffe8e2;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    color:red;
  }
  .changyong .left{
    display:inline-block;
    border-right:solid 0.5px darkgrey;
    width:48%;
    height:4rem;
    padding-top:1rem;
    /* border:solid; */
  }
  .changyong .right{
    display:inline-block;
    /* border:solid; */
    width:48%;
    height:4rem;
    padding-top:1rem;
  }
</style>
