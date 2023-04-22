<template>
  <!-- 搜索框 -->
  <div class="chuxing">
    <router-link tag="div" to="/searchPage" class="search1">
      <i class="glyphicon glyphicon-search" style="font-size:1.875rem;margin-left:0.625rem;"></i>
      <input class="search-input" type="text" placeholder="搜洗浴,放松一下" />
      <i class="iconfont icon-yangshi_icon_tongyong_voice" style="color:#6376ef;font-size:2.5rem;margin-right:0.625rem;"></i>
    </router-link>
    <!-- 分类列表 -->
    <div style="background-color:white;width:100%;height:42%;margin-top:-30px;">
      <h4 style="margin-left:5px;">常用功能</h4>
      <classify :gridlist="gridlist" style="margin-top:50px;"></classify>
    </div>

    <!-- 轮播图 -->
    <lunbotu :imglist="imglist" v-if="imglist&&flag"></lunbotu>
    <!-- 为你推荐 -->
    <div class="recommend">
      <h4 style="margin-left:0.625rem;">为你推荐</h4>
      <ul class="recommend-classifyul">
        <li v-for="(item,index) in clist" :key="index">
          <span :id="clists(index)" class="original" @click="shift(index)">{{item.name}}</span>
        </li>
      </ul>

      <ss :x="x"></ss>

    </div>
    <!-- 把导航条的位置留出来，不然导航条会挡住下面的内容 -->
    <div style="height:6.25rem;width:100%;position:relative;top:65rem;background-color:white;"></div>

  </div>
</template>

<script>
  import classify from '@/components/Chuxing/Classify.vue'
  import lunbotu from '@/components/Chuxing/Lunbo.vue'
  import ss from '@/components/Chuxing/Shift.vue'
  export default {
    data() {
      return {
        x: 0,
        flag:false,
        imglist: [
          // require('@/assets/images/1.jpeg'),
          // require('@/assets/images/2.jpeg'),
          // require('@/assets/images/3.jpeg'),
          // require('@/assets/images/4.jpeg'),
          // require('@/assets/images/5.jpeg')
        ],
        clist: [{name: "必去景点"},
          {name: "附近美食"},
          {name: "休闲玩乐"},
          {name: "购物逛街"}
        ],
        gridlist:[]
        }
      },
      methods:{
        getImgList(){
          this.$axios.get("getImgList").then((result)=>{
            this.imglist=result.data;
            //console.log(this.imglist);
            this.flag=true;
          });

        },
        shift(index) {
            this.x = index;
            for (var i = 0; i < 4; i++) {
              document.getElementById(i).className = "original";
            }
            document.getElementById(index).className = "class" + index;
          },
        clists(index) {
            return index;
          },
          getGridList(){
            this.$axios.post("getGridList").then((result)=>{
              for(var i=0;i<10;i++){
                this.gridlist.push(result.data[i]);
              }
              //console.log(this.gridlist);
            });
          }

      },
      created(){
        this.getImgList();
        this.getGridList();
    },
    mounted(){
      document.getElementById("0").className = "class0";

    document.getElementById("wode").style.color='black';
    },
    components: {
      classify,
      lunbotu,
      ss
    }
}
</script>

<style>
  .chuxing {
    width: 100%;
    height: 43rem;
    background-color: #f7f7f7;
    /* background: url(/assets/images/ditu.jpeg) center repeat;
    background-repeat: repeat;
    background-size: 100% 100%; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* position: fixed; */
  }

  .search1 {
    width: 90%;
    height: 5rem;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 0.4375rem;
    margin-top: 1.25rem;

  }

  .search-input {
    width: 100%;
    height: 100%;
    border-style: none;
    margin-left: 0.625rem;
    outline: none;
    background-color: white;
  }

  .recommend {
    width: 100%;
    height: 42rem;
    background-color: white;
    position: absolute;
    top: 40rem;
  }

  .recommend-classifyul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .recommend-classifyul li {
    display: inline-block;
    margin: 0rem 0.3125rem 0rem 0.31rem;
  }

  .recommend-classifyul li span {
    font-size: 0.125rem;
    display: inline-block;
    width: 6.25rem;
    height: 1.875rem;
    line-height: 1.875rem;
    text-align: center;
    border-radius: 5rem;

  }

  .original {
    background-color: #f3f4f8;
    color: grey;
  }

  .class0 {
    background-color: #e2f9f3;
    color: #0ecc9c;
  }

  .class1 {
    background-color: #ffede9;
    color: #f57248;
  }

  .class2 {
    background-color: #feeaeb;
    color: #e55a5f;
  }

  .class3 {
    background-color: #fee9ee;
    color: #ec668b;
  }
</style>
