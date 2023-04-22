<template>
  <div style="height:80rem;background-color:#eaebef">
  <!-- 横幅 -->
  <div class="banner">
    <img src="@/assets/images/1.jpeg" alt="">
  </div>
<!-- 图标列 -->
  <div class="menub">
    <ul>
      <router-link v-for="(item,index) in listb" :key="index" :to="item.url" tag="li" style="text-align:center;">
        <span :style="{background:item.bcolor,color:item.color}">
          <i :class="item.icon"></i>
        </span>
        <div style="font-size:1.5rem;color:black;margin-top:0.5rem;display:inline-block;width:100%;">{{item.name}}</div>
      </router-link>
    </ul>
  </div>
  <!-- 搜索历史 -->
  <div style="background-color:white;margin-top:22rem;">
  <h3 class="historyb">历史记录</h3><h3 class="collectionb">我的收藏</h3>
  <ul class="logb">
    <li>暂无历史记录</li>
  </ul>
  </div>
 </div>
</template>

<script>
  export default{
      data(){
        return{
          listb:[
            {name:'开始跑步',bcolor:'#fd4d5a',color:'white',icon:'iconfont icon-paobu',url:'/collections'},
            {name:'跑步路线',bcolor:'#149ffc',color:'white',icon:'iconfont icon-route-fill',url:''},
            {name:'记录轨迹',bcolor:'#5480fd',color:'white',icon:'iconfont icon-jiaoyin',url:''},
            {name:'历史轨迹',bcolor:'#fe8a01',color:'white',icon:'iconfont icon-dingdan',url:''},
            {name:'碳减排',bcolor:'#fe8a01',color:'white',icon:'iconfont icon-Sprout',url:''},
            {name:'语音包',bcolor:'#5480fd',color:'white',icon:'iconfont icon-yuyin',url:''}

          ]
        }
      }


    }
</script>

<style>
  .menub{
    width:100%;
    height:20rem;
    background-color:white;
    position:absolute;
    top:24.5rem;
  }
  .menub ul{
    white-space:normal;
    list-style:none;
    padding:0;
    margin-top:1rem;
  }
  .menub ul li{
    display:inline-block;
    width:25%;
    margin:1rem 0;
  }
  .menub ul li span{
    display:inline-block;
    width:4rem;
    height:4rem;
    line-height: 4rem;
    border-radius: 1.6rem;
  }
  .menub ul li span i{
    font-size:2.5rem;
  }
  .historyb{
      display:inline-block;
      margin-right:7rem;
      margin-left:5rem;
      border-bottom:3px solid blue;

    }
    .collectionb{
      display: inline-block;


    }
    .logb{
      margin-left:2rem;
      list-style: none;
      margin-top:1rem;
    }
    .logb li{
      width:34rem;
      padding-bottom:1rem;
      margin-bottom:1rem;
      text-align: center;
    }
</style>
