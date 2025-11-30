<template>
  <div>
    <h2>Список статей</h2>
    <div v-if="store.loading">Завантаження...</div>
    <div v-else class="list">
      <div v-for="article in store.articles" :key="article.id" class="card">
        <h3>{{ article.title }}</h3>
        <p>{{ article.content.substring(0, 100) }}...</p>
        <router-link :to="'/article/' + article.id">Читати далі</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useArticleStore } from '../stores/articleStore'
const store = useArticleStore()
onMounted(() => store.fetchArticles())
</script>

<style scoped>
.card { border: 1px solid #ccc; padding: 15px; margin-bottom: 10px; border-radius: 5px; }
</style>