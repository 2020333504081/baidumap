
  <template>
       <div class="nav">
         <img class="img1" style="width:100% height:100%" src="@/assets/images/1.jpeg"/>
         <img class="img2" style="width:100% height:100%" src="@/assets/images/2.jpeg"/>
         <img class="img3" style="width:100% height:100%" src="@/assets/images/3.jpeg"/>
         <img class="img1" style="width:100% height:100%" src="@/assets/images/1.jpeg"/>
        </div>
  </template>


</template>
<script>
  export default {
    
    },
    methods:{
      startPlay(){
        var x=1;
        var playTimer=setInterval(()=>{
          x++;
          if(x==4) x=1;
          document.getElementById("img"+x).style.left=;
        });
      }
    },
    mounted() {
    	//页面挂在完毕自动开启轮播
    	this.startPlay()
    },
    destroyed(){
      clearInterval(this.playTimer);
    }
  }
</script>
<style scoped>

  .nav{
    width: 720px;
    height: 405px;
    margin:20px auto;
    overflow: hidden;
    position: relative;
  }
 img{
   position:relative;
 }
</style>
