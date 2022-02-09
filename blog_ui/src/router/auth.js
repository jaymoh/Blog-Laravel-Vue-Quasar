export default [
  {
    path: '/auth',
    meta: { requiresAuth: false, redirectIfLoggedIn: true, title: 'BlogTest | Login' },
    name: 'AuthLayout',
    redirect: {
      name: 'AuthLogin',
    },
  },
  {
    path: 'login',
    meta: { requiresAuth: false, redirectIfLoggedIn: true, title: 'BlogTest | Login' },
    name: 'AuthLogin',
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        'pages/auth/AuthLogin.vue'
      ),
  },
  {
    path: 'register',
    meta: { requiresAuth: false, redirectIfLoggedIn: true, title: 'BlogTest | Login' },
    name: 'AuthRegister',
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        'pages/auth/AuthRegister.vue'
      ),
  },
];
