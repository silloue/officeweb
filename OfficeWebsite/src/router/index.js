import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage/HomePage'
import TechnologyJs from '@/components/TechnologyJs/TechnologyJs'
import TechnologyNode from '@/components/TechnologyNode/TechnologyNode'
import SuccessCase from '@/components/SuccessCase/SuccessCase'
import AbilityRange from '@/components/AbilityRange/AbilityRange'
import AboutOur from '@/components/AboutOur/AboutOur'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path:'/aboutjs',
      name:'TechnologyJs',
      component:TechnologyJs
    },
    {
      path:'/aboutnode',
      name:'TechnologyNode',
      component:TechnologyNode
    },
    {
      path:'/aboutsuccesscase',
      name:'SuccessCase',
      component:SuccessCase
    },
    {
      path:'/aboutabilityrange',
      name:'AbilityRange',
      component:AbilityRange
    },{
      path:'/aboutour',
      name:'AboutOur',
      component:AboutOur
    }
  ]
})
