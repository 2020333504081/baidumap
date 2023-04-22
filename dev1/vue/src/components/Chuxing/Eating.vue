<template>
  <div>
    <!-- 搜索框及背景颜色 -->
    <div class="tops2">
      <div class="inputdiv2">
        <i @click="goback()" style="margin-left:1rem;" class="glyphicon glyphicon-menu-left"></i>
        <input type="text" placeholder="4s店"/>
        <span class="wenzi2">搜索</span>
      </div>
    </div>
    <!-- 搜索记录吃喝玩乐 -->
    <div class="biaoti2" >
    <h4 @click="tosearchPage()" style="z-index:100;display:inline-block;margin-right:3rem;margin-left: 1rem;">搜索记录</h4>
    <h4 style="z-index:100;display:inline-block;border-bottom:3px solid blue;padding-bottom:0.5rem;"><i style="color:red;margin-right:0.5rem;" class="iconfont icon-huomiao"></i>吃喝玩乐</h4>
    </div>
    <!-- 各种榜单 -->
    <div v-for="(item,index) in titlelist" :key="index" class="bangdan" :style="'backgroundImage:linear-gradient(120deg,'+item.bcolor+',#ffffff)'">
      <h4 class="title1">{{item.title1}}</h4><h5 class="title2">{{item.title2}}></h5>
      <ul class="bangdanul">
        <!-- 用v-if控制循环时遍历的数组 -->
        <li v-if="index==0" v-for="(item1,index1) in ranklist1" :key="index1">{{index1+1}}&nbsp;&nbsp;{{item1.name}}<span class="people">{{item1.people}}</span></li>
        <li v-if="index==1" v-for="(item1,index1) in ranklist2" :key="index1">{{index1+1}}&nbsp;&nbsp;{{item1.name}}<span class="people">{{item1.people}}</span></li>
        <li v-if="index==2" v-for="(item1,index1) in ranklist3" :key="index1">{{index1+1}}&nbsp;&nbsp;{{item1.name}}<span class="people">{{item1.people}}</span></li>
        <li v-if="index==3" v-for="(item1,index1) in ranklist4" :key="index1">{{index1+1}}&nbsp;&nbsp;{{item1.name}}<span class="people">{{item1.people}}</span></li>

      </ul>
    </div>
</div>
</template>

<script>

export default {
     data() {
        return {
          titlelist:[],
          ranklist1:[],
          ranklist2:[],
          ranklist3:[],
          ranklist4:[]
        }
      },

    created() {

    },
    mounted() {
      this.getEatingList();
    },
    methods: {
      getEatingList(){
        this.$axios.post("getEatingList").then((result)=>{
          var rlist=result.data;
          for(var i=0;i<rlist.length;i++){
            if(rlist[i].parentid==0){
              this.titlelist.push(rlist[i]);
            }else if(rlist[i].parentid==1){
              this.ranklist1.push(rlist[i])
            }else if(rlist[i].parentid==2){
              this.ranklist2.push(rlist[i])
            }else if(rlist[i].parentid==3){
              this.ranklist3.push(rlist[i])
            }else if(rlist[i].parentid==4){
              this.ranklist4.push(rlist[i])
            }
          }

        });
      },
      tosearchPage(){
        this.$router.push('/searchPage');
      },
      goback(){
        this.$router.push('/chuxing');
      }
    },

};
</script>

<style>

.tops2{
    width:100%;
    height:10rem;
    background-color:#aad4fe;
    padding-top: 2.5rem;
    position:fixed;
    z-index:100;
    top:0;
  }
  .inputdiv2{
    width:90%;
    height:5rem;
    margin-left:5%;
    border-radius: 0.5rem;
    background-color:white;
  }
  .inputdiv2 input{
    width:70%;
    height:100%;
    margin-left:2.5%;
    font-size: 2rem;
    outline: none;
  }
  .inputdiv2 .wenzi2{
    display:inline-block;
    border-left:1px solid grey;
    padding-left:0.9rem;
    width:5rem;
    font-size: 2rem;
    color:blue;
  }
  .biaoti2{
    background-color:white;
    position:fixed;
    top:10rem;
    z-index:100;
    width:100%;
  }
  .bangdan{
    border:1px solid lightgrey;
    width:94%;
    height:18rem;
    margin-bottom:2rem;
    margin-left:1rem;
    border-radius: 1rem;
    position:relative;
    top:16rem;
    padding-top:1rem;
    padding-left:1rem;
  }
  .title1{
     font-weight: bold;
  }
  .title2{
    float:right;
    margin-right:1rem;
    margin-top:-2.5rem;
  }
  .bangdan .bangdanul{
    list-style: none;
    font-size: 1.6rem;
  }
  .bangdan .bangdanul li{
    width:98%;
    height:4.3rem;
    border-bottom:1px solid lightgrey;
    padding-bottom:0.9rem;
    padding-top:1rem;
  }
  .people{
    display:inline-block;
    width:15rem;
    font-size: 1.5rem;
    text-align: center;
    background-color:#ffece6;
    color:#ed8b68;
    float:right;
    margin-right: 0.5rem;
  }
</style>
