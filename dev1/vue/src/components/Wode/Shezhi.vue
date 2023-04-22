<template>
  <div>
    <div style="position:fixed;top:0;z-index:100;background-color:white;width:100%;height:4.5rem;line-height:4.5rem;padding-left:1rem;font-size:2rem;border-bottom:1px solid lightgrey;">
      <i @click="goback()" style="margin-right:13.5rem;"class="glyphicon glyphicon-menu-left"></i>设置</div>
      <div style="background-color:#f4f7ff;width:100%;height:78rem;margin-top:4.5rem;">
        <ul>
          <li style="width:100%;height:5rem;background-color:white;line-height:5rem;margin-bottom:0.5rem;padding-left:1rem;">账号设置<i style="float:right;margin-right:1rem;margin-top:1.5rem;" class="glyphicon glyphicon-menu-right"></i></li>
          <li style="width:100%;height:5rem;background-color:white;line-height:5rem;margin-bottom:0.5rem;padding-left:1rem;">首页布局设置<i style="float:right;margin-right:1rem;margin-top:1.5rem;" class="glyphicon glyphicon-menu-right"></i></li>
          <li style="width:100%;height:5rem;background-color:white;line-height:5rem;border-bottom:1px solid lightgrey;padding-left:1rem;" v-for="(item,index) in list1" :key="index">{{item}}<i style="float:right;margin-right:1rem;margin-top:1.5rem;" class="glyphicon glyphicon-menu-right"></i></li>
          <ul style="margin-top:0.5rem;">
            <li style="width:100%;height:5rem;background-color:white;line-height:5rem;border-bottom:1px solid lightgrey;padding-left:1rem;" v-for="(item,index) in list2" :key="index">{{item}}<i style="float:right;margin-right:1rem;margin-top:1.5rem;" class="glyphicon glyphicon-menu-right"></i></li>

          </ul>
          <li style="width:100%;height:5rem;background-color:white;line-height:5rem;margin-top:0.5rem;padding-left:1rem;">关于<i style="float:right;margin-right:1rem;margin-top:1.5rem;" class="glyphicon glyphicon-menu-right"></i></li>
        </ul>
      </div>
      <div @click="logout()" style="width:20rem;height:5rem;background-color:#ef3b3b;border-radius:2.5rem;text-align:center;line-height:5rem;color:white;margin:2rem 0rem 2rem 8rem;">退出登录</div>

  </div>
</template>

<script>
  export default{
    data(){
      return{
        list1:['通用设置','手车互联设置','导航设置','语音设置','消息通知','快捷方式设置','上下班设置'],
        list2:['隐私设置','隐私政策摘要','隐私政策','已收集个人信息清单','与第三方共享个人信息清单']
      }
    },
    methods:{
      goback(){
        this.$router.go(-1);
      },
      logout(){
        var items=JSON.parse(localStorage.getItem("users"));
        for(var i=0;i<items.length;i++){
          if(items[i].phone='12345678901'){
            items.splice(i,1);
          }

        }
        localStorage.setItem("users",JSON.stringify(items));
        this.$router.push('/denglu');
        console.log(items);
      }
    }
  }
</script>

<style>
</style>
