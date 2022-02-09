export default [
  {
    path: '/',
    meta: { requiresAuth: false, title: 'BlogTest' },
    name: 'BlogHome',
    redirect: {
      name: 'PostsList',
    },
  },
  {
    path: 'posts',
    meta: { requiresAuth: false, title: 'BlogTest' },
    name: 'PostsList',
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        'pages/Index.vue'
      ),
  },
  {
    path: 'my-posts',
    meta: { requiresAuth: true, title: 'My Posts' },
    name: 'MyPosts',
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        'pages/MyPosts.vue'
      ),
  },
];
