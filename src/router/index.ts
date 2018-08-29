import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig } from 'vue-router'

const HelloWorld: AsyncComponent = (): any => import('@/pages/HelloWorld.vue')
const Checkboxs: AsyncComponent = (): any => import('@/pages/Checkboxs')
Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/checkboxs',
    name: 'Checkboxs',
    component: Checkboxs
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
