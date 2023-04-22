<template>
  <div class="wode">
    <!-- 上面图标头像部分 -->
    <i style="font-size:2.5rem;position:absolute;top:0.5rem;right:6rem;" class="iconfont icon-xiaoxi"></i>
     <i @click="shezhi()" style="font-size:2.8rem;position:absolute;top:0.15rem;right:1.5rem;" class="iconfont icon-shezhi"></i>

    <router-link to="/gaiming" tag="div" class="touxiang"><i style="font-size:3rem;color:white" class="glyphicon glyphicon-user"></i></router-link>
    <router-link to="/gaiming" class="username" tag="h4" v-model="name">{{name}}</router-link>
    <div class="level1"><i style="margin-right:0.3rem;" class="iconfont icon-huangguan"></i>Lv.1</div>
    <div class="level2"><i style="margin-right:0.3rem;" class="iconfont icon-bixin"></i>实习共建官</div>
    <div class="qiandao"><i style="margin-right:1rem;font-size:1.9rem;" class="iconfont icon-qiandao"></i>签到</div>

    <!-- 第一行 -->
    <div class="first-line">
      <ul>
        <router-link v-for="(item,index) in list1" :key="index" :to="item.url" tag="li" style="text-align:center;">
          <span :style="{background:item.bcolor,color:item.color}">
            <i :class="item.icon"></i>
          </span>
          <div style="font-size:1.5rem;color:black;margin-top:0.5rem;display:inline-block;width:100%;">{{item.name}}</div>
        </router-link>
      </ul>
    </div>

    <!-- 第二行 -->
    <div class="second-line">
      <ul>
        <router-link v-for="(item,index) in list2" :key="index" :to="item.url" tag="li" style="text-align:center;">
            <i :style="{color:item.color}" :class="item.icon"></i>
          <div style="font-size:1.5rem;color:black;margin-top:0.5rem;display:inline-block;width:100%;">{{item.name}}</div>
        </router-link>
      </ul>
    </div>

    <!-- 答题助力 -->
    <div class="answer">
      <div style="position:absolute;top:3rem;left:2rem;background-color:#5a94f5;color:white;width:5rem;height:3rem;font-size: 2rem;text-align: center; line-height: 3rem;border-top-left-radius: 0.8rem;border-bottom-left-radius: 0.8rem;">全民</div>
      <div style="position:absolute;top:3rem;left:7.2rem;background-color:#fe3a4e;color:white;width:5rem;height:3rem;font-size: 2rem;text-align: center; line-height: 3rem;border-top-right-radius: 0.8rem;border-bottom-right-radius: 0.8rem;">共建</div>
      <div style="position:absolute;top:3.7rem;left:13rem;color:#858585;font-size: 1.6rem;">参与答题助力正确出行</div>
      <div style="position:absolute;right:0rem;top:0rem;background-color:#6e93fe;width:9rem;height:2.5rem;line-height: 2.5rem;text-align: center;border-bottom-left-radius: 1.2rem;color:white;"><i style="margin-right:0.6rem;font-size: 1rem;" class="iconfont icon-fenxiang"></i>邀好友</div>
      <ul>
        <li><i style="color:red;margin-right:0.3125rem;" class="iconfont icon-aixin"></i><span style="font-size:3rem;">{{this.$store.state.collect.contribution}}</span><div>已贡献></div></li>
        <li style="border-right:1px solid darkgrey;height:2rem;transform: translateY(15px);"></li>
        <li><i style="color:orange;margin-right:0.3125rem;" class="iconfont icon-jinbi"></i><span  style="font-size:3rem;">{{this.$store.state.collect.gold}}</span><div>获得金币></div></li>
        <li style="border-right:1px solid darkgrey;height:2rem;transform: translateY(15px);"></li>
        <li><i style="color:red;margin-right:0.3125rem;" class="iconfont icon-hongbao"></i><span  style="font-size:3rem;">0</span><div>获得代金券></div></li>
      </ul>
      <div class="diaoyan">
        <div v-for="(item,index) in list3" :key="index" class="content">
          <div style="width:32rem;margin-bottom:1rem;border-bottom:1px solid darkgrey;margin-right:7rem;"><i style="margin-right:0.3125rem;" class="iconfont icon-dingdan"></i><span style="margin-right:21.5rem;">共建小调研</span><i style="color:grey;" @click="shift(item.id)" class="glyphicon glyphicon-remove"></i></div>

          <span ><img style="width:8rem;height:8rem;border-radius: 0.625rem;"src="@/assets/images/diaoyan.jpeg"/></span><span style="display:inline-block;font-size:1.5rem;color:#000000;transform: translate(5px,-25px);">{{item.question}}</span>
          <span style="display:inline-block;transform: translate(85px,-55px);"><i style="color:orange;" class="iconfont icon-jinbi"></i>答题领取<font style="color:red;">{{item.number}}</font>金币</span>
          <div @click="help(item.id,item.number)" style="transform: translate(85px,-45px);width:11rem;height:3rem;text-align:center;line-height:3rem;border-radius:1.5rem;background-color:#f4f7ff;color:#45779c;">{{item.answer1}}</div><div @click="help(item.id,item.number)" style="transform: translate(210px,-75px);width:11rem;height:3rem;text-align:center;line-height:3rem;border-radius:1.5rem;background-color:#f4f7ff;color:#45779c;">{{item.answer2}}</div>
        </div>
      </div>
      <div style="margin-top:1rem;margin-left:35%;">查看全部问题></div>
    </div>

  </div>
</template>

<script>
  export default{
    data(){
      return{
        list1:[
          {name:'收藏',bcolor:'#fea211',color:'white',icon:'iconfont icon-shoucang',shadow:'#fea211',url:'/collections'},
          {name:'足迹',bcolor:'#627fff',color:'white',icon:'iconfont icon-jiaoyinzujifangke',shadow:'#fea211',url:''},
          {name:'离线地图',bcolor:'#2db5ff',color:'white',icon:'iconfont icon-yunxiazai',shadow:'#fea211',url:''},
          {name:'常用地址',bcolor:'#2ab2fe',color:'white',icon:'iconfont icon-shoucang1',shadow:'#fea211',url:''},
          {name:'更多',bcolor:'#f1efe4',color:'#ff5b64',icon:'iconfont icon-gengduo',shadow:'#fea211',url:''},

        ],
        list2:[
          {name:'全部订单',color:'#4daefb',icon:'iconfont icon-dingdan',shadow:'#fea211',url:'/dingdan'},
          {name:'进行中',color:'#1dc9a1',icon:'iconfont icon-jinhangzhong',shadow:'#fea211',url:''},
          {name:'已完成',color:'#1dc9a1',icon:'iconfont icon-yiwancheng',shadow:'#fea211',url:''},
          {name:'开发票',color:'#ff7e47',icon:'iconfont icon-kaifapiaoxitong',shadow:'#fea211',url:''}
        ],
        list3:[],
        name:'1234567890'
      }
    },
    mounted(){
      this.list3.push({id:'1',question:'你知道人人都能贡献数据吗？',number:'30',answer1:'知道',answer2:'不知道'});
      this.list3.push({id:'2',question:'你知道全民共建台湾全景地图吗？',number:'50',answer1:'知道',answer2:'不知道'});
      this.list3.push({id:'3',question:'你愿意贡献数据帮助他人吗？',number:'50',answer1:'愿意',answer2:'不愿意'});
      this.list3.push({id:'4',question:'你知道获得的金币可以体现吗？',number:'50',answer1:'知道',answer2:'不知道'});
      this.list3.push({id:'5',question:'你愿意使用地图时顺手反馈？',number:'50',answer1:'愿意',answer2:'不愿意'});
      this.$axios({
        url: "http://localhost:8080/web22/fromCollections",
        method: "get",
        params: {

        }
      }).then((result) => {

        this.$store.dispatch('collect/loadData',result.data);

      }).catch(err => console.log(err))
      document.getElementById("wode").style.color='blue';
      this.name=this.$store.state.classify.username;
    },
    methods:{
      shift(id){
        this.list3=[];
        if(id=='1'){
          this.list3.push({id:'2',question:'你知道全民共建台湾全景地图吗？',number:'50',answer1:'知道',answer2:'不知道'});
  }else if(id=='2'){
          this.list3.push({id:'3',question:'你愿意贡献数据帮助他人吗？',number:'50',answer1:'愿意',answer2:'不愿意'});
    }else if(id=='3'){
          this.list3.push({id:'4',question:'你知道获得的金币可以体现吗？',number:'50',answer1:'知道',answer2:'不知道'});
       }else if(id=='4'){
          this.list3.push({id:'5',question:'你愿意使用地图时顺手反馈？',number:'50',answer1:'愿意',answer2:'不愿意'});
        }else if(id=='5'){
          this.list3.push({id:'1',question:'你知道人人都能贡献数据吗？',number:'30',answer1:'知道',answer2:'不知道'});
            }
      },
      help(id,number){
        this.$store.state.collect.contribution=this.$store.state.collect.contribution+1;
        this.$store.state.collect.gold=parseInt(this.$store.state.collect.gold)+parseInt(number);
        this.list3=[];
        if(id=='1'){
          this.list3.push({id:'2',question:'你知道全民共建台湾全景地图吗？',number:'50',answer1:'知道',answer2:'不知道'});
        }else if(id=='2'){

        this.list3.push({id:'3',question:'你愿意贡献数据帮助他人吗？',number:'50',answer1:'愿意',answer2:'不愿意'});
        }else if(id=='3'){
          this.list3.push({id:'4',question:'你知道获得的金币可以体现吗？',number:'50',answer1:'知道',answer2:'不知道'});
         }else if(id=='4'){
          this.list3.push({id:'5',question:'你愿意使用地图时顺手反馈？',number:'50',answer1:'愿意',answer2:'不愿意'});
           }else if(id=='5'){
          this.list3.push({id:'1',question:'你知道人人都能贡献数据吗？',number:'30',answer1:'知道',answer2:'不知道'});
          }

      },
      shezhi(){
        this.$router.push('/shezhi');
      }
    }
  }
</script>

<style>
  .wode{
    width:100%;
    height:75rem;
    /* border:1px solid black; */
    background-image:linear-gradient(to bottom,#b9e7fe,#ddeefe,#f6f9fe);
  }

  .touxiang{
    width:5rem;
    height:5rem;
    border-radius:2.5rem;
    border:1px solid white;
    background-color:#c1d4fe;
    display:flex;
    justify-content: center;
    align-items: center;
    position:absolute;
    top:4rem;
    left:1.5rem;
  }
  .username{
    position:absolute;
    top:3.5rem;
    left:7rem;
  }
  .level1{
    background-color:#6fa4ff;
    width:5rem;
    height:2rem;
    line-height: 1.9rem;
    text-align: center;
    color:white;
    border-radius:1rem;
    position:absolute;
    top:6.7rem;
    left:7rem;
  }
  .level2{
    width:10rem;
    height:2rem;
    line-height: 1.8rem;
    text-align: center;
    color:#ec903b;
    border-radius:1rem;
    background-color:#fff3d8;
    position:absolute;
    top:6.7rem;
    left:13rem;
  }
  .qiandao{
    width:10rem;
    height:3rem;
    line-height: 3rem;
    text-align: center;
    color:white;
    border-radius:2rem;
    background-color:#fe5153;
    position:absolute;
    top:5.5rem;
    right:1.5rem;
    font-size:1.8rem;
  }
  .first-line{
    width:100%;
    height:10rem;
    background-color:white;
    position:absolute;
    top:11rem;
  }
  .first-line ul{
    display: flex;
    flex-wrap:wrap;
    list-style:none;
    padding:0;
    margin-top:1rem;
  }
  .first-line ul li{
    width:20%;
    margin:1rem 0;
  }
  .first-line ul li span{
    display:inline-block;
    width:4rem;
    height:4rem;
    line-height: 4rem;
    border-radius: 1.6rem;
  }
  .first-line ul li span i{
    font-size:2.5rem;
  }
  .second-line{
      width:100%;
      height:10rem;
      background-color:white;
      position:absolute;
      top:21.5rem;
    }
    .second-line ul{
      display: flex;
      justify-content : space-around;
      list-style:none;
      padding:0;
      margin-top:1rem;
    }
    .second-line ul li{
      width:25%;
      margin:1rem 0;
    }
    .second-line ul li i{
      font-size:2.5rem;
    }
    .answer{
      width:100%;
      height:35rem;
      position:absolute;
      top:32.1rem;
      background-color:white;
      overflow:hidden;
    }
    .answer ul{
      display: flex;
      justify-content : space-around;
      list-style:none;
      padding:0;
      margin-top:6rem;
    }
    .answer ul li{
      margin:1rem 0;

    }
    .answer ul li i{
      font-size:3rem;
    }
    .diaoyan{
      display:inline-block;
      margin-left:4%;
      width:92%;
      height:15rem;
      display: flex;
      flex-wrap: nowrap;
      overflow:scroll;
      position:relative;
      -webkit-box-shadow: lightgrey 0px 7px 13px 0px;

    }


    .diaoyan::-webkit-scrollbar {
      display: none
    }
    .diaoyan .content{

      width:100%;
      height:100%;
      padding-left:1.5rem;
      padding-right:1.5rem;

    }
</style>
