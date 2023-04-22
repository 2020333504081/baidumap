<template>
  <div>
    <div style="width:100%;height:1.5rem;background-color:#eaebef;margin-top:12.5rem;"></div>
    <div class="first">
      <!-- 轮播图 -->
      <lunbotu :imglist="imglist" style="height:10rem;margin-top:-13.5rem;"></lunbotu>
      <!-- 常用地址 -->
<div class="tongqinka1">
    <div class="left"><i style="margin-right:0.5rem;color:#ff9a54;" class="iconfont icon-shouye"></i>理工大学学生生活区</div>
    <div class="right"><i style="margin-right:0.5rem;color:#3777fb;" class="iconfont icon-suitcase-full"></i>天天快递（抚州店）</div>
    <div class="add1">
      <i style="margin-right:0.5rem;color:grey;" class="glyphicon glyphicon-map-marker"></i>添加常用地址
    </div>
  </div>
    </div>
    <div style="width:100%;height:1.5rem;background-color:#eaebef"></div>
<!-- 搜索历史 -->
  <h4 class="historyj">历史记录</h4><h4 class="collectionj">我的收藏</h4><h4 class="trackj">轨迹记录</h4>
  <ul class="log">
    <li style="text-align: center;color:grey;margin-left:-3rem;width:107%;">暂无历史记录</li>
  </ul>
  <!-- 图标 -->
<div class="menu4">
    <ul>
      <router-link v-for="(item,index) in list3" :key="index" :to="item.url" tag="li" style="text-align:center;">
        <span :style="{background:item.bcolor,color:item.color}">
          <i :class="item.icon"></i>
        </span>
        <div style="font-size:1.5rem;color:black;margin-top:0.5rem;display:inline-block;width:100%;">{{item.name}}</div>
      </router-link>
    </ul>
  </div>
  <div style="margin-top:11rem;float:right;margin-right:1rem;">展开<i class="iconfont icon-jiantouyou"></i></div>
    <div style="width:100%;height:1.5rem;background-color:#eaebef;margin-top:15.5rem;"></div>

  </div>
</template>

<script>
  import lunbotu from '@/components/Chuxing/Lunbo.vue'
  export default {
      data() {
        return {

          imglist: [
            {src:'1.jpeg'},
           {src:'2.jpeg'},
           {src:'3.jpeg'},
           {src:'4.jpeg'},
           {src:'5.jpeg'}
           ],
           list3:[
             {name:'收费助手',bcolor:'#fea211',color:'white',icon:'iconfont icon-dingdan',shadow:'#fea211',url:'/collections'},
             {name:'错必赔',bcolor:'#2ab2fe',color:'white',icon:'iconfont icon-jinbi',shadow:'#fea211',url:''},
             {name:'电子狗',bcolor:'#2db5ff',color:'white',icon:'iconfont icon-touxiang',shadow:'#fea211',url:''},
             {name:'语音包',bcolor:'#627fff',color:'white',icon:'iconfont icon-yuyin',shadow:'#fea211',url:''},
             {name:'导航设置',bcolor:'#3478ff',color:'white',icon:'iconfont icon-shezhi',shadow:'#fea211',url:''},

           ]
          }
        },
      components: {
        lunbotu
      }
  }
</script>

<style>
.first{
  width:100%;
  height:10rem;

}
 .tongqinka1{
    width:99%;
    height:10rem;
    padding-left:2%;
    margin-top:12rem;
  }
  .tongqinka1 .left{
    display:inline-block;

    width:48%;
    height:4rem;
    padding-top:1rem;
    /* border:solid; */
  }
  .tongqinka1 .right{
    display:inline-block;
    /* border:solid; */
    width:48%;
    height:4rem;
    padding-top:1rem;
  }
  .add1{
    width:98%;
    height:4rem;
    border-top:1px solid lightgrey;
    line-height:4rem;

    border-radius:0.5rem;
    margin-top:0.5rem;
  }
 .historyj{
    display:inline-block;
    margin-right:5rem;
    margin-left:3rem;
    border-bottom:3px solid blue;

  }
  .collectionj{
    display: inline-block;
    margin-right:5rem;

  }
  .trackj{
    display: inline-block;
  }
  .menu4{
    width:96%;
    height:10rem;
    background-color:white;
    position:absolute;
    top:46rem;
    left:2%;
    border-bottom:1px solid darkgrey;
  }
  .menu4 ul{
    display: flex;
    flex-wrap:wrap;
    list-style:none;
    padding:0;
    margin-top:1rem;
  }
  .menu4 ul li{
    width:20%;
    margin:1rem 0;
  }
  .menu4 ul li span{
    display:inline-block;
    width:4rem;
    height:4rem;
    line-height: 4rem;
    border-radius: 1.6rem;
  }
  .menu4 ul li span i{
    font-size:2.5rem;
  }
</style>
