<template>
<div class="sss">
  <div class="dropdown">
    <!-- 1 -->
    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      全部类型
      <span class="caret"></span>
    </button>
    <ul id="ul1" class="dropdown-menu" aria-labelledby="dropdownMenu1" >
      <li id="li1"><a>全部类型</a></li>
      <li role="separator" class="divider"></li>
      <li id="li2"><a href="#">景点</a></li>
    </ul>

  </div>
   <div class="dropdown">
  <!-- 2 -->
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    全部时间
    <span class="caret"></span>
  </button>
  <ul id="ul2" class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li id="li3"><a href="#">全部时间</a></li>
    <li role="separator" class="divider"></li>
    <li id="li4"><a href="#">最近一周</a></li>
    <li role="separator" class="divider"></li>
    <li id="li5"><a href="#">最近一个月</a></li>
    <li role="separator" class="divider"></li>
    <li id="li6"><a href="#">最近一年</a></li>
    <li role="separator" class="divider"></li>
    <li id="li7"><a href="#">最近三年</a></li>
    <li role="separator" class="divider"></li>
    <li id="li8"><a href="#">三年以前</a></li>
  </ul>
  </div>
   <div class="dropdown">
  <!-- 3 -->
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    全部区域
    <span class="caret"></span>
  </button>
  <ul id="ul3" class="dropdown-menu" aria-labelledby="dropdownMenu3" >
    <li id="li9"><a href="#">全部区域</a></li>
    <li role="separator" class="divider"></li>
    <li id="li10"><a href="#">杭州</a></li>
  </ul>
  </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        flag:0
      }
    },
    methods:{
      
    },
    mounted(){

    }
  }
</script>

<style>
  .sss{
    position:absolute;
    top:-3.3rem;
  }
  .dropdown{
    display:inline-block;
    margin-right:0.625rem;
  }
  .dropdown button{
    border-style:none;
  }
  #ul1{
    position:absolute;
    top:3.6rem;
    left:-0.55rem;
    width:37.8rem;
    z-index:100;
  }
  #ul2{
    position:absolute;
    top:3.6rem;
    left:-10.9rem;
    width:37.8rem;
    z-index:100;
  }
  #ul3{
    position:absolute;
    top:3.6rem;
    left:-21.1rem;
    width:37.8rem;
    z-index:100;
  }
</style>
