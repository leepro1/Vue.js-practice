import { createRouter, createWebHistory } from 'vue-router'
import ExamOne from '../views/ExamOne.vue'
import ExamTwo from '../views/ExamTwo.vue'
import ExamThree from '../views/ExamThree.vue'
import ExamFour from '../views/ExamFour.vue'

const routes = [
  {
    path: '/examOne', 
    name: 'examOne', 
    component: ExamOne
  },
  { 
    path: '/examTwo', 
    name: 'examTwo', 
    component: ExamTwo
  },
  { 
    path: '/examThree', 
    name: 'examThree', 
    component: ExamThree
  },
  { 
    path: '/examFour', 
    name: 'examFour', 
    component: ExamFour
  }
] 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
