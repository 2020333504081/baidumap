<template>
  <div id="denglu">
    <h3>欢迎登录</h3>

    <div class="input-group1">
      <span class="input-group-addon" id="basic-addon1"><i class="iconfont icon-shouji"></i></span>
      <input @keydown="an1()" v-model="phone" type="text" class="form-control" placeholder="手机号码">
    </div>
<label class="labels" v-show="x1==1">手机号码不能为空</label>
<label class="labels" v-show="x2==1">手机号码错误</label>

    <div class="input-group2">
      <span class="input-group-addon" id="basic-addon1"><i class="glyphicon glyphicon-lock"></i></span>
      <input @keydown="an2()"  v-model="password" type="password" class="form-control" placeholder="密码">
    </div>
<label class="labelm" v-show="x3==1">密码不能为空</label>
<label class="labelm" v-show="x4==1">密码错误</label>


     <button @click="denglu()" class="btnl">登录</button>

     <router-link to="/zhuce" tag="div" class="gotor">
       现在注册>
     </router-link>


  </div>
</template>

<script>
  export default{
        data(){
          return{
            phone:'',
            password:'',
            x1:0,
            x2:0,
            x3:0,
            x4:0,
            flag:1
          }
        },
        methods:{
          denglu(){
            this.flag=1;
            if(this.phone==''){
              this.x1=1;
              this.flag=0;
            }
            if(this.password==''){
              this.x3=1;
              this.flag=0;
            }
            if(this.flag==1){
              this.$axios({
                url: "http://localhost:8080/web22/isUsers",
                method: "get",
                params: {
                  id: this.phone
                }
              }).then((result) => {
                console.log(result);
                if(result.data.length==0){
                  this.x2=1;
                }else if(result.data[0].password!=this.password){
                  this.x4=1;
                }else{
                  var user={phone:this.phone,password:this.password};
                    var users=JSON.parse(localStorage.getItem("cmts")||"[]");
                    users.unshift(user);
                    localStorage.setItem("users",JSON.stringify(users));
                  this.$router.push('/chuxing');
                  window.location.reload();
                }
                //console.log("1:",result.data[0])
              }).catch(err => console.log(err))
            }
          },
          an1(){
            this.x1=0;
            this.x2=0;
            this.flag=1;
          },
          an2(){
            this.x3=0;
            this.x4=0;
            this.flag=1;
          }
        }


      }
</script>

<style>
h3{
  position:absolute;
  top:15%;
  left:35%;
}
div{
  height:3.5rem;

}
button{
  height:3.5rem;
}
.labels{
    position:absolute;
    top:24rem;
    left:10rem;
    color:red;
  }
  .labelm{
    position:absolute;
    top:30.5rem;
    left:10rem;
    color:red;
  }
</style>
