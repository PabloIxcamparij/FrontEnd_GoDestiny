
import {createRouter, createWebHistory}from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'login',
        component: Login
      },
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/RegistroUsuario',
        name: 'registroUsuario',
        component: () => import('../views/RegistroUsuario.vue'),
      },
      {
        path: '/RegistroConductor',
        name: 'registroConductor',
        component: () => import('../views/RegistroConductor.vue'),
      },  
    ]
  }) 

export default router