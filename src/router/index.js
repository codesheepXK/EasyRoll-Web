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
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
