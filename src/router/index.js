import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () =>
      import ('../views/index.vue'),
    children:[
      {
        path: '',
        redirect: '/newResult',
      },
      {
        path:'/newResult',
        component: ()=>
          import('../views/newResult.vue')
      },
      {
        path:'/dataOut',
        component: ()=>
          import('../views/dataOut.vue')
      },
      {
        path:'/showData',
        component: ()=>
          import('../views/showData.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
