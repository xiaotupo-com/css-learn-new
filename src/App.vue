<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/" class="button default">Home</RouterLink>
    <RouterLink to="/css" class="button default">CSS</RouterLink>
    <RouterLink to="/about" class="button default">About</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  background: #fefefe;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-right: 1px solid #b7bbb1b7;
  box-shadow: 0 0 5px 5px #999d9240;
}

.router-link-active {
  color: var(--vp-c-green-1) !important;
  font-weight: bold;
}
</style>
