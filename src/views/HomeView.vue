<script setup lang="ts">
</script>

<template>
  <main>
    <h1>Home</h1>
  </main>
</template>

<style lang="css" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
}

main h1 {
  font-size: 10rem;
  padding: 50px;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(45deg, red, blue);
  background-clip: text;
  border-radius: 50%;
  box-shadow:
    /* 右下阴影 */
    10px 10px 20px rgba(0, 0, 0, 0.3),
    /* 左下阴影 */
    -10px 10px 20px rgba(0, 0, 0, 0.3),
    /* 右上阴影 */
    10px -10px 20px rgba(0, 0, 0, 0.3),
    /* 左上阴影 */
    -10px -10px 20px rgba(0, 0, 0, 0.3);
}
</style>
