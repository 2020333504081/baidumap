<template>
  <div style="height:80rem;background-color:#eaebef;">
  <!-- 横幅 -->
  <div class="banner">
    <img src="@/assets/images/1.jpeg" alt="">
  </div>
<!-- 图标列 -->
  <div class="menuq">
    <ul>
      <router-link v-for="(item,index) in listq" :key="index" :to="item.url" tag="li" style="text-align:center;">
        <span :style="{background:item.bcolor,color:item.color}">
          <i :class="item.icon"></i>
        </span>
        <div style="font-size:1.5rem;color:black;margin-top:0.5rem;display:inline-block;width:100%;">{{item.name}}</div>
      </router-link>
    </ul>
  </div>
  <!-- 搜索历史 -->
  <div style="background-color:white;margin-top:12rem;">
  <h3 class="historyq">历史记录</h3><h3 class="collectionq">我的收藏</h3>
  <ul class="logq">
    <li>暂无历史记录</li>
  </ul>
  </div>
 </div>
</template>

<script>
  export default{
      data(){
        return{
          listq:[
            {name:'记录轨迹',bcolor:'#627fff',color:'white',icon:'iconfont icon-jiaoyin',shadow:'#fea211',url:'/collections'},
            {name:'历史轨迹',bcolor:'#fea211',color:'white',icon:'iconfont icon-dingdan',shadow:'#fea211',url:''},
            {name:'语音包',bcolor:'#2db5ff',color:'white',icon:'iconfont icon-yuyin',shadow:'#fea211',url:''},
            {name:'兔来了',bcolor:'#fd4d5a',color:'white',icon:'iconfont icon-miao',shadow:'#fea211',url:''}

          ]
        }
      }


    }
</script>

<style>
  .menuq{
    width:100%;
    height:10rem;
    background-color:white;
    position:absolute;
    top:24.5rem;
  }
  .menuq ul{
    white-space:normal;
    list-style:none;
    padding:0;
    margin-top:1rem;
  }
  .menuq ul li{
    display:inline-block;
    width:25%;
    margin:1rem 0;
  }
  .menuq ul li span{
    display:inline-block;
    width:4rem;
    height:4rem;
    line-height: 4rem;
    border-radius: 1.6rem;
  }
  .menuq ul li span i{
    font-size:2.5rem;
  }
  .historyq{
      display:inline-block;
      margin-right:7rem;
      margin-left:5rem;
      border-bottom:3px solid blue;

    }
    .collectionq{
      display: inline-block;


    }
    .logq{
      margin-left:2rem;
      list-style: none;
      margin-top:1rem;
    }
    .logq li{
      width:34rem;
      padding-bottom:1rem;
      margin-bottom:1rem;
      text-align: center;
    }
</style>
