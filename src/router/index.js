import Vue from "vue";
import router from 'vue-router'
import Main from '../views/Main'
import Login from '../views/Login'
import UserProfile from '../views/user/Profile'
import UserList from '../views/user/List'
import NotFound from '../views/NotFound'
Vue.use(router)

export default new router({
  mode:"history",
  routes:[{
      path:'/main/:username',
      component: Main,
      props: true,
      children:[{
          //  :id   -->   接收参数
          path:'/user/profile/:id',
          name: 'UserProfile',
          component: UserProfile,
          props:true
        },{
          path:'/user/list',
          component: UserList
        }
      ]
  },{
    path:'/login',
    component: Login
  },{
    path:'/home',
    redirect: '/main'
  },{
    path:'*',
    component: NotFound
  }]
})
