const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        redirect:'/login'
      },

      {
        path: 'login',
        name: 'login-page',
        component: () => import('pages/auth/LoginPage.vue'),
      },

      {
        path: 'register',
        name: 'register-page',
        component: () => import('pages/auth/RegisterPage.vue'),
      },

      {
        path: 'user',
        name: 'user-dashboard',
        component: () => import('pages/User/UserDashboard.vue'),
      },
    ],
  },

  {

   path: '/admin-dashboard',
    component: () => import('layouts/AdminLayout.vue'),
    children: [

      { path: '',
        name: 'admin-dashboard',
        component: () => import('pages/Admin/AdminDashboard.vue'),
      },


    ],
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
