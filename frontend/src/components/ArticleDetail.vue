<template>
  <div v-if="article">
    <router-link to="/">← Назад до списку</router-link>
    <h1>{{ article.title }}</h1>
    <small>Автор: {{ article.author }} | Дата: {{ article.published_date }}</small>
    <p>{{ article.content }}</p>

    <hr>
    <h3>Коментарі:</h3>
    <ul>
      <li v-for="comment in article.comments" :key="comment.id">
        <strong>{{ comment.author_name }}:</strong> {{ comment.text }}
      </li>
    </ul>
  </div>
  <div v-else>Завантаження статті...</div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useArticleStore } from '../stores/articleStore'

const route = useRoute()
const store = useArticleStore()
const article = computed(() => store.currentArticle)

onMounted(() => {
  store.fetchArticleById(route.params.id)
})
</script>