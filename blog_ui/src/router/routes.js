import mainRoutes from 'src/router/main';
import authRoutes from 'src/router/auth';

const routes = [
  {
    path: '/',
    meta: { requiresAuth: false, title: 'BlogTest' },
    component: () => import('layouts/MainLayout.vue'),
    children: [...mainRoutes],
  },

  {
    path: '/auth',
    meta: { requiresAuth: false, title: 'Zimele CS | Authentication' },
    component: () => import('layouts/AuthLayout.vue'),
    children: [...authRoutes],
  },

  // Always leave this as last one,
  {
    path: '*',
    meta: { requiresAuth: false, title: 'BlogTest | Whoops!' },
    redirect: {
      path: '/404',
    },
  },
  {
    path: '/404',
    meta: { requiresAuth: false, title: 'BlogTest | Whoops' },
    name: 'NotFound',
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        'pages/Error404.vue'
      ),
  },
];

export default routes;
