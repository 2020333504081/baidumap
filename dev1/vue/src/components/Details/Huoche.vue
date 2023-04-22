<template>
  <div style="height:80rem;background-color:#eaebef;">
   <div style="width:100%;height:1.5rem;background-color:#eaebef;margin-top:12.5rem;"></div>
    <!-- 购票记录 -->
    <div class="buy">
      <span class="left">购票记录</span><span class="right">查看></span>
    </div>
    <!-- 搜索历史 -->
    <div style="background-color:white;margin-top:1rem;">
    <h3 class="historyh">历史记录</h3><h3 class="collectionh">我的收藏</h3>
    <ul class="logh">
      <li>暂无历史记录</li>
    </ul>
   </div>
  </div>
</template>

<script>
</script>

<style>
  .buy{
    width:96%;
    height:6rem;
    background-color: white;
    border-radius: 0.5rem;
    line-height:6rem;
    margin-left:2%;
    font-size:20px;
    padding-left:2rem;
  }
  .buy .right{
    float:right;
    margin-right:2rem;
  }
  .historyh{
      display:inline-block;
      margin-right:7rem;
      margin-left:5rem;
      border-bottom:3px solid blue;

    }
    .collectionh{
      display: inline-block;


    }
    .logh{
      margin-left:2rem;
      list-style: none;
      margin-top:1rem;
    }
    .logh li{
      width:34rem;
      padding-bottom:1rem;
      margin-bottom:1rem;
      text-align: center;
    }
</style>
