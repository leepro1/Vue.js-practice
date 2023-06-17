import { createRouter, createWebHistory } from 'vue-router' 
import ProductListView from '../views/ProductListView.vue' 
import ProductEditView from '../views/ProductEditView.vue'
import CounterNumView from '../views/CounterNumView.vue'

const routes = [ 
  { 
    path: '/', 
    name: 'ProductListView', 
    component: ProductListView 
  },
  { 
    path: '/ProductListView', 
    name: 'ProductListView', 
    component: ProductListView 
  }, 
  { 
    path: '/edit/:id', 
    name: 'ProductEditView', 
    component: ProductEditView 
  }, 
  { 
    path: '/counterNum', 
    name: 'counterNum', 
    component: CounterNumView 
  }
] 

const router = createRouter({ 
  history: createWebHistory(process.env.BASE_URL), 
  routes 
}) 

export default router