import Layout from '@/layout'

export default [
  {
    path: '/demo',
    component: Layout,
    name: 'Layout',
    children: [
      {
        path: '/demo/demo-list',
        component: () => import('@/views/demo/demo-list/index.vue'),
        name: 'demo-list',
        meta: {
          title: 'Demo列表',
        },
      },
      {
        path: '/demo/demo-create',
        component: () => import('@/views/demo/demo-create/index.vue'),
        name: 'demo-create',
        meta: {
          title: 'Demo新增',
        },
      },
      {
        path: '/demo/demo-edit',
        component: () => import('@/views/demo/demo-edit/index.vue'),
        name: 'demo-edit',
        meta: {
          title: 'Demo修改',
        },
      },
    ],
  },
]
