<template>
  <div>
    <div style="width:100%;height:5rem;line-height:5rem;-webkit-box-shadow: lightgrey 0px 7px 10px 0px;padding-left:1rem;font-size:2rem;position:fixed;z-index:100;background-color:white;">
      <i @click="goback()" class="glyphicon glyphicon-menu-left"></i>
      <span style="margin-left:13rem;margin-right:12.5rem;">更多</span>
      <i class="glyphicon glyphicon-search"></i>
    </div>
    <!-- 左边目录条 -->
    <ul style="list-style:none;width:7rem;height:61rem;background-color:#f3f3f3;position:fixed;top:5.5rem;">
      <li :id="'li'+index" class="catalog" v-for="(item,index) in catalog" :key="index" @click="select(index)">{{item}}</li>
    </ul>
    <!-- 右边详情 -->
    <div class="details">
    <!-- 美食 -->
    <div class="meishi">
      <div style="font-size:2rem;"><i style="margin-right:1rem;font-size:2rem;color:orange;" class="iconfont icon-hanbao"></i>美食</div>
      <ul class="meishiul">
        <li class="meishili" v-for="(item1,index1) in meishi" :key="index1">{{item1}}</li>
      </ul>
    </div>
<!-- 景点 -->
    <div class="meishi">
      <div style="font-size:2rem;"><i style="margin-right:1rem;font-size:2rem;color:seagreen;" class="iconfont icon-jingdianxinxi"></i>景点</div>
      <ul class="meishiul">
        <li class="meishili" v-for="(item2,index2) in jingdian" :key="index2">{{item2}}</li>
      </ul>
    </div>
    <!-- 酒店 -->
        <div class="meishi">
          <div style="font-size:2rem;"><i style="margin-right:1rem;font-size:2rem;color:mediumpurple;" class="iconfont icon-jiudian"></i>酒店</div>
          <ul class="meishiul">
            <li class="meishili" v-for="(item3,index3) in jiudian" :key="index3">{{item3}}</li>
          </ul>
        </div>
        <!-- 玩乐 -->
         <div class="meishi">
          <div style="font-size:2rem;"><i style="margin-right:1rem;font-size:2rem;color:deeppink;" class="iconfont icon-wangyou"></i>休闲玩乐</div>
           <ul class="meishiul">
             <li class="meishili" v-for="(item4,index4) in wanle" :key="index4">{{item4}}</li>
           </ul>
        </div>
         <!-- 丽人 -->
          <div class="meishi">
             <div style="font-size:2rem;"><i style="margin-right:1rem;font-size:2rem;color:deeppink;" class="iconfont icon-lirenmeirong"></i>丽人</div>
                <ul class="meishiul">
                  <li class="meishili" v-for="(item5,index5) in liren" :key="index5">{{item5}}</li>
                </ul>
          </div>
         <!-- 运动 -->
          <div class="meishi">
             <div style="font-size:2rem;"><i style="margin-right:1rem;font-size:2rem;color:orange;" class="iconfont icon-gangling"></i>运动</div>
                <ul class="meishiul">
                  <li class="meishili" v-for="(item6,index6) in yundong" :key="index6">{{item6}}</li>
                </ul>
          </div>
         <!-- 出行 -->
          <div class="meishi">
             <div style="font-size:2rem;"><i style="margin-right:1rem;font-size:2rem;color:skyblue;" class="iconfont icon-yangshi_icon_tongyong_car"></i>出行</div>
                <ul class="meishiul">
                  <li class="meishili" v-for="(item7,index7) in chuxing" :key="index7">{{item7}}</li>
                </ul>
          </div>
         <!-- 购物 -->
          <div class="meishi">
             <div style="font-size:2rem;"><i style="margin-right:1rem;font-size:2rem;color:deeppink;" class="iconfont icon-nvbao"></i>购物</div>
                <ul class="meishiul">
                  <li class="meishili" v-for="(item8,index8) in gouwu" :key="index8">{{item8}}</li>
                </ul>
          </div>
         <!-- 生活 -->
          <div class="meishi">
             <div style="font-size:2rem;"><i style="margin-right:1rem;font-size:2rem;color:orange;" class="iconfont icon-24gf-store"></i>生活</div>
                <ul class="meishiul">
                  <li class="meishili" v-for="(item9,index9) in shenghuo" :key="index9">{{item9}}</li>
                </ul>
          </div>
         <!-- 银行 -->
          <div class="meishi" ref="scroll">
             <div style="font-size:2rem;"><i style="margin-right:1rem;font-size:2rem;color:orange;" class="iconfont icon-yinhang"></i>银行</div>
                <ul class="meishiul">
                  <li class="meishili" v-for="(item10,index10) in yinhang" :key="index10">{{item10}}</li>
                </ul>
          </div>

</div>

  </div>
</template>

<script>
  export default({
    data(){
      return{
        catalog:['美食','景点','酒店','玩乐','丽人','运动','出行','购物','生活','银行'],
        meishi:['附近美食','小吃快餐','中餐馆','自助餐','火锅','烧烤','奶茶','早餐','咖啡厅','面馆','酒吧','外卖','麻辣烫','包子','汉堡','米线','小龙虾','熟食','饺子馆','粥店'],
        jingdian:['景点','风景区','公园','名胜古迹','寺庙','海滨浴场','滑雪场','教堂','道观','漂流','体育公园','国家公园','皇家园林','5A风景区'],
        jiudian:['快捷酒店','连锁酒店','公寓酒店','家庭旅馆','宾馆','青年旅舍','招待所','三星级','如家酒店','7天酒店','速8酒店'],
        wanle:['洗浴','按摩','足疗','温泉','汗蒸','茶馆','网吧','KTV','酒吧','密室','桌游','游乐场'],
        liren:['美容','美发','spa','美睫','美甲','文身','面部护理'],
        yundong:['瑜伽','舍宾','舞蹈','芭蕾','健身房','游泳馆','体育场馆','赛车场','攀岩','漂流','蹦极','卡丁车'],
        chuxing:['加油站','汽车站','火车站','公交站','客运站','地铁站','充电站','飞机场'],
        gouwu:['购物中心','商场','超市','五金店','便利店','小卖部','书店','化妆品','菜市场','农贸市场','花鸟市场'],
        shenghuo:['医院','厕所','快递','诊所','药店','照相馆','打印复印','营业厅','学校','派出所'],
        yinhang:['ATM','工商银行','农业银行','建设银行','邮政储蓄','中国银行','信用社','财务公司','信托公司','资产管理','金融租赁'],
        x:0
      }
    },
    methods:{
      goback(){
        this.$router.go(-1);
      },
      handleScrollx(){
             //console.log('滚动高度',window.pageYOffset);
              console.log('距离顶部高度',this.$refs.scroll.getBoundingClientRect().top);
              //为了保证搜索记录吃喝玩乐这一栏既可以固定又可以恢复，我是采用下面的ul记录作为参照的，求的是ul到顶部的距离，为什么不采用这一栏本身，是因为当这一栏固定过一次之后它距离顶部不会再变，没法放回原来的位置了
               var top=this.$refs.scroll.getBoundingClientRect().top;

                 if(top<=479){
                   document.getElementById("li7").className="selected";

                   for(var i=0;i<7;i++){
                   document.getElementById("li"+i).className="catalog";
                   }
                   document.getElementById("li8").className="catalog";
                   document.getElementById("li9").className="catalog";
                 }else if(top<=612){
                   document.getElementById("li6").className="selected";
                   document.getElementById("li9").className="catalog";
                   document.getElementById("li8").className="catalog";
                   document.getElementById("li7").className="catalog";
                   for(var i=0;i<6;i++){
                   document.getElementById("li"+i).className="catalog";
                   }
                 }else if(top<=819){
                   document.getElementById("li5").className="selected";
                   document.getElementById("li9").className="catalog";
                   document.getElementById("li8").className="catalog";
                   document.getElementById("li7").className="catalog";
                   document.getElementById("li6").className="catalog";
                   for(var i=0;i<5;i++){
                   document.getElementById("li"+i).className="catalog";
                   }
                 }else if(top<=976){
                   document.getElementById("li4").className="selected";
                   document.getElementById("li1").className="catalog";
                   document.getElementById("li2").className="catalog";
                   document.getElementById("li3").className="catalog";
                   document.getElementById("li0").className="catalog";

                   for(var i=5;i<10;i++){
                   document.getElementById("li"+i).className="catalog";
                   }
                 }else if(top<=1176){
                   document.getElementById("li3").className="selected";
                   document.getElementById("li1").className="catalog";
                   document.getElementById("li2").className="catalog";
                   document.getElementById("li0").className="catalog";

                   for(var i=4;i<10;i++){
                   document.getElementById("li"+i).className="catalog";
                   }
                 }else if(top<=1371){
                   document.getElementById("li2").className="selected";
                   document.getElementById("li1").className="catalog";
                   document.getElementById("li0").className="catalog";
                   for(var i=3;i<10;i++){
                   document.getElementById("li"+i).className="catalog";
                   }
                 }else if(top<=1617){
                   document.getElementById("li1").className="selected";
                   document.getElementById("li0").className="catalog";
                   for(var i=2;i<10;i++){
                   document.getElementById("li"+i).className="catalog";
                   }
                 }else{
                   document.getElementById("li0").className="selected";
                   for(var i=1;i<10;i++){
                   document.getElementById("li"+i).className="catalog";
                   }
                 }
          },
      select(index){
        var h=0;
        if(index==1){
            h=320;
        }else if(index==2){
          h=558;
        }else if(index==3){
          h=760;
        }else if(index==4){
          h=960;
        }else if(index==5){
          h=1110;
        }else if(index==6){
          h=1320;
        }else if(index==7){
          h=1550;
        }else if(index==8){
          h=1550;
          document.getElementById("li8").className="selected";
          document.getElementById("li9").className="catalog";
          for(var i=0;i<8;i++){
          document.getElementById("li"+i).className="catalog";
          this.x=1;
          }
        }else if(index==9){
          h=1550;
          document.getElementById("li9").className="selected";
          for(var i=0;i<9;i++){
          document.getElementById("li"+i).className="catalog";
          this.x=1;
          }
        }
        window.scrollTo({
                 top:h,
                left:0,
                behavior: "smooth"
              });
      }
    },
    mounted(){
      window.addEventListener("scroll", this.handleScrollx,true);
      document.getElementById("li0").className="selected";
      
    },
    //离开页面时一定要销毁不然会出问题
      destroyed(){
          window.removeEventListener("scroll",this.handleScrollx)
      }
  })
</script>

<style>
  .catalog{
    font-size:2rem;
    text-align:center;
    height:5rem;
    line-height: 5rem;
  }
  .details{
   /* border:solid; */
    margin-left:7.385rem;
    position:relative;
    top:5.5rem;
  }
  .meishiul{
    list-style:none;

  }
  .meishiul .meishili{
    display:inline-block;
    width:10.05rem;
    height:2rem;
    line-height: 2rem;
    border-right:1px solid grey;
    margin-top:2rem;
    text-align: center;
  }
  .selected{
    font-size:2rem;
    text-align:center;
    height:5rem;
    line-height: 5rem;
    border-left:3px solid royalblue;
    background-color:white;
  }


</style>
