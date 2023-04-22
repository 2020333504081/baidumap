<template>
  <div>
    <!-- 标题 -->
    <div style="font-size:2rem;padding-top:2rem;padding-left:1rem;">
      <i  @click="goback()" style="margin-right:11.5rem;" class="glyphicon glyphicon-menu-left"></i>
      <span>全部订单</span>
      <i @click="show()" style="margin-left:10rem;"class="glyphicon glyphicon-option-horizontal"></i>
     </div>
     <!-- 分类 -->
     <ul class="xifen" @click="notshow()">
       <li id="quanbu" @click="selected(0)">全部</li>
       <li id="daifukuan" @click="selected(1)">待付款</li>
       <li id="daishiyong" @click="selected(2)">待使用</li>
       <li id="tuikuan" @click="selected(3)">退款/取消</li>
     </ul>

     <!-- 订单信息 -->
    <ul @click="notshow()" v-show="x==0">
      <li style="width:100;height:17rem;border-bottom:4px solid lightgrey;padding-top:1rem;padding-left:1rem;">
        <div><span style="display:inline-block;color:white;background-color:darkslategrey;width:2rem;height:2rem;text-align: center;line-height: 2rem;margin-right:0.5rem;"><i class="iconfont icon-yangshi_icon_tongyong_car"></i></span>
        <span style="font-size:1.6rem;margin-right:16rem;">百度地图打车</span>
        <span style="font-size:1.6rem;color:grey">行程结束</span>
       </div>
       <div style="border-bottom:1px solid darkgrey;margin-right:1rem;padding-bottom:1rem;">
          <div style="margin-top:0.5rem;width:7rem;height:7rem;"><img style="width:100%;height:100%"" src="@/assets/images/daohang.png"></div>
           <div style="margin-left:8rem;margin-top:-6.5rem;">logo花小猪特价</div>
           <div style="margin-left:8rem;margin-top:0.4rem;"><span style="display:inline-block;width:0.8rem;height:0.8rem;border-radius:0.4rem;background-color:green;margin-right:1rem;"></span>浙江理工大学生活区</div>
           <div style="margin-left:8rem;margin-top:0.4rem;"><span style="display:inline-block;width:0.8rem;height:0.8rem;border-radius:0.4rem;background-color:orange;margin-right:1rem;"></span>东湖公园</div>
        </div>
        <div style="margin-top:0.7rem;">下单时间:2022-02-15
          <span style="margin-left:13.5rem;display:inline-block;width:8rem;height:2.5rem;border-radius:1.5rem;line-height:2.5rem;text-align:center;border:1px solid grey;">删除订单</span>
        </div>
      </li>
      <li style="width:100;height:17rem;border-bottom:4px solid lightgrey;padding-top:1rem;padding-left:1rem;">
        <div><span style="display:inline-block;color:white;background-color:darkslategrey;width:2rem;height:2rem;text-align: center;line-height: 2rem;margin-right:0.5rem;"><i class="iconfont icon-yangshi_icon_tongyong_car"></i></span>
        <span style="font-size:1.6rem;margin-right:16rem;">百度地图打车</span>
        <span style="font-size:1.6rem;color:grey">行程结束</span>
       </div>
       <div style="border-bottom:1px solid darkgrey;margin-right:1rem;padding-bottom:1rem;">
          <div style="margin-top:0.5rem;width:7rem;height:7rem;"><img style="width:100%;height:100%"" src="@/assets/images/daohang.png"></div>
           <div style="margin-left:8rem;margin-top:-6.5rem;">logo花小猪特价</div>
           <div style="margin-left:8rem;margin-top:0.4rem;"><span style="display:inline-block;width:0.8rem;height:0.8rem;border-radius:0.4rem;background-color:green;margin-right:1rem;"></span>浙江理工大学生活区</div>
           <div style="margin-left:8rem;margin-top:0.4rem;"><span style="display:inline-block;width:0.8rem;height:0.8rem;border-radius:0.4rem;background-color:orange;margin-right:1rem;"></span>东湖公园</div>
        </div>
        <div style="margin-top:0.7rem;">下单时间:2022-02-15
          <span style="margin-left:13.5rem;display:inline-block;width:8rem;height:2.5rem;border-radius:1.5rem;line-height:2.5rem;text-align:center;border:1px solid grey;">删除订单</span>
        </div>
      </li>
    </ul>
     <!-- 没有订单时显示 -->
    <div @click="notshow()" v-show="x!=0"><img style="margin-top:10rem;margin-left:9rem;" src="@/assets/images/meiyoudingdan.png">
      <div style="margin-left:13rem;color:grey;">没有符合条件的订单</div>
    </div>
    <!-- 右上角三点点开显示 -->
    <div style="position:absolute;top:5rem;left:26.5rem;" v-show="flag==1">
      <triangle ></triangle>
      <div style="color:white;margin-left:1rem;margin-top:-6.5rem;margin-bottom:2.5rem;z-index:100;position:relative;"><i style="margin-right:1rem;" class="iconfont icon-fapiao"></i>开发票</div>
      <div style="color:white;margin-left:1rem;margin-top:-2rem;z-index:100;position:relative;"><i style="margin-right:1rem;" class="iconfont icon-gerentouxiang"></i>联系客服</div>
    </div>
  </div>
</template>

<script>
  import triangle from '@/components/Wode/triangle'
  export default{
    data(){
      return{
          x:0,
          flag:0
      }
    },
    methods:{
      goback(){
        this.$router.go(-1);
      },
      selected(id){
        if(id==0){
          this.x=0;
        document.getElementById("quanbu").className="select";
        document.getElementById("daifukuan").className="";
        document.getElementById("daishiyong").className="";
        document.getElementById("tuikuan").className="";
        }else if(id==1){
          this.x=1;
          document.getElementById("quanbu").className="";
          document.getElementById("daifukuan").className="select";
          document.getElementById("daishiyong").className="";
          document.getElementById("tuikuan").className="";

        }else if(id==2){
          this.x=2;
          document.getElementById("quanbu").className="";
          document.getElementById("daifukuan").className="";
          document.getElementById("daishiyong").className="select";
          document.getElementById("tuikuan").className="";

        }else if(id==3){
          this.x=3;
          document.getElementById("quanbu").className="";
          document.getElementById("daifukuan").className="";
          document.getElementById("daishiyong").className="";
          document.getElementById("tuikuan").className="select";

        }
      },
      show(){
        this.flag=1;
      },
      notshow(){
        this.flag=0;
      }
    },
    mounted(){
      this.selected(0);
    },
    components:{
      triangle
    }
  }
</script>

<style>
  .xifen{
    list-style: none;
    display:flex;
    justify-content : space-around;
    margin-top:1.5rem;
    -webkit-box-shadow: lightgrey 0px 7px 10px 0px;
  }
  .xifen li{
    height:3.5rem;
  }
  .select{
    border-bottom:3px solid royalblue;
    padding-bottom:0.5rem;
  }
</style>
