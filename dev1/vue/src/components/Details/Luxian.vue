<template>
  <div style="padding-left:1rem;">
    <div @click="goBack()" class="luxian-topicon1"><i class="glyphicon glyphicon-chevron-left"></i></div>
    <!-- 上部分总览 -->
    <h3 style="margin-left:3rem;">全程27分钟</h3>
    <span style="display:inline-block;background-color:#e5eeff;color:#558ffb;margin-right:0.5rem;"><i style="font-size: 2rem;"class="iconfont icon-walk-line"></i></span>
    <span style="display:inline-block;border:1px solid #558ffb;width:29.5rem;border-radius:0.5rem;font-size:1.5rem;height:3rem;line-height:3rem;margin-right:0.5rem;text-align: center;">68路</span>
    <span style="display:inline-block;background-color:#e5eeff;color:#558ffb;"><i style="font-size: 2rem;" class="iconfont icon-walk-line"></i></span>
    <div style="color:grey;margin-top:1rem;">3站·步行899米</div>
    <!-- 中间灰色部分 -->
    <div style="width:38rem;height:5rem;background-color:#f6f6f6;padding-top:1rem;margin-left:-1rem;margin-top:1rem;">
      <div style="width:35rem;height:3rem;margin-left:1rem;background-color:#e5eeff;border-radius:0.5rem;padding-left:1rem;line-height: 3rem;">情人节教你不一样的表白方式，查看-></div>
    </div>
    <!-- 下面详细路线 -->
    <!-- ul列表是左边的圆点 -->
    <ul style="margin-left:4.5rem;margin-top:3rem;list-style:none">
      <li><div class="startout"><div class="startin"></div></div><h4 style="margin-top:-1.8rem;margin-left:3rem;font-weight: bold;">起点（二仙桥花园-北区）</h4></li>
      <li  v-for="index in 6" :key="index"><div class="middle"></div></li>
      <li><div class="gongjiao"><i class="iconfont icon-yangshi_icon_tongyong_bus"></i></div></li>

    </ul>
    <div class="lanxian"><div class="gongjiao2"></div></div>
  <ul style="margin-left:4.5rem;margin-top:1rem;list-style:none">
      <li  v-for="index in 6" :key="index"><div class="middle"></div></li>
      <li><div class="endout"><div class="endin"></div></div><h4 style="margin-top:-1.8rem;margin-left:3rem;font-weight: bold;">终点（梦湖景区）</h4></li>
    </ul>
   <div style="margin-top:-39.5rem;color:grey;margin-left:7.5rem;">步行640米（9分钟）<span style="float:right;margin-right:2rem;color:#06bc96;">导航<i class="glyphicon glyphicon-triangle-right"></i></span></div>
   <h4 style="margin-top:6rem;margin-left:7.5rem;font-weight:bold">市疾控中心站</h4>
   <div style="background-color:#558ffb;color:white;width:5rem;height:3rem;line-height: 3rem;text-align:center;border-radius: 0.5rem;margin-left:7.5rem;">68路</div>
   <div style="color:grey;font-size:1.5rem;margin-left:13rem;margin-top:-2rem;">火车站方向</div>
   <div style="color:grey;font-size:1.5rem;margin-left:7.5rem;margin-top:3rem;">3站（5分钟）</div>
   <h4 style="margin-top:2rem;margin-left:7.5rem;font-weight:bold">梦湖堤东路站</h4>
   <div style="margin-top:6rem;color:grey;margin-left:7.5rem;">步行259米（3分钟）<span style="float:right;margin-right:2rem;color:#06bc96;">导航<i class="glyphicon glyphicon-triangle-right"></i></span></div>
   <div style="color:grey;margin-left:7.5rem;margin-top:7.5rem;">方案时长包括等车时间</div>
   <div style="margin-left:7.5rem;margin-top:0.5rem;width:22rem;height:15rem;border-radius: 0.5rem;"><img style="border-radius: 0.5rem;width:100%;height:100%;" src="@/assets/images/menghu.jpg"></div>
   <div style="color:grey;margin-left:8.5rem;margin-top:3rem;">本方案比驾车节约碳排放634g</div>
   <div style="color:grey;margin-left:7.5rem;margin-top:0.5rem;">减碳排计算参数依据官方标准设定</div>
   <div style="color:grey;margin-left:5rem;margin-top:0.5rem;margin-bottom:1rem;">预估值仅供参考，请以行程中实际计算值为准</div>
 </div>
</template>

<script>
  export default({
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    }
  })
</script>

<style>
  .luxian-topicon1{
     width:3rem;
     height:3rem;
     /* background-color:#858e97; */
     color:black;
     text-align:center;
     line-height:3rem;
     position:absolute;
     top:1.8rem;
     left:1rem;
     border-radius: 1.2rem;
     font-size: 2rem;
   }
  .startin{
      width:1rem;
      height:1rem;
      border-radius: 0.5rem;
      background-color:#61dba8;
  }
  .startout{
    width:1.8rem;
    height:1.8rem;
    border-radius: 0.9rem;
    border:3px solid #6c6c6c;
    padding-left:0.1rem;
    padding-top:0.1rem;
    margin-left:-0.4rem;
  }
  .middle{
    width:1rem;
    height:1rem;
    border-radius: 0.5rem;
    background-color:#ebeaf0;
    margin-top:1rem;
  }
  .gongjiao{
    width:3rem;
    height:3rem;
    border-radius: 1.5rem;
    background-color:white;
    color:#558ffb;
    box-shadow: 0px 0px 5px 0px grey;
    text-align: center;
    line-height:3rem;
    margin-top:1rem;
    margin-left:-1rem;
    position:relative;
    z-index:10;
  }
  .lanxian{
    width:2rem;
    height:15rem;
    background-color: #2c79fb;
    border-radius: 2rem;
    margin-left:4rem;
    margin-top:-3rem;
    padding-top:13.3rem;
    padding-left:0.2rem;
  }
  .gongjiao2{
    width:1.6rem;
    height:1.6rem;
    border-radius: 0.8rem;
    background-color:white;
  }
  .endin{
      width:1rem;
      height:1rem;
      border-radius: 0.5rem;
      background-color:#ff4948;
  }
  .endout{
    width:1.8rem;
    height:1.8rem;
    border-radius: 0.9rem;
    border:3px solid #6c6c6c;
    padding-left:0.1rem;
    padding-top:0.1rem;
    margin-left:-0.4rem;
    margin-top:1rem;
  }
</style>
