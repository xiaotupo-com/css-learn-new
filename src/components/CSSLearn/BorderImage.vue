<script setup lang="ts">
import CSSLearnMainTitle from '../layouts/CSSLearnMainTitle.vue';
import CSSLearnItem from '../CSSLearnItem.vue';
</script>

<template>
  <CSSLearnMainTitle title="边框图片" />
  <CSSLearnItem>
    <template #heading>示例1</template>
    <template #content>
      <div class="something-meaningful">
        <div>
          I have a nice stone art border don't I look pretty?
        </div>
      </div>
      <h2>代码：</h2>
      <p>这个例子有到了两个 <strong>html</strong> 元素</p>
      <pre>
.something-meaningful {
  background: url(../../assets/img1.jpg);
  background-size: cover;
  padding: 1rem;

  >div {
    background: white;
    padding: 1rem;
  }
}
      </pre>
    </template>
  </CSSLearnItem>

  <CSSLearnItem>
    <template #heading>老式信封样式</template>
    <template #content>
      <div class="demo1">
        I have a nice stone art border don't I look pretty?
      </div>
      <h2>代码：</h2>
      <pre>
.demo1 {
  padding: 1em;
  border: 1em solid transparent;
  background: linear-gradient(white, white) padding-box,
    repeating-linear-gradient(-45deg, red 0, red 12.5%,
      transparent 0, transparent 25%,
      #58a 0, #58a 37.5%,
      transparent 0, transparent 50%) 0/5em 5em;
}
      </pre>
    </template>
  </CSSLearnItem>

  <CSSLearnItem>
    <template #heading>蚂蚁行军边框</template>
    <template #content>
      <div class="demo2">
        I have a nice stone art border don't I look pretty?
      </div>
      <h2>代码：</h2>

      <pre>
.demo2 {
  padding: 1em;
  border: 1px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    repeating-linear-gradient(-45deg,
      black 0, black 25%, white 0, white 50%) 0/.6em .6em;
  animation: ants 12s linear infinite;
}
      </pre>
    </template>
  </CSSLearnItem>
</template>

<style lang="scss" scoped>
.something-meaningful {
  background: url(../../assets/img1.jpg);
  background-size: cover;
  padding: 1rem;

  >div {
    background: white;
    padding: 1rem;
  }
}

.demo1 {
  padding: 1em;
  border: 1em solid transparent;
  background: linear-gradient(rgb(226, 220, 220), rgb(224, 220, 220)) padding-box,
    repeating-linear-gradient(-45deg, red 0, red 12.5%,
      transparent 0, transparent 25%,
      #58a 0, #58a 37.5%,
      transparent 0, transparent 50%) 0/5em 5em;
}

@keyframes ants {
  to {
    background-position: 100%;
  }
}

// 蚂蚁行军边框
.demo2 {
  padding: 1em;
  border: 1px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    repeating-linear-gradient(-45deg,
      black 0, black 25%, white 0, white 50%) 0/.6em .6em;
  animation: ants 12s linear infinite;
}
</style>
