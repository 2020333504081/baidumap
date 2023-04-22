<template>
  <div style="height:80rem;background-color:#eaebef;">
    <div style="width:100%;height:1.5rem;background-color:#eaebef;margin-top:12.5rem;"></div>
<!-- 天气提示 -->
  <div class="tip">
    <i style="color:orange;margin-right:0.5rem;" class="iconfont icon-gantan"></i>预计22点有小雨
  </div>
<!-- 横幅 -->
  <div style="width:96%;height:8rem;border-radius: 1rem;margin-left:2%;margin-top:1rem;"><img style="width:100%;height:100%;border-radius: 1rem;" src="@/assets/images/1.jpeg" alt=""></div>

  <!-- 通勤卡 -->
  <div class="tongqinkaz">
    <div class="left"><i style="margin-right:0.5rem;" class="iconfont icon-shouye"></i>理工大学学生生活区<br/><font style="color:grey">设置家庭地址</font></div>
    <div class="right"><i style="margin-right:0.5rem;" class="iconfont icon-suitcase-full"></i>天天快递（抚州店）<br/><font style="color:grey">设置公司地址</font></div>

  </div>
  <!-- 搜索历史 -->
  <div style="background-color:white;margin-top:1rem;">
  <h3 class="history">历史记录</h3><h3 class="collection">我的收藏</h3>
  <ul class="logz">
    <li>暂无历史记录</li>
  </ul>
  </div>
  </div>

</template>

<script>
</script>

<style>
  .tip{
    width:96%;
    height:4rem;
    background-color:white;
    margin-left:2%;
    border-radius: 0.5rem;
    line-height:4rem;
    padding-left:2rem;
  }
  .bannerz{
    width:100%;
    height:11rem;
    background-color:#f5f6f8;
    padding-top:1.3rem;

  }
  .bannerz img{
    width:92%;
    margin-left:4%;
    height:88%;
    border-radius: 0.5rem;
  }
  .tongqinkaz{
    width:96%;
    height:7rem;
    padding-left:2%;
    padding-top:0.5rem;
    margin-left:1.5%;
    margin-top:1rem;
    background-color: white;
    border-radius: 0.5rem;
  }
  .tongqinkaz .left{
    display:inline-block;
    border-right:solid 0.5px darkgrey;
    width:48%;
    height:5rem;
    padding-top:1rem;

    /* border:solid; */
  }
  .tongqinkaz .right{
    display:inline-block;
    /* border:solid; */
    width:48%;
    height:4rem;
    padding-top:1rem;
    padding-left:1rem;
  }
.history{
    display:inline-block;
    margin-right:7rem;
    margin-left:5rem;
    border-bottom:3px solid blue;

  }
  .collection{
    display: inline-block;


  }
  .logz{
    margin-left:2rem;
    list-style: none;
    margin-top:1rem;
  }
  .logz li{
    width:34rem;
    padding-bottom:1rem;
    margin-bottom:1rem;
    text-align: center;
  }
</style>
