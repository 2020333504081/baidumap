<template>
  <div style="padding-top:0.8rem;padding-left:4%;">
    <!-- 定位和搜索框 -->
    <div class="address">浙江理工大学</div><i style="position:absolute;top:2rem;left:48%" class="glyphicon glyphicon-triangle-bottom"></i>
    <div class="searchz">
      <input class="search-input" type="text" placeholder="搜附近" />
      <i class="iconfont icon-yangshi_icon_tongyong_voice" style="color:#6376ef;font-size:2.5rem;margin-right:0.625rem;"></i>
    </div>
    <!-- 分类列表 -->
    <classify :gridlist="gridlist" style="margin-top:-10px;margin-left:-20px;"></classify>
    <!-- 美食套餐 -->
    <div class="dishes">
      <h4 style="color:#ed624b;margin-left:1rem;">美食套餐  · 附近热门优惠榜</h4>
        <div v-for="(item,index) in dishlist" :key="index" class="imgli">
         <img  :src="require('@/assets/images/' + item.src)" alt="">
         <span class="price">￥{{item.price}}<font style="float:right;">抢购</font></span>
         <div class="name">{{item.name}}</div>
         <div class="classes">{{item.classes}}</div>
         <div class="distance">{{item.distance}}</div>
        </div>
    </div>
    <!-- 横幅 -->
    <div class="banner1"><img src="@/assets/images/2.jpeg" alt=""></div>
    <!-- 推荐 -->
    <h3 id="tuijian" @click="xuanzhong(0)">推荐</h3><h3 id="quancheng" @click="xuanzhong(1)">全城热榜</h3>
    <ul class="tuijianul" style="list-style:none;background-color:#eaebef;margin-left:-1.5rem;margin-bottom:5rem;">
      <li v-for="(item,index) in rlist" :key="index">
        <div style="border-top-left-radius:1rem;border-top-right-radius:1rem;width:100%;height:8rem;"><img style="border-top-left-radius:1rem;border-top-right-radius:1rem;width:100%;height:100%;" :src="require('@/assets/images/' + item.img)"></div>
        <div style="margin-top:0.5rem;margin-left:0.5rem;font-size:1.5rem;font-weight:bold;">{{item.name}}</div>
        <div style="margin-top:0.5rem;margin-left:0.5rem;"><i v-for="index in 5" :key="index" style="font-size:1rem;color:orange;" class="iconfont icon-xingxing"></i>&nbsp;5·{{item.comments}}</div>
        <div style="margin-top:0.5rem;margin-left:0.5rem;">{{item.classes}}·{{item.distance}}</div>
        <div style="margin-top:0.5rem;margin-left:0.5rem;background-color:pink;width:15rem;color:deeppink;">{{item.rank}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
  import classify from '@/components/Chuxing/Classify.vue'
 export default{
   data(){
     return{
       gridlist:[],
       dishlist: [
         {src:'makalong.jpeg',price:49,name:'迦南（传媒店）',classes:'梦幻马卡龙',distance:'770m'},
         {src:'huoguo.jpg',price:61,name:'重庆自助火锅烤肉店',classes:'自助餐',distance:'95m'},
         {src:'kaorou.jpeg',price:86,name:'王三火锅烤肉（下沙店）',classes:'烤肉店',distance:'312m'},
         {src:'niupai.jpg',price:147,name:'西堤牛排',classes:'西餐厅',distance:'621m'},
         {src:'shousi.jpg',price:205,name:'山葵家精致料理寿司吧（金沙印象城店）',classes:'寿司',distance:'442m'}

       ],
       rlist:[
         {img:'xiaofang.jpeg',name:'杭州消防主题公园',comments:'77条',classes:'公园',distance:'1.4km',rank:'钱塘区最热公园榜第3名',height:'19rem'},
         {img:'fuleide.jpeg',name:'福雷德广场',comments:'14条',classes:'购物中心',distance:'1.6km',rank:'钱塘区购物中心排行第3名'},
         {img:'linping.jpeg',name:'临平公园',comments:'48条',classes:'4A景区',distance:'13.9km',rank:'钱塘区最热公园榜第8名',height:'19rem'},
         {img:'hedayue.png',name:'和达悦自由体育公园',comments:'1条',classes:'公园',distance:'2.2km',rank:'钱塘区最热公园榜第7名',height:'19rem'}
       ]
     }
   },
   methods:{
 getGridList(){
            this.$axios.post("getGridList").then((result)=>{
              for(var i=10;i<25;i++){
                this.gridlist.push(result.data[i]);
              }
              //console.log(this.gridlist);
            });
          },
          xuanzhong(id){
            if(id==0){
              document.getElementById("tuijian").style.borderBottom='4px solid royalblue';
              document.getElementById("quancheng").style.borderBottom='none';
            }else{
              document.getElementById("tuijian").style.borderBottom='none';
              document.getElementById("quancheng").style.borderBottom='4px solid royalblue';
            }
          }
   },
   mounted(){
this.getGridList();
this.xuanzhong(0);
    document.getElementById("wode").style.color='black';
   },
   components:{
     classify
   }
 }
</script>
<style>
  .address{
    font-size:2.5rem;
  }
  .searchz {
    width: 40%;
    height: 3.5rem;
    display: flex;
    align-items: center;
    background-color: #f5f6f8;
    border-radius: 2rem;
    margin-top: -3.5rem;
    margin-left: 20rem;
  }

  .searchz .search-input {
    width: 100%;
    height: 100%;
    border-style: none;
    margin-left: 0.625rem;
    outline: none;
    background-color: #f5f6f8;
  }

  .classifyul{
    display: flex;
    flex-wrap:wrap;
    list-style:none;
    padding:0;
    margin:0;
  }
  .classifyul li{
    width:20%;
  }
  .classifyul li span{
    display:inline-block;
    width:2.5rem;
    height:2.5rem;
    border-radius: 0.9375rem;
  }
  .dishes{
    height:20rem;
    width:91%;
    background-image:linear-gradient(to bottom,#ffe4e3,#ffffff);
    margin-top:240px;
    border-radius:1rem;
    padding-top:0.1rem;
    white-space: nowrap;/*不换行*/
    overflow: scroll;
    position:absolute;
  }
.dishes::-webkit-scrollbar {
    display: none;
  }

.imgli{
  display: inline-block;
  width:12rem;
  height:60%;
  margin-right:0.625rem;
  margin-right: 0.625rem;

}

  .imgli img {
    width: 100%;
    height: 60%;
    border-radius: 0.8rem;
  }

  .dishes .price{
    background-image:linear-gradient(to right,#ff3842,#ff8667);
    position:relative;
    top:3.7rem;
    left:-12.3rem;
    display: inline-block;
    width:10rem;
    height:2rem;
    color:white;
    padding-right:0.5rem;
    border-bottom-left-radius: 0.625rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  .dishes .name{
    width:100%;
    position:relative;
    top:1.3rem;
    overflow:hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
  }
  .dishes .classes{
    position:relative;
    top:1.5rem;
    color:dimgrey;
    font-size:0.625rem;
  }
  .dishes .distance{
    position:relative;
    left:8.5rem;
    color:dimgrey;
    font-size:0.625rem;

  }

  .banner1{
    width:96%;
    height:5rem;
    border-radius: 2.5rem;
    position:relative;
    top:42rem;
    z-index:500;
    /*z-index失效的情况：
    1.元素没有设置position属性（static除外）
    2.元素设置了浮动float
    3.父级元素的z-index比子级元素的z-index小
    4.元素的父级设置了position：relative（父级改为absolute）
    */
  }
  .banner1 img{
    width:100%;
    height:100%;
    border-radius: 2.5rem;
    z-index:500;
  }

  #tuijian{
    display:inline-block;
    margin-right:3rem;
    margin-top:45rem;
    padding-bottom:1rem;
  }
  #quancheng{
    display:inline-block;
    margin-top:45rem;
    padding-bottom:1rem;
  }
  .tuijianul li{
    display:inline-block;
    margin-left:1rem;
    width:17rem;
    margin-bottom:1rem;
    font-size:1rem;
    border-radius: 1rem;
    background-color:white;
    height:19rem;
  }
</style>
