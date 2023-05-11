import Vue from "vue";
import router from 'vue-router'
import Main from '../views/Main'
import Login from '../views/Login'
import UserProfile from '../views/user/Profile'
import UserList from '../views/user/List'

Vue.use(router)

export default new router({
  routes:[{
      path:'/main',
      component: Main,
      children:[
        {path:'/user/profile', component: UserProfile},
        {path:'/user/list', component: UserList}
      ]
    },{
      path:'/login',
      component: Login
    }
  ]
})
