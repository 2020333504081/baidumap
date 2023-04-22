<template>
  <div style="position:relative;padding-left:1rem;">
    <i @click="goback()" class="glyphicon glyphicon-chevron-left" style="font-size:2rem;"></i>
    <span style="font-size:2rem;position:absolute;left:35%;">发表评论</span>
    <span @click="writeComments()" class="publish">发布</span>
    <h4 style="position:absolute;top:4rem;left:1rem;">东湖公园</h4>
    <h5 style="color:grey;position:absolute;top:7rem;left:1rem;">整体印象</h5>
    <div style="position:absolute;top:7rem;left:8rem;">
      <i id="star1" style="font-size:2.5rem;color:lightgrey"class="iconfont icon-xingxing" @click="star1"></i>
      <i id="star2" style="font-size:2.5rem;color:lightgrey"class="iconfont icon-xingxing" @click="star2"></i>
      <i id="star3" style="font-size:2.5rem;color:lightgrey"class="iconfont icon-xingxing" @click="star3"></i>
      <i id="star4" style="font-size:2.5rem;color:lightgrey"class="iconfont icon-xingxing" @click="star4"></i>
      <i id="star5" style="font-size:2.5rem;color:lightgrey"class="iconfont icon-xingxing" @click="star5"></i>
    </div>
    <textarea style="outline:none;width:100%;heighr:15rem;color:grey;position:absolute;top:11rem;left:1rem;" placeholder="写下你的感受，分享给更多人~" v-model="review"></textarea>
    <div class="photo"><i class="iconfont icon-xiangji" style="font-size:3.5rem;"></i></div>
    <h6 style="color:#f7a17e;position:absolute;top:20rem;left:1rem;">再传一张图 就有机会入选优质评论哦</h6>
    <hr style="margin-left:-0.3rem;position:absolute;top:31rem;margin-bottom:0.3125rem;width:26rem;border-color:lightgrey"/>
    <i class="iconfont icon-yuanxingweixuanzhong" style="color:grey;position:absolute;top:33.7rem;left:1rem;"></i><h6 class="niming" style="color:grey;position:absolute;top:33rem;left:2.7rem;">匿名上传</h6>
    <i class="iconfont icon-wenhao-xianxingyuankuang" style="color:#4f90ca;position:absolute;top:35.4rem;left:1rem;"></i><h6 class="xieyi" style="color:#4f90ca;position:absolute;top:35rem;left:2.7rem;">了解用户上传协议</h6>


  </div>
</template>

<script>
  export default{
    data(){
      return{
        id:0,
        name:"138*****718",
        score:"",
        review:"",
        date:"",
        listitem:[]
      }
    },
    methods:{
      star1(){
        var star=document.getElementById("star1");
          if(star.style.color=="orangered"){
          for(var i=2;i<6;i++){
            var star=document.getElementById("star"+i);
            star.style.color='lightgrey';
           }
        }else{
          var star=document.getElementById("star1");
          star.style.color='orangered';
        }
      },
      star2(){
        var star=document.getElementById("star2");
          if(star.style.color=="orangered"){
          for(var i=3;i<6;i++){
            var star=document.getElementById("star"+i);
            star.style.color='lightgrey';
           }
        }else{
          for(var i=1;i<3;i++){
            var star=document.getElementById("star"+i);
            star.style.color='orangered';
           }
        }
    },
      star3(){
        var star=document.getElementById("star3");
          if(star.style.color=="orangered"){
          for(var i=4;i<6;i++){
            var star=document.getElementById("star"+i);
            star.style.color='lightgrey';
           }
        }else{
          for(var i=1;i<4;i++){
            var star=document.getElementById("star"+i);
            star.style.color='orangered';
           }
        }
    },
      star4(){
        var star=document.getElementById("star4");
          if(star.style.color=="orangered"){
            var star=document.getElementById("star5");
            star.style.color='lightgrey';
        }else{
          for(var i=1;i<5;i++){
            var star=document.getElementById("star"+i);
            star.style.color='orangered';
           }
        }
    },
      star5(){
        var star=document.getElementById("star5");
          for(var i=1;i<6;i++){
            var star=document.getElementById("star"+i);
            star.style.color='orangered';
           }
    },
    // postComments(){
    //   // 获取评分
    //   var score=0;
    //   var star1=document.getElementById("star1");
    //   var star2=document.getElementById("star2");
    //   var star3=document.getElementById("star3");
    //   var star4=document.getElementById("star4");
    //   var star5=document.getElementById("star5");

    //   if(star5.style.color=='orangered'){
    //     score=5;
    //   }else if(star4.style.color=='orangered')
    //   score=4;
    //   else if(star3.style.color=='orangered')
    //   score=3;
    //   else if(star2.style.color=='orangered')
    //   score=2;
    //   else if(star1.style.color=='orangered')
    //   score=1;
    //   else
    //   score=0;
    //   //获取时间
    //   var date=new Date();
    //   var year=date.getFullYear();
    //   var month=date.getMonth();
    //   var day=date.getDate();
    //   var currentdate=year+"-"+month+"-"+day;
    //   var comment={name:this.name,score:score,review:this.review,date:currentdate};
    //   var listitem=JSON.parse(localStorage.getItem("cmts")||"[]");
    //   listitem.unshift(comment);
    //   localStorage.setItem("cmts",JSON.stringify(listitem));
    //   this.review="";
    //   // this.$emit("func",listitem);
    //   window.location.href='http://localhost:8088/#/comments';
    //  },
    goback(){
      this.$router.go(-1);
    },
     writeComments(){//数据存完就马上取出来
       //获取评分
         var score=0;
         var star1=document.getElementById("star1");
         var star2=document.getElementById("star2");
         var star3=document.getElementById("star3");
         var star4=document.getElementById("star4");
         var star5=document.getElementById("star5");

         if(star5.style.color=='orangered'){
           score=5;
         }else if(star4.style.color=='orangered')
         score=4;
         else if(star3.style.color=='orangered')
         score=3;
         else if(star2.style.color=='orangered')
         score=2;
         else if(star1.style.color=='orangered')
         score=1;
         else
         score=0;
         //获取时间
         var date=new Date();
         var year=date.getFullYear();
         var month=date.getMonth();
         var day=date.getDate();
         var currentdate=year+"-"+month+"-"+day;
         var id=this.$route.params.id;
         this.id=id;
       this.$axios({
           url:"writeComments",
           method:"get",
           params:{name:"138*****718",date:currentdate,score:score,flag:id,review:this.review}
         }).then((result)=>{
           //console.log("1:",result.data)
           //localStorage.setItem("cmts",JSON.stringify(result.data));
           var listitem=JSON.stringify(result.data);
          this.$router.push({
           path:'/comments/'+this.id,
           query:{listitem:listitem}
         })
         }).catch(err=>console.log(err))

         //window.location.href='http://localhost:8088/#/comments/'+id;
         //this.$router.go(-1);

     }

   }
  }
</script>

<style>
  .publish{
    display:inline-block;
    position:absolute;
    top:0.5rem;
    right:1rem;
    width:6.25rem;
    height:1.875rem;
    border-radius: 0.9375rem;
    background-image:linear-gradient(to right,#327dfd,#43a7ff);
    color:white;
    text-align: center;
    line-height: 1.875rem;
    font-size:1.1rem;
  }
  .photo{
    width:8rem;
    height:8rem;
    text-align:center;
    line-height:8rem;
    position:absolute;
    top:23rem;
    background-color:#f3f4f8;
    color:#b3b4b8;
    border-radius: 0.625rem;
  }
  .niming::before{
    content:"";
    display:block;
    width:0.3125rem;
    height:0.3125rem;
    border-radius: 0.15625rem;

  }
</style>
