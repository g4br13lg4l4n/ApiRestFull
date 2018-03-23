import Vue from 'vue'
import Router from 'vue-router'

import Login from '../view/pages/Login.vue'
import Dashboard from '../view/components/Dashboard.vue'


/* Users */
import Users from '../view/components/Users/Users.vue'
import ListUsers from '../view/components/Users/ListUsers.vue'
import AddUser from '../view/components/Users/AddUser.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard/',
    name: 'Home',
    component: Dashboard,
    children: [
      {
        path: 'users',
        name: 'Users',
        component: Users,
        children: [
          {
            path: 'listUsers',
            name: 'List Users',
            component:ListUsers
          },
          {
            path: 'addUser',
            name:'Add User',
            component: AddUser
          }
        ]
      },
    ] 
  }    
];

export default routes