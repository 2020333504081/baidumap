<template>
  <div id="zhuce">
    <h3>欢迎注册</h3>

    <div class="input-group1">
      <span class="input-group-addon" id="basic-addon1"><i class="iconfont icon-shouji"></i></span>
      <input @keydown="an1()" type="text" class="form-control" placeholder="手机号码" v-model="phone">
    </div>
    <label class="label1" v-show="x1==1">手机号码不能为空</label>
    <label class="label1" v-show="x5==1">该手机号码已注册，可直接去登录</label>
    <label class="label1" v-show="x6==1">手机号码不存在</label>


    <div class="input-group2">
      <span class="input-group-addon" id="basic-addon1"><i class="glyphicon glyphicon-lock"></i></span>
      <input @keydown="an2()" type="password" class="form-control" placeholder="密码" v-model="password1">
    </div>
<label class="label2" v-show="x2==1">密码不能为空</label>

    <div class="input-group3">
      <span class="input-group-addon" id="basic-addon1"><i class="glyphicon glyphicon-lock"></i></span>
      <input @keydown="an3()" type="password" class="form-control" placeholder="确认密码" v-model="password2">
    </div>
<label class="label3" v-show="x3==1">确认密码不能为空</label>
<label class="label3" v-show="x4==1">两次密码输入不一致</label>

     <button @click="zhuce()" type="button" class="btnr">立即注册</button>

     <router-link to="/denglu" tag="div" class="gotol">
       已注册，去登录>
     </router-link>


  </div>
</template>

<script>
export default{
      data(){
        return{
          phone:'',
          password1:'',
          password2:'',
          x1:0,
          x2:0,
          x3:0,
          x4:0,
          x5:0,
          x6:0,
          flag:1
        }
      },
      methods:{
        zhuce(){
          this.flag=1;
          if(this.phone==''){
            this.x1=1;
            this.flag=0;
          }else if(this.phone.length!=11){
            this.x6=1;
            this.flag=0;
          }
          if(this.password1==''){
            this.x2=1;
            this.flag=0;
          }
          if(this.password2==''){
            this.x3=1;
            this.flag=0;
          }else if(this.password1!=this.password2){
            this.x4=1;
            this.flag=0;
          }


          /*核对该手机号是否已注册*/
            if(this.flag==1){
              this.$axios({
                url: "http://localhost:8080/web22/isUsers",
                method: "get",
                params: {
                  id: this.phone
                }
              }).then((result) => {
                if(result.data.length==0){
                  /*还未注册过,存到数据库中*/
                  this.$axios({
                    url: "http://localhost:8080/web22/addUser",
                    method: "get",
                    params: {
                      phone: this.phone,
                      password:this.password1
                    }
                  }).then((result) => {
                    this.$router.push('/denglu');
                    //console.log(11);
                  }).catch(err => console.log(err))
                }else{
                  /*已注册过*/
                  this.x5=1;
                }
                //console.log("1:",result.data[0])
              }).catch(err => console.log(err))
            }


        },
        an1(){
          this.x1=0;
          this.x5=0;
          this.x6=0;
          this.flag=1;
        },
        an2(){
          this.x2=0;
          this.flag=1;
        },
        an3(){
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
  .btnr{
    height:3rem;
  }
  .label1{
    position:absolute;
    top:24rem;
    left:10rem;
    color:red;
  }
  .label2{
    position:absolute;
    top:30.5rem;
    left:10rem;
    color:red;
  }
  .label3{
    position:absolute;
    top:37rem;
    left:10rem;
    color:red;
  }
</style>
