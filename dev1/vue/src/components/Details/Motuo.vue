<template>
  <div style="height:80rem;background-color:#f5f6f8;">
   <div style="width:100%;height:1.5rem;background-color:#f5f6f8;margin-top:12.5rem;"></div>
<!-- 通勤卡 -->
  <div class="tongqinkam">
    <div class="left"><i style="margin-right:0.5rem;"class="iconfont icon-shouye"></i>理工大学学生生活区</div>
    <div class="right"><i style="margin-right:0.5rem;"class="iconfont icon-suitcase-full"></i>天天快递（抚州店）</div>

  </div>
  <!-- 搜索历史 -->
  <div style="background-color:white; margin-top:1rem;">
  <h3 class="historym">历史记录</h3><h3 class="collectionm">我的收藏</h3>
  <ul class="logm">
    <li>暂无历史记录</li>
  </ul>
  </div>
  <!-- 添加车辆 -->
  <!-- 图标列 -->
  <div class="menum">
    <ul>
      <router-link v-for="(item,index) in listm" :key="index" :to="item.url" tag="li" style="text-align:center;">
        <span :style="{background:item.bcolor,color:item.color}">
          <i :class="item.icon"></i>
        </span>
        <div style="font-size:1.5rem;color:black;margin-top:0.5rem;display:inline-block;width:100%;">{{item.name}}</div>
      </router-link>
    </ul>
  </div>
  </div>
</template>

<script>
  export default{
      data(){
        return{
          listm:[
            {name:'车辆管理',bcolor:'white',color:'black',icon:'iconfont icon-yangshi_icon_tongyong_car',url:''},
            {name:'组队出行',bcolor:'white',color:'black',icon:'iconfont icon-zudui',url:''},
            {name:'语音包',bcolor:'white',color:'black',icon:'iconfont icon-yuyin',url:''},  
            {name:'导航设置',bcolor:'white',color:'black',icon:'iconfont icon-shezhi',url:''},

          ]
        }
      }


    }
</script>

<style>
  .tongqinkam{
      width:100%;
      height:6rem;
      padding-left:2%;
      padding-top:0.5rem;
      background-color: white;
    }
    .tongqinkam .left{
      display:inline-block;
      border-right:solid 0.5px darkgrey;
      width:48%;
      height:4rem;
      padding-top:1rem;
      /* border:solid; */
    }
    .tongqinkam .right{
      display:inline-block;
      /* border:solid; */
      width:48%;
      height:4rem;
      padding-top:1rem;
      padding-left:1rem;
    }
  .historym{
      display:inline-block;
      margin-right:7rem;
      margin-left:5rem;
      border-bottom:3px solid blue;

    }
    .collectionm{
      display: inline-block;


    }
    .logm{
      margin-left:2rem;
      list-style: none;
      margin-top:1rem;
    }
    .logm li{
      width:34rem;
      padding-bottom:1rem;
      margin-bottom:1rem;
      text-align: center;
    }

    .menum{
      width:100%;
      height:10rem;
      background-color:white;
      position:absolute;
      top:32.5rem;
    }
    .menum ul{
      display: flex;
      flex-wrap:wrap;
      list-style:none;
      padding:0;
      margin-top:1rem;
    }
    .menum ul li{
      width:25%;
      margin:1rem 0;
    }
    .menum ul li span{
      display:inline-block;
      width:4rem;
      height:4rem;
      line-height: 4rem;
      border-radius: 1.6rem;
    }
    .menum ul li span i{
      font-size:2.5rem;
    }
</style>
