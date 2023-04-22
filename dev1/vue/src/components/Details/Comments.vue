<template>
  <div class="comments" >
    <div @click="goBack()" class="comment-topicon1"><i class="glyphicon glyphicon-chevron-left"></i></div>
    <div style="position:absolute;left:28rem;"class="comment-topicon2"><i class="glyphicon glyphicon-remove-circle"></i></div>
    <div class="comment-topicon3"><i class="iconfont icon-road-map-line"></i></div>
    <div class="comment-information">
      <h4>{{details.name}}</h4>
      <div class="comment-score">
        <i v-for="(item,index) in starlist" :key="index" class="glyphicon glyphicon-star"></i>
      </div>
      <span style="color:#fe601f;margin-right:0.5rem;">{{details.score}}分</span><span>{{details.classes}}</span>

      <div class="comment-imgdiv">
        <img v-for="(item,index) in imglist" :key="index" :src="getPath(item.src)" alt="">
      </div>


      <h6>{{details.hours}}</h6>
      <h6 style="position:absolute;top:15.8rem;right:2rem;">></h6>
      <hr style="margin-left:-0.3rem;margin-bottom:0.3125rem;width:34rem;margin-top:-0.125rem;border-color:lightgrey" />
      <h6>{{details.distance}} | {{details.address}}</h6>
      <h6 style="margin-bottom:1.5rem;color:grey;">{{details.ways}}</h6>
      <hr style="margin-left:-1.5rem;width:60rem;margin-top:-0.125rem;background-color:#f4f3f9;border:0.125rem solid #f4f3f9" />
    </div>
    <div class="comment-comment">
      <h4>评论</h4>
      <div class="comment-comment-star">
        <i style="font-size:2.5rem;" class="iconfont icon-touxiang"></i>
        <i style="font-size:2.5rem;" class="iconfont icon-24gl-starEmpty"></i>
        <i style="font-size:2.5rem;" class="iconfont icon-24gl-starEmpty"></i>
        <i style="font-size:2.5rem;" class="iconfont icon-24gl-starEmpty"></i>
        <i style="font-size:2.5rem;" class="iconfont icon-24gl-starEmpty"></i>
        <i style="font-size:2.5rem;" class="iconfont icon-24gl-starEmpty"></i>
      </div>
      <div class="comment-btn" @click="pushid()">立即评价</div>
      <font style="font-size:4rem;position:absolute;top:13rem;left:20%;color:#fc494d;">{{details.score}}.0</font>
      <font style="font-size:1rem;position:absolute;top:14.2rem;left:36%;">整体评分</font>
      <div class="comment-score" style="position:absolute;top:15.8rem;left:36%;">
        <i v-for="(item,index) in starlist" :key="index" class="glyphicon glyphicon-star"></i>

      </div>
      <hr style="margin-left:-0.3rem;position:absolute;top:18rem;margin-bottom:0.3125rem;width:33rem;border-color:lightgrey" />

    </div>

    <!-- 精选评论 -->
    <div id="select" class="comment-reviews">
      <h4 style="">精选评论</h4>
      <ul class="comment-reviewsul" style="list-style:none;">
        <li v-for="(item,index) in listitem" :key="index">
          <i style="font-size:3.125rem;" class="iconfont icon-touxiang"></i>
          <p style="margin-top:-4.3rem;margin-left:4rem;">{{item.name}}</p>
          <div style="margin-top:-1.2rem;margin-left:4rem;" class="comment-sc">
            <i :id="index+'0'" style="font-size:0.15rem;color:lightgrey" class="glyphicon glyphicon-star"></i>
            <i :id="index+'1'" style="font-size:0.15rem;color:lightgrey" class="glyphicon glyphicon-star"></i>
            <i :id="index+'2'" style="font-size:0.15rem;color:lightgrey" class="glyphicon glyphicon-star"></i>
            <i :id="index+'3'" style="font-size:0.15rem;color:lightgrey" class="glyphicon glyphicon-star"></i>
            <i :id="index+'4'" style="font-size:0.15rem;color:lightgrey" class="glyphicon glyphicon-star"></i>
          </div>
          <p style="margin-top:-2.1rem;margin-left:13rem;" class="comment-date">{{item.date}}</p>
          <p style="margin-top:-5rem;margin-left:30.5rem;"><i class="glyphicon glyphicon-option-horizontal"></i></p>
          <div style="margin-top:2.5rem;">{{item.review}}</div>
          <span style="display:inline-block;margin-top:3px;">来自百度地图·9浏览<i style="margin-left:18rem;margin-right:0.1rem;" class="glyphicon glyphicon-thumbs-up"></i>0</span>
          <hr style="margin-left:-0.3rem;margin-top:1rem;width:33rem;border-color:lightgrey" />
        </li>
      </ul>
    </div>
    <!-- <comm @func="loadComment" v-show="false"></comm> -->
    <ctabber></ctabber>
<!--    <div style="height:6.25rem;width:100%;position:relative;top:100rem;background-color:white;"></div>
 -->  </div>
</template>

<script type="text/javascript" defer="defer">
  import ctabber from '@/components/Chuxing/ctabber'
  export default {
    data() {
      return {
        id: this.$route.params.id,
        imglist: [
          // require('@/assets/images/6.jpeg'),
          // require('@/assets/images/7.jpeg'),
          // require('@/assets/images/8.jpeg'),
          // require('@/assets/images/9.jpeg'),
          // require('@/assets/images/10.jpeg')
        ],
        listitem: [],
        slist: [],
        details: [],
        starlist: []
      }
    },
    methods: {
goBack(){
  this.$router.go(-1);
},
      getDetails() {
        this.$axios({
          url: "http://localhost:8080/web22/getDetails",
          method: "get",
          params: {
            id: this.id
          }
        }).then((result) => {
          this.details = result.data[0];
          if (result.data[0].score == '5') {
            this.starlist.push(1);
            this.starlist.push(2);
            this.starlist.push(3);
            this.starlist.push(4);
            this.starlist.push(5);
          } else if (result.data[0].score == '4') {
            this.starlist.push(1);
            this.starlist.push(2);
            this.starlist.push(3);
            this.starlist.push(4);
          } else if (result.data[0].score == '3') {
            this.starlist.push(1);
            this.starlist.push(2);
            this.starlist.push(3);
          } else if (result.data[0].score == '2') {
            this.starlist.push(1);
            this.starlist.push(2);
          } else if (result.data[0].score == '1') {
            this.starlist.push(1);
            this.starlist.push(2);
          }
          //console.log("1:",result.data[0])
        }).catch(err => console.log(err))
      },
      getImgs() {
        this.$axios({
          url: "getImgs",
          method: "get",
          params: {
            id: this.id
          }
        }).then((result) => {
          this.imglist = result.data;
          //console.log("1:",result.data);
        }).catch(err => console.log(err))
      },
      getPath(path) {
        return path ? require('@/assets/images/' + path) : '';
      },
      getComments() {
        this.$axios({
          url: "getComments",
          method: "get",
          params: {
            id: this.id
          }
        }).then((result) => {
          this.listitem = result.data;
          // var listitem=JSON.parse(localStorage.getItem("cmts")||"[]");
          // this.listitem=listitem;
          //console.log(listitem);
          //console.log("2:",result.data);
        }).catch(err => console.log(err))

      },
      pushid() {
        this.$router.push({
          name: 'comment',
          params: {
            id: this.id
          }
        })
        window.location.href = 'http://localhost:8088/#/comment';

      }

    },

    created() {
      //console.log(this.id);
      this.getDetails();
      this.getImgs();
      this.getComments();
      var listitem=this.$route.query.listitem;
      if(listitem!=undefined){
        this.listitem=JSON.parse(this.$route.query.listitem);
        //console.log("2:", this.$route.query.listitem);
      }

    },

    updated() {

      for (var k in this.listitem) {
        if (this.listitem[k].score == 5) {
          document.getElementById(k + '0').style.color = 'orangered';
          document.getElementById(k + '1').style.color = 'orangered';
          document.getElementById(k + '2').style.color = 'orangered';
          document.getElementById(k + '3').style.color = 'orangered';
          document.getElementById(k + '4').style.color = 'orangered';
        } else if (this.listitem[k].score == 4) {
          document.getElementById(k + '0').style.color = 'orangered';
          document.getElementById(k + '1').style.color = 'orangered';
          document.getElementById(k + '2').style.color = 'orangered';
          document.getElementById(k + '3').style.color = 'orangered';
        } else if (this.listitem[k].score == 3) {
          document.getElementById(k + '0').style.color = 'orangered';
          document.getElementById(k + '1').style.color = 'orangered';
          document.getElementById(k + '2').style.color = 'orangered';
        } else if (this.listitem[k].score == 2) {
          document.getElementById(k + '0').style.color = 'orangered';
          document.getElementById(k + '1').style.color = 'orangered';
        } else if (this.listitem[k].score == 1) {
          document.getElementById(k + '0').style.color = 'orangered';
        }
      }
    },

    components: {
      ctabber
    }

  }
</script>

<style>
  .comments{
    margin-top:-1rem;
    width:100%;
    height:28rem;
    background-image:linear-gradient(to left,#c0ead2,#e4eefa,#f0f9fe);

  }
  .comment-information {
    width: 100%;
    height: 25rem;
    border-radius: 2rem;
    background-color: white;
    /* border-style:solid; */
    position: absolute;
    top: 8rem;
    padding-left: 5%;
  }

  .comment-score {
    /* width:8rem; */
    padding: 0 0.3125rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    border-radius: 0.3125rem;
    font-size: 0.0625rem;
    color: white;
    background-color: #fe601f;
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 1.1rem;
  }

  .comment-rank {
    background-image: linear-gradient(to left, #c0ead2, #e4eefa, #f0f9fe);
  }

  .comment-imgdiv {
    width: 100%;
    height: 9rem;
    /* border-style:solid; */
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
  }

  .comment-imgdiv::-webkit-scrollbar {
    display: none
  }

  .comment-imgdiv img {
    width: 11rem;
    height: 100%;
    border-radius: 0.8rem;
    margin-right: 0.625rem;
  }

  .comment-comment {
    width: 100%;
    height: 21rem;
    background-color: white;
    /* border-style:solid; */
    position: absolute;
    top: 33rem;
    padding-left: 5%;
    position: relative;
  }

  .comment-comment-star {
    position: absolute;
    top: 3rem;
    left: 25%;
    color: #dcb2b3;
  }

  .comment-btn {
    color: white;
    background-color: #fe6843;
    width: 20.5rem;
    height: 3.125rem;
    line-height: 3.125rem;
    text-align: center;
    border-radius: 1.3rem;
    position: absolute;
    top: 8.5rem;
    left: 21%;
  }

  .comment-reviews {
    width: 100%;
    /* height: 48rem; */
    border-style: solid;
    position: absolute;
    top: 53.3rem;
    padding-left: 5%;

  }
</style>
