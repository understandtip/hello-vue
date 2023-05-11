<template>
  <!-- {{$route.params.id}}  取出参数 -->
  <!-- 不能在template节点下使用  {{}} -->
  <h1>个人信息:{{$route.params.id}} -->
    <span>{{id}}</span>
  </h1>

</template>

<script>
export default {
  props:['id'],
  name: "UserProfile",
  //类似于过滤器    (HttpServletRequest request, HttpServletResponse response,FilterChain chain)
  beforeRouteEnter: (to,from, next)=>{
    //展示数据
    console.log("进入路由之前");
    next(vm => {
      vm.getData();
    });
  },
  beforeRouteLeave: (to,from, next)=>{
    console.log("退出路由之前");
    next();
  },
  methods:{
    getData:function (){
      /*this.axios.get('http://localhost:8080/static/mock/data.json').then(res => {
        console.log(res);
      })*/
      this.axios({
          method:'get',
          url:'http://localhost:8080/static/mock/data.json'
      }).then(function (res) {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>

</style>
