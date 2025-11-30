const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login-page',
    component: () => import('pages/auth/LoginPage.vue'),
  },


  // USER
  {
    path: '/user',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true, role: 'user' },
    children: [
      {
        path: '',
        name: 'user-dashboard',
        component: () => import('pages/User/UserDashboard.vue'),
      },
      {
        path: 'bookings',
        name: 'user-bookings',
        component: () => import('pages/BookingsPage.vue'),
      },
      {
        path: 'tourguides',
        name: 'user-tourguides',
        component: () => import('pages/TourguidesPage.vue'),
      },
      {
        path: 'transportation',
        name: 'user-transportation',
        component: () => import('pages/TransportationPage.vue'),
      },
    ],
  },

  // ADMIN 
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    meta: { requiresAuth: true, role: 'admin' },
    children: [
      {
        path: '',
        name: 'admin-dashboard',
        component: () => import('pages/Admin/AdminDashboard.vue'),
      },
      {
        path: 'users',
        name: 'admin-users',
        component: () => import('pages/Admin/UserManagementPage.vue'),
      },
    ],
  },

  // 404 CATCH ALL
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
