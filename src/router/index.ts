import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/css',
      name: 'css',
      component: () => import('../views/CSSLearnView.vue'),
      redirect: '/css/01',
      children: [
        {
          name: 'background-clip',
          path: '01',
          component: () => import('../components/CSSLearn/BackgroundClip.vue'),
        },
        {
          name: 'box-shadow',
          path: 'box-shadow',
          component: () => import('../components/CSSLearn/BoxShadow.vue'),
        },
        {
          name: 'outline',
          path: 'outline',
          component: () => import('../components/CSSLearn/OutLine.vue'),
        },
        {
          name: 'linear-gradient',
          path: 'linear-gradient',
          component: () => import('../components/CSSLearn/LinearGradient.vue'),
        },
        {
          name: 'triangle-arrow',
          path: 'triangle-arrow',
          component: () => import('../components/CSSLearn/TriangleArrow.vue'),
        },
        {
          name: 'background-position',
          path: 'background-position',
          component: () => import('../components/CSSLearn/BackgroundPosition.vue'),
        },
        {
          name: 'border-radius',
          path: 'border-radius',
          component: () => import('../components/CSSLearn/BorderRadius.vue')
        },
        {
          name: 'stripe-demo',
          path: 'stripe-demo',
          component: () => import('../components/CSSLearn/StripeDemo.vue')
        },
        {
          name: 'radial-gradient-demo',
          path: 'radial-gradient-demo',
          component: () => import('../components/CSSLearn/RadialGradientDemo.vue')
        },
        {
          name: "border-image",
          path: 'border-image',
          component: () => import('../components/CSSLearn/BorderImage.vue')
        },
        {
          name: 'background-size',
          path: 'background-size',
          component: () => import('../components/CSSLearn/BackgroundSize.vue')
        },
        {
          name: 'background-origin',
          path: 'background-origin',
          component: () => import('../components/CSSLearn/BackgroundOrigin.vue')
        }
      ],
    },
  ],
})

export default router
