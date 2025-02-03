<script setup lang="ts">
import CSSLearnItem from '../CSSLearnItem.vue'
import CSSLearnMainTitle from '../layouts/CSSLearnMainTitle.vue'
</script>
<template>
  <CSSLearnMainTitle title="LinearGradient" />
  <CSSLearnItem>
    <template #heading>LinearGradient</template>
    <template #content>
      <div class="container">
        <div class="box box-1">
          <h1>90度表示从下到上</h1>
          <p>linear-gradient(90deg, yellow, red, green)</p>
        </div>
        <div class="box box-2">
          <h1>简单的从上到下渐变</h1>
          <p>linear-gradient(to bottom, red, blue)</p>
        </div>
        <div class="box box-3">
          <h1>从左到右渐变</h1>
          <p>linear-gradient(to right, red, blue)</p>
        </div>
        <div class="box box-4">
          <h1>带角度的渐变</h1>
          <p>linear-gradient(135deg, red, yellow, green, blue)</p>
        </div>
        <div class="box box-5">
          <h1>带有颜色节点位置的渐变</h1>
          <p>linear-gradient(to right, red 20%, yellow 50%, green 80%, blue 100%)</p>
        </div>
        <div class="box box-6">
          <h1>重复渐变</h1>
          <p>linear-gradient(to right, red 20%, yellow 50%, green 80%, blue 100%)</p>
        </div>

        <div class="box">
          <h1>按钮美化</h1>
          <button>设置</button>
          <pre>
button {
    padding: 10px 20px;
    border: none;
    color: white;
    font-size: 16px;
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    cursor: pointer;
}
</pre
          >
        </div>
      </div>
      <nav>
        <a href="">Item1</a>
        <a href="">Item1</a>
        <a href="">Item1</a>
        <a href="">Item1</a>
        <a href="">Item1</a>
        <a href="">Item1</a>
        <a href="">Item1</a>
      </nav>
    </template>
  </CSSLearnItem>
</template>

<style lang="css" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(580px, 1fr));
  gap: 1rem;
}

.box {
  background: gray;
  min-height: 200px;
  padding: 12px;
}

.box h1 {
  font-size: 1.5rem;
  color: white;
}

.box p {
  background: white;
  color: rgb(43, 39, 39);
  font-size: 1.45rem;
  font-weight: bold;
  line-height: 2rem;
  padding: 12px 14px;
  border: 4px solid green;
  filter: opacity(0.45);
}

.box-1 {
  background: linear-gradient(90deg, yellow, red, green);
}

.box-2 {
  background: linear-gradient(to bottom, red, blue);
}

.box-3 {
  background: linear-gradient(to right, red, blue);
}

.box-4 {
  background: linear-gradient(135deg, red, yellow, green, blue);
}

.box-5 {
  background: linear-gradient(to right, red 20%, yellow 50%, green 80%, blue 100%);
}

.box-6 {
  background: repeating-linear-gradient(to right, red, yellow 10%, green 20%);
}

button {
  padding: 10px 20px;
  border: none;
  color: white;
  font-size: 16px;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  cursor: pointer;
}

pre {
  display: block;
  border: 1px solid #feb47b;
  padding: 8px;
  background: rgb(226, 221, 221);
  color: rgb(63, 117, 37);
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  width: 100%;
  font-size: 1.6rem;
  line-height: 1.2rem;
  color: rgb(197, 52, 33);
  background: linear-gradient(to bottom, #6a11cb, #2575fc);
}

nav a {
  color: currentColor;
  margin: 8px;
  text-decoration: none;
}
</style>
