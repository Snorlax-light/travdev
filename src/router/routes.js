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
  {
    path: '/register',
    name: 'register-page',
    component: () => import('pages/auth/RegisterPage.vue'),
  },

  // USER LAYOUT + SIDEBAR
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

  // ADMIN LAYOUT + SIDEBAR
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
      {
        path: 'reports',
        name: 'admin-reports',
        component: () => import('pages/Admin/ReportsPage.vue'),
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
