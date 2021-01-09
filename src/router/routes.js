
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'signin', component: () => import('pages/Signin/Index.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/ApplicationLayout.vue'),
    children: [
      {path: '/dashboard', name: 'dashboard', component: () => import('pages/Dashboard/Index.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
