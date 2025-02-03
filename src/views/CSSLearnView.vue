<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>
<template>
  <main>
    <nav>
      <h2 class="nav-title">CSS 子目录</h2>
      <RouterLink :to="{ name: 'background-clip' }" class="button default">BackgroundClip</RouterLink>
      <RouterLink :to="{ name: 'box-shadow' }" class="button default">BoxShadow</RouterLink>
      <RouterLink :to="{ name: 'outline' }" class="button default">outline</RouterLink>
      <RouterLink :to="{ name: 'linear-gradient' }" class="button default">linear-gradient</RouterLink>
      <RouterLink :to="{ name: 'triangle-arrow' }" class="button default">三角形小箭头</RouterLink>
      <RouterLink :to="{ name: 'background-position' }" class="button default">背景定位</RouterLink>
      <RouterLink :to="{ name: 'border-radius' }" class="button default">边框内圆角</RouterLink>
    </nav>
    <div class="content">
      <RouterView />
    </div>
  </main>
</template>

<style lang="css" scoped>
main {
  display: grid;
  grid-template-columns: 240px 1fr;
}

main nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding: 0 12px;
  padding-top: 12px;
  border-right: 1px solid #eee;
}

.nav-title {
  border-bottom: 1px solid #aaa;
}

.content {
  background: #eee;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.content::-webkit-scrollbar {
  display: none;
}
</style>
