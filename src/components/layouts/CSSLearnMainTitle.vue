<script setup lang="ts">
const { title = 'default' } = defineProps({
  title: String,
})
</script>

<template>
  <h2 class="title">{{ title }}</h2>
</template>

<style lang="css" scoped>
.title {
  background: rgb(235, 236, 225);
  text-align: center;
  padding: 20px 0;
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--vp-c-green-2);
  border-radius: var(--sft-border-radius);
  margin: var(--sft-margin-y) var(--sft-margin-x);
}
</style>
