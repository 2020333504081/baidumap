<template>
	<div>
		<baidu-map class="map" :center="{lng: 120.359631, lat: 30.31952}" :zoom="13">
      <div @click="goback()" style="width:5rem;height:5rem;border-radius:1rem;padding-top:1.3rem;background-color: white;margin-left:1rem;margin-top:-38rem;position:relative;z-index:100;text-align:center;"><i style="font-size:2rem;" class="glyphicon glyphicon-arrow-left"></i></div>
			<div style="width:5rem;height:7rem;border-radius:1rem;padding-top:1.5rem;background-color: white;margin-left:30rem;margin-top:-5rem;position:relative;z-index:100;text-align:center;"><i style="font-size:2rem;" class="glyphicon glyphicon-user"></i><br/><font style="font-size:1rem;">个人中心</font></div>
      <bm-driving :start="start" :end="end" @searchcomplete="handleSearchComplete" :panel="false" @stop="reset"
				:autoViewport="true"></bm-driving>
			<bml-lushu :path="path" :icon="icon" :play="play" :rotation="true">
			</bml-lushu>
		</baidu-map>
	<!-- 可以自己输入起点终点进行路线规划	<input ref="start" placeholder="请输入起点" value="浙江理工大学" />
		<input ref="end" placeholder="请输入终点" value="杭州东湖公园" />
		<button type="button" @click="confirm">确认</button> -->
    <!-- 打车 -->
    <div class="back">
      <div style="font-size:1.8rem;color:#fdda9a">领新人专属优惠更划算 ></div>
      <div style="font-size:1.5rem;color:#fdda9a">一口价形成如产生附加费需另行支付></div>
      <img style="width:10.5rem;height:9rem;margin-left:26rem;margin-top:-8.5rem;" src="@/assets/images/hongbao.png"/>
      <!-- 预估价筛选 -->
      <div class="yugu">
        <span style="display:inline-block;font-size:1.5rem;font-weight:bold;margin-right:17.7rem;margin-bottom:1.5rem;">预估价筛选</span><span style="color:grey;"><input type="checkbox"><span style="display:inline-block;margin-left:0.3rem;transform:translateY(-0.2rem);">接受出租车</span></span>
        <div style="width:49%;height:1rem;background-image:linear-gradient(to right,#94b3f3,#4386f9);"></div>
        <div style="width:48%;height:1rem;background-color:#ecebf0;margin-top:-1rem;margin-left:49%"></div>
        <div style="margin-top:-2rem;background-color:white;width:5rem;height:3rem;border:1px solid #8ba6c9;border-radius: 1.5rem;text-align:center;line-height:3rem;">￥36</div>
        <div style="margin-left:14.5rem;margin-top:-3rem;background-color:white;width:5rem;height:3rem;border:1px solid #8ba6c9;border-radius: 1.5rem;text-align:center;line-height:3rem;">￥53</div>
        <div style="margin-left:29rem;margin-top:-3rem;background-color:white;width:5rem;height:3rem;border:1px solid #8ba6c9;border-radius: 1.5rem;text-align:center;line-height:3rem;">￥67</div>
        <div style="color:#4386f9;font-size:1rem;margin-left:14rem;">经济性最高价</div>
        <div style="color:grey;">已选<font style="color:#4386f9;">19个</font>车行，预估应答率为<font style="color:green;">90%</font></div>
        <div style="margin-left:27rem;margin-top:-2rem;color:grey;"><i class="glyphicon glyphicon-hourglass"></i>标签筛选</div>
      </div>
      <!-- 车型 -->
      <div class="chexing">
        <span style="display:inline-block;font-size:1.5rem;font-weight:bold;margin-right:24rem;margin-bottom:1.5rem;">经济型</span>
        <span><span>全选</span><span style="margin-left:1rem;"><input id="checkall" @click="isAll()" type="checkbox"></span></span>
        <ul style="list-style:none">
          <li style="margin-bottom:4rem;" v-for="(item,index) in cars" :key="item.id">
            <div style="width:3rem;height:3rem;border-radius: 1.5rem;"><img style="width:100%;height:100%;border-radius: 1.5rem;" :src="require('@/assets/images/' + item.logo)"></div>
            <div style="margin-top:-3.3rem;font-size:1.5rem;margin-left:4rem;">{{item.name}}</div>
            <div style="font-size:1rem;margin-left:4rem;color:grey;">{{item.tag}}</div>
            <div style="font-size:1rem;margin-top:-5rem;margin-left:22rem;"><i style="margin-right:0.5rem;" class="iconfont icon-gengduo"></i>预估<font style="font-size:2rem;font-weight:bold;">{{item.price}}</font>元</div>
            <div style="color:grey;font-size:1rem;margin-left:25rem;">已优惠<font style="color:red;">{{item.discount}}</font>元</div>
            <div style="margin-left:32.6rem;margin-top:-3.5rem;"><input @click="select(item.id)" :id="'box'+item.id" type="checkbox"></div>
          </li>
        </ul>
      </div>
      <!-- 底部 -->
      <div class="hujiao">
        <div style="font-size:2rem;">预估<font style="font-size:2.5rem;font-weight: bold;">{{price1}}</font>元起</div>
        <div>已选<font style="color:blue">{{num}}</font>个车型，最高优惠<font style="color:red;">{{dis}}</font>元</div>
        <div class="hujiaobtn">立即呼叫</div>
      </div>
     </div>
	</div>
</template>

<script>
	import {
		BmlLushu
	} from 'vue-baidu-map'
	export default {
		computed: {},
		components: {
			BmlLushu
		},
		data() {
			return {
				play: false,
				path: [],
				icon: {
					url: 'http://api.map.baidu.com/library/LuShu/1.2/examples/car.png',
					size: {
						width: 52,
						height: 26
					},
					opts: {
						anchor: {
							width: 27,
							height: 13
						}
					}
				},
				start: '浙江理工大学',
				end: '杭州东湖公园',
        cars:[],
        price1:'',
        num:0,
        dis:0
			}
		},
		methods: {
			 reset () {
			      this.play = false
			    },
			handleSearchComplete(res) {
				this.path = res.getPlan(0).getRoute(0).getPath()
			},
			confirm() {
				this.start = this.$refs.start.value
				this.end = this.$refs.end.value
				this.play = true
			},
      goback(){
        this.$router.go(-1);
      },
      getCars(){
        this.$axios({
          url:'/getCars',
          methods:'get'
        }).then((result)=>{
          this.cars=result.data;
          // 取数据的时候就是按照从小到大取的,一次一开始的时候第一个就是最小的,最后一个就是最大的
          var low=this.cars[0].price;
          var high=this.cars[this.cars.length-1].price;
            this.price1=low+'-'+high;
            var dis=result.data[0].discount;
            this.cars.forEach((item, index, arr) => {
              //字符串转化为数字可以用乘1或减0的方法
              if(item.discount*1>dis*1) dis=item.discount;
            })
            this.dis=dis;
          console.log(this.cars);
        }).catch(err=>console.log(err))
      },
      isAll() {

        if ($("#checkall").is(":checked") == true) {
          this.dis=this.cars[0].discount;
          var low=this.cars[0].price;
          var high=this.cars[this.cars.length-1].price;
          this.price1=low+'-'+high;
          this.cars.forEach((item, index, arr) => {
            document.getElementById("box" + item.id).checked = true;
            this.num=this.cars.length;
            if(item.discount*1>this.dis*1)this.dis=item.discount
          })
        } else {
          this.price=0;
          var low=this.cars[0].price;
          var high=this.cars[this.cars.length-1].price;
          this.price1=low+'-'+high;
          this.num=0;
          this.dis=0;
          this.cars.forEach((item, index, arr) => {
            document.getElementById("box" + item.id).checked = false;
          })

        }

      },
      select(id){
         if ($("#box"+id).is(":checked") == true){
           this.num=this.num+1;
         }else{
           this.num--;
         }
      }
		},
    created(){
      this.getCars();

    },
    mounted(){


    }
	}
</script>

<style scoped>
	.map {
		height: 400px;
		width: 100%;
	}
  .back{
    width:100%;
    height:auto;
    border-top-left-radius:1rem;
    border-top-right-radius: 1rem;
    background-image:linear-gradient(to bottom,#fd4046,#ff969a ,#f3f4f8);
    padding-left:1rem;
    padding-top:1.5rem;
    padding-bottom: 7rem;
  }
  .back .yugu{
    width:97.5%;
    height:10.5rem;
    border-radius: 1rem;
    background-color:white;
    padding-top:0.5rem;
    padding-left:0.8rem;
  }
  .chexing{
    width:97.5%;
    height:45rem;
    border-radius: 1rem;
    background-color:white;
    padding-top:0.5rem;
    padding-left:0.8rem;
    margin-top:1rem;

  }
  .hujiao{
    width:100%;
    height:7rem;
    position:fixed;
    bottom:0;
    background-color:white;
    z-index:100;
    margin-left:-1rem;
    padding-left:1rem;
    padding-top:0.5rem;
    -webkit-box-shadow: lightgrey 0px 7px 10px 10px;
  }
  .hujiaobtn{
    width:14rem;
    height:5rem;
    border-radius: 2.5rem;
    background-image:linear-gradient(to right, #2f79fe, #46aaff);
    color:white;
    text-align: center;
    line-height: 5rem;
    margin-top:-5rem;
    margin-left:21.5rem;
  }
</style>
