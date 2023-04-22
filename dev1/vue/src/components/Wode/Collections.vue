<template>

  <div style="padding-top:1rem;padding-left:1rem;">
    <i @click="goback()" class="glyphicon glyphicon-chevron-left" style="font-size:2rem;"></i>
    <span style="font-size:2rem;position:absolute;left:43%;">收藏夹</span>
    <div class="classification">
      <span @click="click1()" id="didian" style="font-size:2rem;padding-bottom:0.625rem;">地点</span>
      <span @click="click2()" id="fenzu" style="font-size:2rem;padding-bottom:0.625rem;">分组</span>
      <span @click="click3()" id="luxian" style="font-size:2rem;padding-bottom:0.625rem;">路线</span>
    </div>

    <div class="select">
      <Select></Select>
      <div style="width:10px;height:18px;border-right:1px solid darkgrey;position:absolute;top:-2.6rem;left:31rem;"></div>
      <div id="guanli" @click="manage()" style="position:absolute;top:-2.6rem;left:34.1rem;">管理</div>
    </div>

    <ul class="collectlist">
      <li :id="item.pid" v-for="(item,index) in dlist" :key="dlist.id" @touchstart="gtouchstart(item.pid)" @touchmove="gtouchmove()"
        @touchend="showDeleteButton(item.pid)">
        <input type="checkbox" :id="'c'+item.pid" style="margin-left:-35px;" />
        <span class="lispan">
          <img :src="require('@/assets/images/' + item.src)">
          <span class="name">{{item.name}}</span>
          <span class="address1">{{item.address}}</span>
          <span class="date1">{{item.date}}</span>
        </span>
      </li>

    </ul>
    <div class="action" v-show="flag==1" v-model="flag">
      <input id="all" type="checkbox" @click="isAll()" />
      <span style="display:inline-block;transform:translateY(-3px);font-size:20px;">全选</span>
      <span @click="deletec()" style="display:inline-block;transform:translate(120px,-3px);font-size:20px;">删除</span>
      <span style="display:inline-block;transform:translate(130px,-3px);font-size:20px;">添加到分组</span>
    </div>

  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'
  import Select from '@/components/Wode/Select'
  export default {
    data() {
      return {
        x: 0,
        dlist: [],
        flag: 0,
        flag1:0,
        flag2:0

      }
    },
    methods: {
      goback() {
        this.$router.go(-1);
      },
      click1() {
        document.getElementById("didian").style.borderBottom = '1px solid black';
        document.getElementById("didian").style.borderWidth = '0.3rem';
        document.getElementById("fenzu").style.borderStyle = 'none';
        document.getElementById("luxian").style.borderStyle = 'none';
      },
      click2() {
        document.getElementById("fenzu").style.borderBottom = '1px solid black';
        document.getElementById("fenzu").style.borderWidth = '0.3rem';
        document.getElementById("luxian").style.borderStyle = 'none';
        document.getElementById("didian").style.borderStyle = 'none';
      },
      click3() {
        document.getElementById("luxian").style.borderBottom = '1px solid black';
        document.getElementById("luxian").style.borderWidth = '0.3rem';
        document.getElementById("fenzu").style.borderStyle = 'none';
        document.getElementById("didian").style.borderStyle = 'none';
      },
      manage() {
        if (document.getElementById("guanli").innerHTML == "管理") {
          // for(var i=0;i<this.dlist.length;i++){
          //   //console.log(i);
          //   document.getElementById(i).style.marginLeft="50px";
          // }
          this.dlist.forEach((item, index, arr) => {
            document.getElementById(item.pid).style.marginLeft = "50px";
          })
          document.getElementById("guanli").innerHTML = "完成";
          this.flag = 1;
        } else {
          //不能用for(i=0;i<this.dlist.length;i++)因为数组的长度和控件的id不是对应的，有可能只有一个，但他的id为2
          this.dlist.forEach((item, index, arr) => {
            document.getElementById(item.pid).style.marginLeft = "1%";
          })
          document.getElementById("guanli").innerHTML = "管理";
          this.flag = 0;
        }
        this.dlist.forEach((item, index, arr) => {
          document.getElementById(item.pid).checked = false;
        })
        document.getElementById("all").checked = false;


      },
      isAll() {
        if ($("#all").is(":checked") == true) {
          this.dlist.forEach((item, index, arr) => {
            document.getElementById("c" + item.pid).checked = true;
          })
        } else {
          this.dlist.forEach((item, index, arr) => {
            document.getElementById("c" + item.pid).checked = false;
          })
        }
      },
      deletec() {
        //console.log("del");
        this.dlist.forEach((item, index, arr) => {
          if ($("#c" + item.pid).is(":checked") == true) {
            //console.log(item.pid);
            this.$store.dispatch('collect/del', item.pid);
            this.$axios({
              url: "http://localhost:8080/web22/deleteCollections",
              method: "get",
              params: {
                id: item.pid
              }
            }).then((result) => {
              //this.dlist=result.data;
              //this.$store.dispatch('collect/loadData',result.data);#其实只要用这句话给store中的items重新赋值就可以了，但这里是为了练习一下在store中删除
            }).catch(err => console.log(err))
            //console.log(clist);
            this.dlist = this.$store.state.collect.items;
          }
          //document.getElementById("c"+item.pid).checked=false;
        })

      },
      gtouchstart(pid) {
        var self = this;
        this.timeOutEvent = setTimeout(function() {
          self.longPress(pid);
        }, 500); //这里设置定时器，定义长按500毫秒触发长按事件
        return false;
      },
      //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
      showDeleteButton(pid) {
        clearTimeout(this.timeOutEvent); //清除定时器
        if (this.timeOutEvent != 0) {
          //这里写要执行的内容（如onclick事件）
          console.log(pid);
          this.$router.push("/comments/"+pid);
          //console.log("点击但未长按");
        }
        return false;
      },
      //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
      gtouchmove() {
        clearTimeout(this.timeOutEvent); //清除定时器
        this.timeOutEvent = 0;
      },
      //真正长按后应该执行的内容
      longPress(val) {
        this.timeOutEvent = 0;
        //执行长按要执行的内容，如弹出菜单
        this.flag1=1;
        this.manage();
        document.getElementById("c"+val).checked=true;
//调用这个方法的控件缓慢滚动到显示区域，菜单弹出
        // document.getElementById("bottom").scrollIntoView({behavior:"smooth"});

        console.log("长按");
      }
    },
    mounted() {
      document.getElementById("didian").style.borderBottom = '1px solid black';
      document.getElementById("didian").style.borderWidth = '0.3rem';
      this.$axios({
        url: "http://localhost:8080/web22/fromCollections",
        method: "get",
        params: {

        }
      }).then((result) => {

        this.dlist = result.data;

      }).catch(err => console.log(err))

    },
    created() {
      document.oncontextmenu = function(e) {
        e.preventDefault();
      };
    },
    computed: {

    },
    components: {
      Select
    }
  }
</script>

<style>
  .classification {
    border-bottom: 1px solid darkgrey;
    width: 103%;
    position: absolute;
    left: -1rem;
    top: 7rem;
    display: flex;
    justify-content: space-around;
  }

  .select {
    border-bottom: 1px solid darkgrey;
    width: 103%;
    position: absolute;
    left: -1rem;
    top: 15rem;
    padding-left: 1.5rem;
    height: 0.625rem;

  }

  .collectlist li {
    width: 90%;
    height: 11rem;
    border-bottom: 1px solid darkgrey;
    margin-top: 11.6rem;
    padding: 2.5rem 0;
    margin-left: 1%;
    /*margin-left:43px;*/
    list-style: none;
    margin-bottom: -12rem;
  }

  .collectlist li input {
    width: 20px;
    height: 20px;
    z-index: -1;
  }

  .collectlist li img {
    width: 70px;
    height: 70px;
    margin-right: 0.625rem;
    margin-left: 20px;
  }

  .collectlist li .name {
    display: inline-block;
    width: 24rem;
    height: 2.5rem;
    transform: translate(88px, -70px);
  }

  .collectlist li .address1 {
    display: inline-block;
    width: 24rem;
    height: 2.5rem;
    transform: translate(88px, -75px);
    color: darkgrey;
  }

  .collectlist li .date1 {
    display: inline-block;
    width: 24rem;
    height: 2.5rem;
    transform: translate(88px, -75px);
    color: darkgrey;
  }

  .action {
    width: 100%;
    height: 3.125rem;
    position: fixed;
    bottom: 2.3rem;
  }

  .action input {

    width: 20px;
    height: 20px;
    margin-right: 1rem;
  }


</style>
