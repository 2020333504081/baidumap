<template>
  <div>
    <!-- 搜索框及背景颜色 -->
    <div class="tops">
      <div class="inputdiv">
        <i @click="goback()" style="margin-left:1rem;" class="glyphicon glyphicon-menu-left"></i>
        <input @keydown.enter="search()" type="text" placeholder="4s店"/>
        <span @click="search()" class="wenzi">搜索</span>
      </div>
    </div>
    <!-- 图标栏 -->
    <div class="tubiao">
      <classify :gridlist="gridlist" style="margin-top:50px;height:13rem;"></classify>
    </div>
    <div style="width:100%;height:1.5rem;background-color:#eaebef;margin-top:17.5rem;"></div>
<!-- 回家去公司收藏夹榜单 -->
<div class="xiabu">
  <ul class="fenlei">
    <li style="border-right:1px solid grey"><i style="margin-right:1rem;" class="iconfont icon-shouye"></i>回家</li>
    <li style="border-right:1px solid grey"><i style="margin-right:1rem;" class="iconfont icon-suitcase-full"></i>去公司</li>
    <li style="border-right:1px solid grey"><i style="margin-right:1rem;" class="iconfont icon-shoucang1"></i>收藏夹</li>
    <li><i style="margin-right:1rem;" class="iconfont icon-dingdan"></i>榜单</li>
  </ul>
  <!-- 搜索记录吃喝玩乐 -->
  <div id="biaoti" >
  <h4 style="z-index:100;display:inline-block;margin-right:3rem;border-bottom:3px solid blue;padding-bottom:0.5rem;">搜索记录</h4>
  <h4 @click="toEating()" style="z-index:100;display:inline-block;"><i style="color:red;margin-right:0.5rem;" class="iconfont icon-huomiao"></i>吃喝玩乐</h4>
  </div>
  <!-- 搜索记录 -->
<ul class="sousuojilu" ref="scroll">
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>景点</li>
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>美食</li>
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>充电站</li>
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>黄山风景区</li>
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>黄山风景区</li>
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>黄山风景区</li>
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>黄山风景区</li>
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>黄山风景区</li>
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>黄山风景区</li>
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>黄山风景区</li>
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>黄山风景区</li>
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>黄山风景区</li>
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>黄山风景区</li>
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>黄山风景区</li>
  <li><i style="margin-right:1rem;" class="glyphicon glyphicon-search"></i>黄山风景区</li>
  <li class="li5"><i style="margin-right:1rem;" class="glyphicon glyphicon-map-marker"></i>陆游纪念馆<div style="margin-top:-2rem;color:grey;margin-left:2rem;">杭州市拱墅区</div>
    <div class="souzhoubian"><i class="iconfont icon-yangshi_icon_tongyong_compass"></i></div><div class="szb">搜周边</div>
    <div class="daozhequ"><i class="iconfont icon-route-fill"></i></div><div class="dzq">到这去</div>
  </li>
</ul>
</div>
  </div>
</template>

<script>
  import classify from '@/components/Chuxing/Classify.vue'

  export default {
      data() {
        return {
          gridlist:[]
          }
        },
        // directives:{
        //   focus:{
        //     bind: function (el, binding) {

        //                 el.focus()

        //               }
        //   }
        // },
        methods:{
         getGridList(){
                    this.$axios.post("getGridList").then((result)=>{
                      for(var i=25;i<35;i++){
                        this.gridlist.push(result.data[i]);
                      }
                      //console.log(this.gridlist);
                    });
                  },
          goback(){
            this.$router.push('/chuxing');
          },
          toEating(){
            //document.getElementsByClassName("sousuojilu")
            this.$router.push('/eating');
          },
          handleScrollx(){
             //console.log('滚动高度',window.pageYOffset);
              //console.log('距离顶部高度',this.$refs.scroll.getBoundingClientRect().top);
              //为了保证搜索记录吃喝玩乐这一栏既可以固定又可以恢复，我是采用下面的ul记录作为参照的，求的是ul到顶部的距离，为什么不采用这一栏本身，是因为当这一栏固定过一次之后它距离顶部不会再变，没法放回原来的位置了
              var top=this.$refs.scroll.getBoundingClientRect().top;
              if(top<159){
                document.getElementById("biaoti").className="fixed";
              }else{
                document.getElementById("biaoti").className="notfixed";
              }

          },
          search(){
            this.$router.push('/hujiao');
          }
        },

      mounted(){
       this.getGridList();
       window.addEventListener("scroll", this.handleScrollx,true);
      },

      //离开页面时一定要销毁不然会出问题
      destroyed(){
          window.removeEventListener("scroll",this.handleScrollx)
      },
      components: {
        classify
      }
  }
</script>

<style>
  .tops{
    width:100%;
    height:15rem;
    background-color:#aad4fe;
    padding-top: 8rem;
    position:fixed;
    z-index:100;

  }
  .inputdiv{
    width:90%;
    height:5rem;
    margin-left:5%;
    border-radius: 0.5rem;
    background-color:white;
  }
  .inputdiv input{
    width:70%;
    height:100%;
    margin-left:2.5%;
    font-size: 2rem;
    outline: none;
  }
  .inputdiv .wenzi{
    display:inline-block;
    border-left:1px solid grey;
    padding-left:0.9rem;
    width:5rem;
    font-size: 2rem;
    color:blue;
  }
  .tubiao{
    width:100%;
    height:15rem;
    z-index:10;
    background-color:white;
    margin-top:-5rem;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }

  .classifyul{
    display: flex;
    flex-wrap:wrap;
    list-style:none;
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
  .xiabu{
    padding-left:1rem;
    padding-right:1rem;
  }
  .fenlei{
    display: flex;
    list-style:none;
    border-bottom:1px solid grey;
  }
  .fenlei li{
    display:inline-block;
    width:25%;
    font-size:1.5rem;
    margin-top:1rem;
    margin-bottom:1rem;
    text-align:center;
  }

  .sousuojilu{
    list-style: none;
  }
  .sousuojilu li{
    height:4rem;
    line-height: 4rem;
    border-bottom:1px solid lightgrey;
  }
  .sousuojilu .li5{
    height:6rem;

  }
  .sousuojilu li .souzhoubian{
    margin-top:-5.5rem;
    margin-left:24rem;
    border:1px solid grey;
    width:3rem;
    height:3rem;
    border-radius: 1.5rem;
    line-height: 3rem;
    text-align: center;
    color:grey;
  }
  .sousuojilu li .szb{
    margin-left:23.5rem;
    margin-top:-0.5rem;
    color:grey;
  }
  .sousuojilu li .daozhequ{
    margin-top:-6.5rem;
    margin-left:31rem;
    background-color:grey;
    width:3rem;
    height:3rem;
    border-radius: 1.5rem;
    line-height: 3rem;
    text-align: center;
    color:white;
  }
  .sousuojilu li .dzq{
    margin-left:30.5rem;
    margin-top:-0.5rem;
    color:grey;
  }
  .fixed{
    position:fixed;
    top:10rem;
    z-index:100;
    width:100%;
    background-color: white;
    margin-left:-1rem;
    padding-left: 1rem;
  }
  .notfixed{
     z-index:100;
     width:100%;
     background-color: white;
     margin-left:-1rem;
     padding-left: 1rem;
  }
</style>
