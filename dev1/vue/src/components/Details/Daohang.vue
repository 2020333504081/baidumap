<template>
  <baidu-map class="dmap" :center="{lng: 120.359631, lat: 30.31952}" :zoom="13">
    <bm-driving :start="start" :end="end" @searchcomplete="handleSearchComplete" :panel="false" @stop="reset"
      :autoViewport="true"></bm-driving>
    <bml-lushu :path="path" :icon="icon" :play="play" :rotation="true">
    </bml-lushu>

    <div style="width:92%;margin-left:4%;height:9rem;background-color:#1b2433;margin-top:-58rem;position:relative;z-index:100;border-top-left-radius: 1rem;border-top-right-radius: 1rem;color:white;">
      <i style="font-size:5rem;" class="iconfont icon-jiantou_zuoshang"></i>
      <div style="font-size:2rem;margin-top:-5rem;margin-left:5rem;">68米</div>
      <div style="margin-top:-2rem;margin-left:10rem;color:lightgrey;">进入</div>
      <div style="margin-top:-0.5rem;margin-left:5rem;">内部路</div>
    </div>
    <div style="width:92%;margin-left:4%;height:4rem;background-color:#232c3d;position:relative;z-index:100;border-bottom-left-radius: 1rem;border-bottom-right-radius: 1rem;color:white;padding-left:1rem;">
      随后<i style="font-weight:bold;margin-right:1rem;" class="iconfont icon-jiantou-13"></i>进入內部路
    </div>

    <ul style="padding-left:1rem;background-color:white;opacity:0.8;width:6rem;height:24.5rem;margin-top:17rem;border-radius:1rem;margin-left:1rem;list-style: none;">
      <li style="padding-bottom:1rem;width:4rem;margin-top:1rem;text-align:center;border-bottom:1px solid grey;"><i
          class="iconfont icon-laba"></i>
        <div>播报</div>
      </li>
      <li style="padding-bottom:1rem;width:4rem;margin-top:1rem;text-align:center;border-bottom:1px solid grey;"><i
          class="iconfont icon-gantan"></i>
        <div>上报</div>
      </li>
      <li style="padding-bottom:1rem;width:4rem;margin-top:1rem;text-align:center;border-bottom:1px solid grey;"><i
          class="iconfont icon-jiazai_shuaxin"></i>
        <div>刷新</div>
      </li>
      <li style="padding-bottom:1rem;width:4rem;margin-top:1rem;text-align:center;"><i class="iconfont icon-route-fill"></i>
        <div>全揽</div>
      </li>
    </ul>

    <div class="caozuo">
      <span class="gengduo"><i class="iconfont icon-xiangshang"></i>
        <div>更多</div>
      </span>
      <span class="jixu">继续导航</span>
      <span @click="goback()" class="tuichu"><i class="iconfont icon-tuichu"></i>
        <div>退出</div>
      </span>
    </div>
  </baidu-map>
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

      }
    },


    methods: {
      reset() {
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
      goback() {
        this.$router.go(-1);
      }

    }
  }
</script>
<style scoped>
  .dmap {
    height: 60rem;
    width: 100%;
  }

  .caozuo {
    background-color: white;
    margin-top: 3.4rem;
    height: 7rem;
    padding-left: 1rem;
    padding-top: 1.5rem;
  }

  .gengduo {
    display: inline-block;
    width: 5rem;
    text-align: center;
    border-right: 1px solid lightgrey;

  }

  .jixu {
    display: inline-block;
    width: 24.8rem;
    text-align: center;
    font-size: 3rem;
    color: #3278fc;
    transform: translateY(-0.6rem);
  }

  .tuichu {
    display: inline-block;
    text-align: center;
    width: 5rem;
    border-left: 1px solid lightgrey;
  }
</style>
