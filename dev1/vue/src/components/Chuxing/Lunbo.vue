<template>
  <div class="lunbotu">
    <div class="imgdiv">
      <img v-for="(item,index) in imglist" :key="index" :src="require('@/assets/images/' + item.src)"  v-show="index==x">
      <ul class="imgpage">
        <li v-for="(v,i) in imglist" :key="i" :class="i==x?'active':''" @click="goto(i)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        x:0
      }
    },
    methods:{
      go(){
        var interid=setInterval(()=>{
          this.x++;
          if(this.x==this.imglist.length)
            this.x=0;
        },2000)
      },
      goto(i){
        this.x=i;
      }
    },
    mounted(){
      this.go();
    },
    destroyed(){
      clearInterval(this.interid)
    },
    props:["imglist"]
  }
</script>

<style>
  .lunbotu{
      width: 100%;
      height: 23%;
      background-color: white;
      position:absolute;
      top:27.5rem;
      padding:0;
      text-align:center;
    }
   .lunbotu .imgdiv{
     width:100%;
     height:100%;
     margin:0;
   }
   .lunbotu .imgdiv img{
     width:100%;
     height:100%;
   }

   .lunbotu .imgdiv .imgpage li{
     display:inline-block;
     z-index:1000;
     width:0.625rem;
     height:0.625rem;
     border:1px solid grey;
     border-radius:0.3125rem;
     margin:0.3125rem;
     position:relative;
     top:-4.5rem;
     left:0rem;
     /* transform:translateX(-50%) */
   }
   .active{
      background-color:grey !important
   }
</style>
