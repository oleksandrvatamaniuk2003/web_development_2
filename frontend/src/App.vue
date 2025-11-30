<template>
  <div class="container">
    <header>
      <h1>Блог на Django + Vue + Pinia</h1>
    </header>
    <router-view></router-view>
  </div>
</template>

<style>
.container { max-width: 800px; margin: 0 auto; padding: 20px; font-family: sans-serif; }
header { background: #f4f4f4; padding: 10px; margin-bottom: 20px; text-align: center; }
</style>