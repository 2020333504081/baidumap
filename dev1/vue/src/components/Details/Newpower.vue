<template>
  <div>
    <div style="width:100%;height:1.5rem;background-color:#f5f6f8;margin-top:12.5rem;"></div>
    <!-- 通勤卡 -->
    <div class="tongqin">
      <div class="left"><i class="iconfont icon-shouye" style="margin-right:0.5rem;color:#ff900a;"></i>理工大学学生生活区</div>
      <div class="right"><i class="iconfont icon-suitcase-full" style="margin-right:0.5rem;color:#1689fc;"></i>天天快递（抚州店）</div>
    </div>
    <div style="width:100%;height:1.5rem;background-color:#f5f6f8"></div>
    <!-- 爱车信息 -->
    <div class="information">
      <div class="green">添加爱车信息，获得专属体验<br/><font>续航：300km</font></div>
      <div class="white">
        <div class="circle"><i style="font-size:40px;"class="iconfont icon-yangshi_icon_tongyong_car"></i></div>
        <div style="margin-left:8rem;margin-top:-8rem;border:1px solid grey;width:6rem;text-align: center;">7天记录</div><div style="margin-left:25rem;margin-top:-2.5rem;border:1px solid grey;width:5rem;">VS油车</div>
        <div style="margin-left:8rem;margin-top:1rem;"><i style="font-size:20px;" class="iconfont icon-sharpicons_empty-gas-gauge"></i> 里程：-km</div><div style="margin-left:25rem;margin-top:-2.2rem;">已节省：-元</div>
        <div style="margin-left:8rem;margin-top:1rem;"><i class="iconfont icon-dianchi-wu"></i> 电耗：-度/百公里</div><div style="margin-left:25rem;margin-top:-2.2rem;">碳排放：-kg</div>
        <div style="margin-top:1.5rem;">耗电详情<i style="font-size:18px;" class="iconfont icon-jiantou1"></i></div>
      </div>
    </div>
    <div style="width:100%;height:1.5rem;background-color:#f5f6f8"></div>
    <!-- 能源充电站 -->
    <div class="charge">
      <div style="margin-left:7rem;margin-top:1.5rem;width:5rem;height:5rem;line-height:5rem;text-align:center;border-radius: 2.5rem;background-color: #fff7f5;"><i style="font-size:25px;color:orangered;" class="iconfont icon-dianchi1"></i></div>
      <div style="margin-left:13rem;margin-top:-4.5rem;">附近5公里无新能源充电站</div>
      <div style="margin-left:13rem;color: grey;">查看更多></div>
    </div>
    <div style="width:100%;height:1.5rem;background-color:#f5f6f8"></div>
<!-- 我的权益 -->
  <h4 style="margin-top:2rem;margin-left:2rem;">我的权益</h4>
  <div style="width:90%;height:10rem;border-radius: 1rem;margin-left:5%;"><img style="width:100%;height:100%;border-radius: 1rem;" src="@/assets/images/1.jpeg" alt=""></div>
  <div style="width:90%;height:10rem;border-radius: 1rem;margin-left:5%;margin-top:1rem;"><img style="width:100%;height:100%;border-radius: 1rem;" src="@/assets/images/3.jpeg" alt=""></div>
  </div>
</template>

<script>
</script>

<style>
  .tongqin{
    width:100%;
    height:8rem;
    padding-left:2%;
    /* border:solid; */
    padding-top:2rem;
  }
  .tongqin .left{
    display:inline-block;
    border-right:solid 0.5px darkgrey;
    width:48%;
    height:3rem;
    padding-top:0.5rem;
    /* border:solid; */
  }
  .tongqin .right{
    display:inline-block;
    /* border:solid; */
    width:48%;
    height:4rem;
    padding-top:1rem;
  }
  .information{
    padding-top:1rem;
  }
  .information .green{
    background-color:#01be84;
    border-radius:1rem;
    color:white;
    height:10rem;
    padding-top:1rem;
    padding-left:2rem;
  }
  .information .green font{
    font-size:0.0625rem;
  }
  .information .white{
    height:15rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    margin-top:-3.7rem;
    z-index:1000;
    background-color:white;
    padding-left:2rem;
    padding-top:2rem;

  }
  .information .white .circle{
    width:7rem;
    height:7rem;
    border-radius: 3.5rem;
    box-shadow: 0 0 2px 3px lightgrey;
    margin-top:1rem;
    line-height:7rem;
    text-align: center;
    color:#01be84;
  }
  .charge{
    height:10rem;
    padding-top:1rem;
  }
</style>
