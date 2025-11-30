import { createRouter, createWebHistory } from 'vue-router'
import ArticleList from '../components/ArticleList.vue'
import ArticleDetail from '../components/ArticleDetail.vue'

const routes = [
  { path: '/', component: ArticleList },
  { path: '/article/:id', component: ArticleDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router