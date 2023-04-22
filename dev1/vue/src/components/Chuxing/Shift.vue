<template>
  <div>
  <!-- 1 -->
  <div class="recommend-address" style="background-image:linear-gradient(to bottom,#d4f5ee,#ffffff);" v-show="x==0" v-model="x">
    <ul class="recommend-addressul">
      <router-link v-for="item in alist1" :key="item.id" :to="'comments/'+item.id" tag="li">
        <div class="imgdiv"><img :src="require('@/assets/images/' + item.src)"></div>
        <h6 style="margin-top:7px;margin-bottom:0px;">{{item.name}}</h6>
        <span class="infor"><i class="glyphicon glyphicon-map-marker"></i>距此{{item.distance}}km·{{item.district}} | {{item.classes}}</span>
        <span class="rank">{{item.billboard}}</span><span class="number">{{item.number}}</span>
      </router-link>
    </ul>
  </div>
  <!-- 2 -->
  <div class="recommend-address" style="background-image:linear-gradient(to bottom,#ffe5d6,#ffffff);" v-show="x==1" v-model="x">
    <ul class="recommend-addressul">
      <router-link v-for="item in alist2" :key="item.id" :to="'comments/'+item.id" tag="li">
        <div class="imgdiv"><img :src="require('@/assets/images/' + item.src)"></div>
        <h6 style="margin-top:7px;margin-bottom:0px;">{{item.name}}</h6>
        <span class="infor"><i class="glyphicon glyphicon-map-marker"></i>距此{{item.distance}}km·{{item.district}} | {{item.classes}}</span>
        <span class="rank">{{item.billboard}}</span><span class="number">{{item.number}}</span>
      </router-link>
    </ul>
  </div>
  <!-- 3 -->
  <div class="recommend-address" style="background-image:linear-gradient(to bottom,#fee3ec,#ffffff);" v-show="x==2" v-model="x">
    <ul class="recommend-addressul">
      <router-link v-for="item in alist3" :key="item.id" :to="'comments/'+item.id" tag="li">
        <div class="imgdiv"><img :src="require('@/assets/images/' + item.src)"></div>
        <h6 style="margin-top:7px;margin-bottom:0px;">{{item.name}}</h6>
        <span class="infor"><i class="glyphicon glyphicon-map-marker"></i>距此{{item.distance}}km·{{item.district}} | {{item.classes}}</span>
        <span class="rank">{{item.billboard}}</span><span class="number">{{item.number}}</span>
      </router-link>
    </ul>
  </div>
  <!-- 4 -->
  <div class="recommend-address" style="background-image:linear-gradient(to bottom,#fee9ee,#ffffff);" v-show="x==3" v-model="x">
    <ul class="recommend-addressul">
      <router-link v-for="item in alist4" :key="item.id" :to="'comments/'+item.id" tag="li">
        <div class="imgdiv"><img :src="require('@/assets/images/' + item.src)"></div>
        <h6 style="margin-top:7px;margin-bottom:0px;">{{item.name}}</h6>
        <span class="infor"><i class="glyphicon glyphicon-map-marker"></i>距此{{item.distance}}km·{{item.district}} | {{item.classes}}</span>
        <span class="rank">{{item.billboard}}</span><span class="number">{{item.number}}</span>
      </router-link>
    </ul>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        // x:0,
        alist1:[],
        alist2:[],
        alist3:[],
        alist4:[]
      }
    },
    methods:{
      getAlist(){
          this.$axios.get("getAlist").then((result)=>{
             this.alist1.push(result.data[0]);
             this.alist1.push(result.data[1]);
             this.alist1.push(result.data[2]);
             this.alist1.push(result.data[3]);
             this.alist1.push(result.data[4]);
            //console.log(this.alist1);
             this.alist2.push(result.data[5]);
             this.alist2.push(result.data[6]);
             this.alist2.push(result.data[7]);
             this.alist2.push(result.data[8]);
             this.alist2.push(result.data[9]);

             this.alist3.push(result.data[10]);
             this.alist3.push(result.data[11]);
             this.alist3.push(result.data[12]);
             this.alist3.push(result.data[13]);
             this.alist3.push(result.data[14]);

             this.alist4.push(result.data[15]);
             this.alist4.push(result.data[16]);
             this.alist4.push(result.data[17]);
             this.alist4.push(result.data[18]);
             this.alist4.push(result.data[19]);

        });
      }
    },
    created(){
      this.getAlist();
    },
    props:["x"]
  }
</script>

<style>
  .recommend-address{
    margin-top:1.25rem;
    margin-left:3%;
    width:94%;
    height:90%;
    border:1px solid #dcece9;
    border-radius:0.625rem;

  }
  .recommend-address .recommend-addressul{
    list-style:none;
    padding:4% 4%;
  }
  .recommend-address .recommend-addressul li{
    display:inline-block;
    /* border:1px solid black; */
    width:100%;
    height:20%;
    margin-bottom:1rem;
    /* padding:2% 2%; */
  }
  .recommend-address .recommend-addressul li .imgdiv{
     width:6.25rem;
     height:6.25rem;
     float:left;
     border-radius:1rem;
     margin-right:0.3125rem;
  }
  .recommend-address .recommend-addressul li .imgdiv img{
    width:100%;
    height:100%;
    border-radius: 1rem;
  }
  .recommend-address .recommend-addressul li .infor{
    color:grey;
    font-size:0.3125rem;
	margin-right:1rem;
  }
  .recommend-address .recommend-addressul li .rank{
    display:inline-block;
    font-size:0.3125rem;
    background-color:#fce8ea;
    color:#dd8092;
    border-radius: 0.1875rem;
    padding:0.125rem;
    margin-right:0.0625rem;
    height:1.875rem;
    line-height:1.875rem;
  }
  .recommend-address .recommend-addressul li .number{
    display:inline-block;
    font-size:0.3125rem;
    background-color:#f2efde;
    color:#d29c5e;
    border-radius: 0.1875rem;
    padding:0.125rem;
    height:1.875rem;
    line-height:1.875rem;

  }
</style>
