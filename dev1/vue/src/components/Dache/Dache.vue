<template>
  <div>
   <div class="BaiDuMap">
     <baidu-map class="map-wrap" :center="mapData.center" :zoom="mapData.zoom" @ready="mapHandler" @click="getLocation">
        <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
        <bm-city-list anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-city-list>
         <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <i @click="huadong()" style="float:left;margin-top:-4rem;margin-left:43%;font-size:4rem;color:grey"class="glyphicon glyphicon-menu-up"></i>
      </baidu-map>

  </div>

<div style="background-color:#eaebef;">
    <!-- 上下车地点 -->
    <div style="background-color: white;height:15rem;padding-top:3%;padding-left:3%;">
      <div class="start">
        <div style="width:10px;height:10px;border:3px solid #14bad2;border-radius: 5px;margin-top:2.5rem;"></div>
        <div style="margin-top:-2.3rem;margin-left:1.5rem;font-size:1.6rem;">在<font style="color:green"> 福兰线（路口）西北侧 </font>上车</div>
        <div style="margin-left:1.5rem;color:grey">已推荐您附近合适上车点</div>
      </div>
      <div class="end">
        <div style="width:10px;height:10px;border:3px solid #fa725c;border-radius: 5px;margin-top:2.5rem;"></div>
        <router-link tag="div" to="/searchPage" style="font-size:2.2rem;margin-top:-2.1rem;margin-left:1.5rem;">请输入您的目的地</router-link>
      </div>
    </div>
    <!-- 图标菜单 -->
    <div class="menud">
      <ul>
        <router-link v-for="(item,index) in list3" :key="index" :to="item.url" tag="li" style="text-align:center;">
          <span :style="{color:item.color}">
            <i :class="item.icon"></i>
          </span>
          <div style="font-size:1.5rem;color:black;margin-top:0.5rem;display:inline-block;width:100%;">{{item.name}}</div>
        </router-link>
      </ul>
    </div>
    <!-- 常用地点 -->
<div class="changyong">
  <h4 style="margin-bottom: 1px;">常用地点</h4>
  <div class="youhui"><i class="iconfont icon-hongbao"></i>立抢50元通勤优惠></div>
    <div class="left"><i style="margin-right:0.5rem;color:#ff9a54;" class="iconfont icon-shouye"></i>设置家</div>
    <div class="right"><i style="margin-right:0.5rem;color:#3777fb;" class="iconfont icon-suitcase-full"></i>设置公司</div>

  </div>
    <!-- 福利券 -->
    <div style="width:96%;height:10rem;border-radius: 1rem;margin-left:2%;margin-top:1rem;"><img style="width:100%;height:100%;border-radius: 1rem;" src="@/assets/images/1.jpeg" alt=""></div>
    <div style="width:96%;height:10rem;border-radius: 1rem;margin-left:2%;margin-top:1rem;"><img style="width:100%;height:100%;border-radius: 1rem;" src="@/assets/images/3.jpeg" alt=""></div>
    <div style="width:96%;height:10rem;border-radius: 1rem;margin-left:2%;margin-top:1rem;margin-bottom:5rem;"><img style="width:100%;height:100%;border-radius: 1rem;" src="@/assets/images/4.jpeg" alt=""></div>
  </div>
  </div>
</template>

<script>
export default {

  data(){
    return{
      address: null, // 地址信息
        businessDetail: {},  //商家信息(包含坐标信息)
                //地图数据
        mapData: {
               center: { lng: 0, lat: 0 },//中心坐标
               zoom:22,    //缩放级别
             },
        BMap: null, //BMap类
        map: null,  //地图对象
        list3:[
          {name:'预约',color:'#ffa540',icon:'iconfont icon-yuyue1',url:''},
          {name:'租车',color:'#5690fb',icon:'iconfont icon-taxi-fill',url:''},
          {name:'代驾',color:'#947efd',icon:'iconfont icon-drive',url:''},
          {name:'自动驾驶',color:'#2aeda7',icon:'iconfont icon-zidongjiashi',url:''}

        ]
    }
  },

  methods:{
    async mapHandler({ BMap, map }) {
              if (this.businessId) {
                  //可以在此处请求接口获取坐标数据
                  await this.getMallBusinessDetail()
              }

              this.BMap = BMap //保存百度地图类
              this.map = map //保存地图对象
              //如果一开始坐标存在(编辑的时候)
              if (this.businessDetail.longitude && this.businessDetail.latitude) {
                  //设置坐标
                  this.mapData.center.lng = this.businessDetail.longitude
                  this.mapData.center.lat = this.businessDetail.latitude
              } else {
                  //如果坐标不存在则动态获取当前浏览器坐标（创建的时候）
                  let geolocation = new BMap.Geolocation()
                  //获取当前的坐标（使用promise 将异步转换为同步）
                  await new Promise((resolve) => {
                      geolocation.getCurrentPosition(() => {
                          // this.mapData.center.lng = this.businessDetail.longitude = r.point.lng
                          // this.mapData.center.lat = this.businessDetail.latitude = r.point.lat
                          this.mapData.center.lng = this.businessDetail.longitude = 103.1747
                          this.mapData.center.lat = this.businessDetail.latitude = 33.889 //这里的经纬度是固定的，没有动态获取，上面注释的两行是动态获取的
                          resolve()
                      })
                  })
              }
              //创建定位标记
              let marker = new BMap.Marker(
                  new BMap.Point(
                      this.businessDetail.longitude,
                      this.businessDetail.latitude
                  )
              )

              map.addOverlay(marker)  //将标记添加到地图上
          },
          //在地图上选择区域
          getLocation(e) {
              this.businessDetail.longitude = e.point.lng  //设置经度
              this.businessDetail.latitude = e.point.lat  //设置纬度
              let BMapGL = this.BMap  //百度地图类
              let map = this.map//地图对象
              map.clearOverlays()   //清除地图上所有的覆盖物(保证每次点击只有一个标记)
              //创建定位标记
              let marker = new BMapGL.Marker(new BMapGL.Point(e.point.lng, e.point.lat))   //将标记添加到地图上
              map.addOverlay(marker)      //创建坐标解析对象
              let geoc = new BMapGL.Geocoder()  //解析当前的坐标成地址
              geoc.getLocation(e.point, (rs) => {
                  let addressComp = rs.addressComponents  //获取地址对象
                  //拼接出详细地址
                  this.businessDetail.address =
                      addressComp.province +
                      addressComp.city +
                      addressComp.district +
                      addressComp.street +
                      addressComp.streetNumber
              })
          },
       huadong(){
          window.scrollTo({
            top:400,
            left:0,
            behavior: "smooth"
        });
       }
  },
  mounted(){
  document.getElementById("wode").style.color="black";
  },

}
</script>

<style scoped>
.map-wrap{
  width: 100%;
  height: 60vh;
}

.start{
    width:97%;
    height:47%;
    border:1px solid white;
    padding-left:2rem;
  }
  .end{
    width:97%;
    height:47%;
    border-radius:1rem;
    background-color:#eaebef;
    padding-left:2rem;
    border:1px solid #eaebef;
  }

  .menud{
    width:100%;
    height:10.5rem;
    background-color:#eaebef;
    position:absolute;
    top:55rem;
  }
  .menud ul{
    display: flex;
    flex-wrap:wrap;
    list-style:none;
    padding:0;
    margin-top:1rem;
  }
  .menud ul li{
    width:25%;
    margin:1rem 0;
  }
  .menud ul li span{
    display:inline-block;
    width:4rem;
    height:4rem;
    line-height: 4rem;
    border-radius: 1.6rem;
  }
  .menud ul li span i{
    font-size:2.5rem;
  }

  .changyong{
    width:96%;
    height:7rem;
    margin-left:2%;
    padding-left:2%;
    border:1px solid white;
    margin-top: 11rem;
    background-color: white;
    border-radius: 1rem;
  }
  .changyong .youhui{
    height:2rem;
    margin-top:-2rem;
    margin-left:20rem;
    background-color:#ffe8e2;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    color:red;
  }
  .changyong .left{
    display:inline-block;
    border-right:solid 0.5px darkgrey;
    width:48%;
    height:4rem;
    padding-top:1rem;
    /* border:solid; */
  }
  .changyong .right{
    display:inline-block;
    /* border:solid; */
    width:48%;
    height:4rem;
    padding-top:1rem;
  }
</style>
