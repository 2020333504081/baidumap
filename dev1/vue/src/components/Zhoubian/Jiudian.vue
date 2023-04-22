<template>
  <div style="width:100%:height:10rem;">
    <Lunbo class="lunbo1" :imglist="imglist" v-if="imglist&&flag"></Lunbo>
    <div @click="goback()" style="float:left;font-size:2rem;background-color:white;color:white;margin-top:3rem;margin-left:3rem;"><i class="glyphicon glyphicon-menu-left"></i>
    <span style="position:relative;z-index:1000;">酒店</span>
    </div>
    <div style="width:100%;height:60rem;background-image:linear-gradient(to bottom,#f2f6ff,white);padding-left:1rem;">
      <!-- 查找框 -->
      <ul class="chazhao" style="position:relative;list-style:none;width:97%;height:30rem;background-color:white;position:relative;z-index:1000;top:13rem;border-radius: 1rem;padding-left:1rem">
        <li style="height:6rem;font-size:2rem;">
          <div style="width:27rem;position:absolute;top:1.5rem;">杭州<i style="margin-left:20rem;" class="glyphicon glyphicon-menu-right"></i></div>
          <div style="position:absolute;top:1rem;left:28rem;width:6rem;border-left:1px solid lightgrey;padding-left:1rem;text-align:center;font-size:1.5rem;"><i style="color:royalblue;"class="glyphicon glyphicon-screenshot"></i><br/><font style="font-size:1rem;">当前位置</font></div>
        </li>
        <li style="height:8rem;">
          <div style="position:absolute;top:7.5rem;font-size:1.5rem;">今天入住<div style="font-size:2rem;">02月17日<font style="font-size:1.5rem;">周五</font></div></div>
          <div style="position:absolute;left:13rem;top:7.5rem;font-size:1.5rem;">明天离店<div style="font-size:2rem;">02月18日<font style="font-size:1.5rem;">周六</font></div></div>
          <div style="position:absolute;left:29.5rem;top:9rem;">共1晚<i style="color:royalblue;"class="glyphicon glyphicon-menu-right"></i></div>
        </li>
        <li style="height:5rem;line-height:5rem;font-size:1.5rem;"><i class="glyphicon glyphicon-search"></i><font style="color:grey;">位置/品牌/酒店名</font></li>
        <li style="height:5rem;line-height:5rem;font-size:1.5rem;color:grey;">价格/星级</li>
        <li style="border:none;height:6rem;margin-top:1rem;"><div style="margin-left:2.5rem;font-size:1.5rem;width:28rem;height:4rem;background-color:#368bff;color:white;text-align:center;line-height:4rem;border-radius:2rem;">查找</div></li>
      </ul>

      <!-- 今日特价 -->
      <img src="@/assets/images/15.jpeg" style="width:17rem;height:17rem;margin-top:13rem;border-top-left-radius: 1rem;border-bottom-left-radius: 1rem;"/>
      <img src="@/assets/images/12.jpeg" style="width:17rem;height:8.5rem;margin-top:4.3rem;border-top-right-radius: 1rem;margin-left:0.5rem;"/>
      <img src="@/assets/images/11.jpg" style="width:17rem;height:8.5rem;margin-top:-10rem;margin-left:18rem;border-bottom-right-radius: 1rem;"/>

      <!-- 精品推荐 -->
        <ul class="tuijianfenlei">
          <li id="li1" @click="click(1)"><i style="color:#ffab03" class="glyphicon glyphicon-thumbs-up"></i>精品推荐
            <div id="li11" style="margin-left:0.5rem;font-size:1rem;width:7.5rem;height:2.3rem;line-height:2rem;text-align:center;color:grey;border-radius:1.5rem;">猜你喜欢</div>
          </li>
          <li id="li2" @click="click(2)"><i style="color:#f95b50" class="iconfont icon-jiudian"></i>浪漫情侣
            <div id="li22" style="margin-left:0.5rem;font-size:1rem;width:7.5rem;height:2.3rem;line-height:2rem;text-align:center;color:grey;border-radius:1.5rem;">特惠大床房</div>
          </li>

          <li id="li3" @click="click(3)"><i style="color:#04e9a4" class="glyphicon glyphicon-map-marker"></i>附近热卖
            <div id="li33" style="margin-left:0.5rem;font-size:1rem;width:7.5rem;height:2.3rem;line-height:2rem;text-align:center;color:grey;border-radius:1.5rem;">步行3公里</div>
          </li>
          <li id="li4" @click="click(4)"><i style="color:orangered" class="iconfont icon-dingshi"></i>限时抢购
            <div id="li44" style="margin-left:0.5rem;font-size:1rem;width:7.5rem;height:2.3rem;line-height:2rem;text-align:center;color:grey;border-radius:1.5rem;">好房限时购</div>
          </li>
        </ul>
        <!-- 酒店列表 -->
        <ul class="jiudian">
          <li v-for="(item,index) in hotels" :key="index">
            <img style="width:10rem;height:14rem;border-radius: 1rem;" :src="require('@/assets/images/'+item.src)"/>
            <div style="margin-left:12rem;margin-top:-14rem">
              <div style="font-size:1.8rem;font-weight: bold;">{{item.name}}<span style="color:grey;font-size:1.5rem;margin-left:1rem;background-color:lightgrey;">{{item.type}}</span></div>
              <div><font style="color:red;">{{item.score}} 好</font> {{item.num}}点评</div>
              <div style="color:blue;">"{{item.comment}}"</div>
              <div>距您{{item.distance}}m {{item.class}}</div>
              <div><span style="background-color:lightgrey;color:grey;margin-right:0.5rem;">{{item.tag1}}</span><span style="background-color:lightgrey;color:grey;margin-right:0.5rem;">{{item.tag2}}</span><span style="background-color:lightgrey;color:grey;margin-right:0.5rem;">{{item.tag3}}</span></div>
              <div style="color:grey;margin-left:15rem;">￥<font style="color:red;font-size:2rem;">{{item.price}}</font>起</div>
            </div>
          </li>
        </ul>
    </div>

  </div>



</template>
<script>
import Lunbo from '@/components/Chuxing/Lunbo'
export default {
  data () {
      return {
    x: 0,
    flag:true,
     imglist: [
          {src:'16.jpeg'},
         {src:'17.jpeg'},
          {src:'18.jpg'},
          {src:'14.jpg'}
        ],
        hotels:[
          {src:'23.jpeg',name:'杭州轩鹏精选酒店',type:'经济型',score:'4.1',num:'29',comment:'感应灯带，简约大方，服务很好',distance:'127',class:'近生态湿地公园',tag1:'免费停车',tag2:'24小时前台',tag3:'行李寄存',price:'300'},
          {src:'22.jpg',name:'雅津酒店',type:'经济型',score:'3.5',num:'20',comment:'真的很不错，非常干净',distance:'225',class:'近生态湿地公园',tag1:'免费停车',tag2:'24小时前台',tag3:'洗衣房',price:'205'},
          {src:'21.jpg',name:'全季酒店',type:'舒适型',score:'4.7',num:'30',comment:'真的很不错，装修简单干净',distance:'1.4k',class:'近杭州文津站',tag1:'免费停车',tag2:'24小时前台',tag3:'差旅特惠',price:'351'},
          {src:'20.jpeg',name:'布丁严选酒店',type:'经济型',score:'4.2',num:'150',comment:'很不错的体验，房间布置简洁大方',distance:'1.6k',class:'近杭州文津站',tag1:'免费停车',tag2:'停车场',tag3:'行李寄存',price:'175'},
        ]
     }
  },
components:{Lunbo},
methods:{
  click(id){

      if(id==1){

        document.getElementById("li1").style.color='royalblue';
        document.getElementById("li11").style.backgroundColor="royalblue";
        document.getElementById("li11").style.color="white";
        for(var i=2;i<5;i++){
           document.getElementById("li"+i).style.color='black';
        document.getElementById("li"+i+i).style.backgroundColor="";
        document.getElementById("li"+i+i).style.color="grey";
        }
      }



      if(id==2){
        document.getElementById("li2").style.color='royalblue';
        document.getElementById("li22").style.backgroundColor="royalblue";
        document.getElementById("li22").style.color="white";
      document.getElementById("li1").style.color='black';
        document.getElementById("li11").style.backgroundColor="";
        document.getElementById("li11").style.color="grey";
        document.getElementById("li3").style.color='black';
          document.getElementById("li33").style.backgroundColor="";
          document.getElementById("li33").style.color="grey";
          document.getElementById("li4").style.color='black';
            document.getElementById("li44").style.backgroundColor="";
            document.getElementById("li44").style.color="grey";
        }



     if(id==3){
       document.getElementById("li3").style.color='royalblue';
       document.getElementById("li33").style.backgroundColor="royalblue";
       document.getElementById("li33").style.color="white";
     document.getElementById("li1").style.color='black';
       document.getElementById("li11").style.backgroundColor="";
       document.getElementById("li11").style.color="grey";
       document.getElementById("li2").style.color='black';
         document.getElementById("li22").style.backgroundColor="";
         document.getElementById("li22").style.color="grey";
         document.getElementById("li4").style.color='black';
           document.getElementById("li44").style.backgroundColor="";
           document.getElementById("li44").style.color="grey";
       }
      if(id==4){
        document.getElementById("li4").style.color='royalblue';
        document.getElementById("li44").style.backgroundColor="royalblue";
        document.getElementById("li44").style.color="white";
      document.getElementById("li1").style.color='black';
        document.getElementById("li11").style.backgroundColor="";
        document.getElementById("li11").style.color="grey";
        document.getElementById("li3").style.color='black';
          document.getElementById("li33").style.backgroundColor="";
          document.getElementById("li33").style.color="grey";
          document.getElementById("li2").style.color='black';
            document.getElementById("li22").style.backgroundColor="";
            document.getElementById("li22").style.color="grey";
        }
    },
    goback(){
      this.$router.go(-1);
    }


},
mounted(){
  this.click(1);
}
 
}
</script>
<style>
.lunbo1{
  margin-top:-28rem;
}
.chazhao li{
  border-bottom:1px solid lightgrey;
  margin-right:1rem;

}
.tuijianfenlei{
  list-style: none;
  display:flex;
  justify-content: space-around;
}
.tuijianfenlei li{
  display:inline-block;
  font-size:1.6rem;

}
.jiudian{
  list-style: none;
}
.jiudian li{
  margin-bottom:1.5rem;
}
</style>
