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
    console.log("进入页面之前");
    next(vm => {  //展示数据
      vm.getData();
    });
  },
  beforeRouteLeave: (to,from, next)=>{
    console.log("退出页面之前");
    next();
  },
  methods:{
    getData(){
      this.axios.get('http://localhost:8080/static/mock/data.json').then(res => {
        console.log(res);
      })
      /*this.axios({
          method:'get',
          url:'http://localhost:8080/static/mock/data.json'
      }).then(res => {
        console.log(res);
      })*/
    }
  }
}
</script>

<style scoped>

</style>
