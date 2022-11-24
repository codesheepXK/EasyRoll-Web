import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () =>
      import ('../views/index.vue'),
    children:[
      // {
      //   path: '',
      //   redirect: '/newResult',
      // },
      {
        path:'/assistant/newResult',
        component: ()=>
          import('../views/assistant/NewResult/newResult.vue')
      },
      {
        path:'/assistant/dataOut',
        component: ()=>
          import('../views/assistant/DataOut/dataOut.vue')
      },
      {
        path:'/assistant/showData',
        component: ()=>
          import('../views/assistant/ShowData/showData.vue')
      },
      {
        path:"/Teacher/student",
        component:()=>import('../views/Teacher/ClassMembers/StudentInfo.vue')
      },
      {
        path:"/Teacher/dataOut",
        component:()=>import('../views/Teacher/DataOut/DataOut.vue')
      },
      {
        path:"/Teacher/newResult",
        component:()=>import('../views/Teacher/NewResult/NewResult.vue')
      }
    ],
  },
  {
    path:'/login',
    component: ()=>
      import("../views/login.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
