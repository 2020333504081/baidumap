<template>

    <div class="cbottom">
      <ul class="cnavul">
        <li><i style="font-size:1.25rem;" class="iconfont icon-fenxiang"></i><p>分享</p></li>
        <li id="shoucang" @click="collect()"><i class="iconfont icon-shoucang"></i><p>收藏</p></li>
        <li><i class="iconfont icon-yangshi_icon_tongyong_compass"></i><p>周边</p></li>
        <li><i class="iconfont icon-taxi-fill"></i><p>打车</p></li>
      </ul>
      <div @click="ditu"  class="btn-daohang">导航</div>
      <router-link to="/toJingdian" tag="div" class="btn-daozhequ">到这去</router-link>
    </div>

</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    collect(){
      var id=this.$route.params.id;
      if(document.getElementById("shoucang").style.color=='orange'){
        document.getElementById("shoucang").style.color='grey';
              this.$store.dispatch('collect/del',id);
              this.$axios({
                url: "http://localhost:8080/web22/deleteCollections",
                method: "get",
                params: {
                    id:id
                }
              }).then((result) => {
              }).catch(err => console.log(err))


      }else{
        var date=new Date();
        var year=date.getFullYear();
        var month=date.getMonth();
        var day=date.getDate();
        var currentdate=year+"."+month+"."+day;
        var id=this.$route.params.id;
          this.$axios({
            url: "http://localhost:8080/web22/getCollections",
            method: "get",
            params: {
              id: id,
              date:currentdate
            }
          }).then((result) => {
            this.$store.dispatch('collect/add',result.data[0]);
            document.getElementById("shoucang").style.color='orange';
            //console.log("1:",result.data[0]);

              this.$axios({
                url: "http://localhost:8080/web22/WriteCollections",
                method: "get",
                params: {
                  id: id,
                  date:currentdate,
                  name:result.data[0].name,
                  address:result.data[0].address,
                  src:result.data[0].src,
                  classes:result.data[0].classes
                }
              }).then((result) => {

              }).catch(err => console.log(err))


          }).catch(err => console.log(err))

      }

    },
    ditu(){
      //window.open('..')
      this.$router.push('/daohang');
    }
  },
  mounted(){
    var list=[];
    list=this.$store.state.collect.items;
    //console.log(list);
    var id=this.$route.params.id;
    this.$axios({
        url: "http://localhost:8080/web22/fromCollections",
        method: "get",
        params: {

        }
      }).then((result) => {

    list=result.data;
    var result=list.find(item=>item.pid==id)
    if(result){
      document.getElementById("shoucang").style.color="orange";
    }
      }).catch(err => console.log(err))
    // var list=[];
    // list=this.$store.state.collect.items;
    // console.log(list);
    // var id=this.$route.params.id;
    // const result=list.find(item=>item.pid==id)
    // if(result){
    //   document.getElementById("shoucang").style.color="orange";
    // }
  }


}
</script>

<style>
.cbottom{
  padding:0.8rem 0 0rem 0.8rem;
  margin:0;
  position: fixed !important;
  bottom:0;
  width:100%;
  background-color:white;
  -webkit-box-shadow: darkgrey 5px 10px 20px 5px;
  z-index:1000;

}
.cnavul {
  list-style:none;
  display:inline-block;
}
.cnavul li{
  display:inline-block;
  font-size:1.3rem;
  font-family: "黑体";
  text-align:center;
  margin-right:0.8rem;
  color:grey;
}
.cnavul li i{
  display:inline-block;
}

.btn-daohang{
  display:inline-block;
  width:9rem;
  height:4.2rem;
  border:0.0625rem solid #0982d9;
  border-radius:6.25rem;
  text-align:center;
  line-height:4.2rem;
  position:absolute;
  left:16rem;
  top:0.9rem;
}
.btn-daozhequ{
  display:inline-block;
  width:10rem;
  height:4.2rem;
  background-color:#0982d9;
  color:white;
  border-radius:6.25rem;
  text-align:center;
  line-height:4.2rem;
  position:absolute;
  left:26rem;
  top:0.9rem;
}
</style>
