<template>
  <div>
  <!-- 横幅 -->
  <div class="banner">
    <img src="@/assets/images/1.jpeg" alt="">
  </div>
  <!-- 图标列 -->
  <div class="menu2">
    <ul>
      <router-link v-for="(item,index) in list1" :key="index" :to="item.url" tag="li" style="text-align:center;">
        <span :style="{background:item.bcolor,color:item.color}">
          <i :class="item.icon"></i>
        </span>
        <div style="font-size:1.5rem;color:black;margin-top:0.5rem;display:inline-block;width:100%;">{{item.name}}</div>
      </router-link>
    </ul>
  </div>
  <div style="width:100%;height:1.5rem;background-color:#eaebef;margin-top:10rem;"></div>
  <!-- 通勤卡 -->
  <div class="tongqinka">
    <div class="left"><i style="margin-right:0.5rem;color:#ff9a54;" class="iconfont icon-shouye"></i>理工大学学生生活区</div>
    <div class="right"><i style="margin-right:0.5rem;color:#3777fb;" class="iconfont icon-suitcase-full"></i>天天快递（抚州店）</div>
    <div class="add">
      <span class="text">添加通勤卡至桌面，上下班快人一步</span>
      <span class="button">添加</span>
    </div>
  </div>
  <div style="width:100%;height:1.5rem;background-color:#eaebef;"></div>
  <!-- 搜索历史 -->
  <h3 class="history">历史记录</h3><h3 class="collection">我的收藏</h3>
  <ul class="log">
    <!-- <li><i class="iconfont icon-dingdan"></i>我的位置-上天竺法喜讲寺<i style="float:right;margin-right:1rem;" class="iconfont icon-jia"></i></li>
    <li><i class="iconfont icon-dingdan"></i>我的位置-江和美海洋公园<i style="float:right;margin-right:1rem;" class="iconfont icon-jia"></i></li>
    <li><i class="iconfont icon-dingdan"></i>我的位置-杭州嘉里中心<i style="float:right;margin-right:1rem;" class="iconfont icon-jia"></i></li>
    <li><i class="iconfont icon-dingdan"></i>我的位置-陆游纪念馆<i style="float:right;margin-right:1rem;" class="iconfont icon-jia"></i></li>
    <li><i class="iconfont icon-dingdan"></i>我的位置-夏衍旧居<i style="float:right;margin-right:1rem;" class="iconfont icon-jia"></i></li>-->
  <li v-for="(item,index) in hlist" :key="index"><i class="iconfont icon-dingdan"></i>{{item.sadress}}-{{item.eadress}}<i style="float:right;margin-right:1rem;" class="iconfont icon-jia"></i></li>
    <li><span><i class="glyphicon glyphicon-trash"></i>清空记录</span><span style="margin-left:21rem;">收起<i style="margin-left:1rem;" class="glyphicon glyphicon-chevron-up"></i></span></li>

  </ul>
 </div>
</template>

<script>
  export default{
      data(){
        return{
          list1:[
            {name:'查公交',bcolor:'#fea211',color:'white',icon:'iconfont icon-yangshi_icon_tongyong_bus',url:''},
            {name:'地铁图',bcolor:'#627fff',color:'white',icon:'iconfont icon-huochepiaomianxing',url:''},
            {name:'打车',bcolor:'#2db5ff',color:'white',icon:'iconfont icon-taxi-fill',url:''},
            {name:'出行领券',bcolor:'#15a792',color:'white',icon:'iconfont icon-Sprout',url:''},
            {name:'乘车码',bcolor:'#3478ff',color:'white',icon:'iconfont icon-erweima1688',url:''}
          ],
          hlist:[]
        }
      },
      methods:{
        getHlist(){
          this.$axios.post("getHlist").then((result)=>{
              this.hlist=result.data;
            //console.log(this.hlist);
          });
        }
      },
      created(){
        this.getHlist();
      }


    }
</script>

<style>
  .banner{
    width:100%;
    height:11rem;
    background-color:#eaebef;
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
    border:solid;
    border-radius:1.5rem;
    line-height: 2.5rem;
    text-align: center;
    position:relative;
    right:-3.5rem;

  }

  .history{
    display:inline-block;
    margin-right:5rem;
    margin-left:6.5rem;
    border-bottom:3px solid blue;

  }
  .collection{
    display: inline-block;
    margin-right:5rem;

  }
  .track{
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
