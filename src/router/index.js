import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () =>
      import ('../views/index.vue'),
    children:[
      {
        path: '',
        redirect: '/login',
      },
      {
        path:'/assistant/newResult',
        component: ()=>
          import('../views/assistant/newResult.vue')
      },
      {
        path:'/assistant/dataOut',
        component: ()=>
          import('../views/assistant/dataOut.vue')
      },
      {
        path:'/assistant/showData',
        component: ()=>
          import('../views/assistant/showData.vue')
      },
      {
        path:"/teacher/student",
        component:()=>import('../views/Teacher/StudentInfo.vue')
      },
      {
        path:"/teacher/dataOut",
        component:()=>import('../views/Teacher/DataOut.vue')
      },
      {
        path:"/teacher/newResult",
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

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === null || token === '') {
      next('/login');
    } else {
      next()
    }
  }
});



export default router
