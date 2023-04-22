<template>
  <div style="width:100%;height:66rem;background-color:#f6f6f6;">
    <h4 style="position:absolute;top:3rem;left:3rem;">为提升账号安全</h4>
    <h3 style="position:absolute;top:5rem;left:3rem;">请填写新的用户名</h3>
    <div style="position:absolute;top:13rem;left:3rem;">用户名</div>
    <input style="outline:none;width:31rem;height:4rem;background-color:#f6f6f6;border-bottom:1px solid grey;position:absolute;top:16rem;left:3rem;" type="text" placeholder="中英文均可" v-model="name"/>
    <div @click="Change()" style="font-size:2rem;position:absolute;top:25rem;left:3rem;width:31rem;height:5rem;border-radius:2.5rem;text-align:center;line-height:5rem;background-color:royalblue;color:white;">确定</div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        name:''
      }
    },
    methods:{
      Change(){
        this.$axios({
          url:'/changename',
          method:'get',
          params:{name:this.name}
        }).then((result)=>{

        }).catch(err=>console.log(err));
        this.$router.push("/wode");
        this.$store.state.classify.username=this.name;
      }
    }
  }
</script>

<style>
</style>
