<script setup lang="ts">
import CSSLearnMainTitle from '../../layouts/CSSLearnMainTitle.vue';
import CSSLearnItem from '../../CSSLearnItem.vue';
</script>

<template>
  <CSSLearnMainTitle title="水平条纹学习" />
  <CSSLearnItem>
    <template #heading>水平条纹学习</template>
    <template #content>

      <div class="demo demo1">
        <pre>
.demo1 {
  background: linear-gradient(#fb3, #58a);
}
        </pre>
      </div>

      <div class="demo demo2">
        把这两个色标拉近后的效果
        <pre>
.demo2 {
  background: linear-gradient(#fb3 20%, #58a 80%);
}
        </pre>
      </div>

      <div class="demo demo3">
        40% 60% 效果
        <pre>
.demo3 {
  background: linear-gradient(#fb3 40%, #58a 60%);
}
        </pre>
      </div>

      <div class="demo demo4">
        50% 50% 效果
        <pre>
.demo4 {
  background: linear-gradient(#fb3 50%, #58a 50%);
}
        </pre>
      </div>

      <div class="demo demo5">
        <h2>等宽条纹</h2>
        <pre>
.demo5 {
  background: linear-gradient(#fb3 50%, #58a 50%);
  background-size: 100% 30px;
}
        </pre>
      </div>

      <div class="demo demo6">
        <h2>不等宽条纹</h2>
        <pre>
.demo6 {
  background: linear-gradient(#fb3 30%, #58a 30%);
  background-size: 100% 30px;
}
        </pre>
      </div>

      <div class="demo demo7">
        <h2>多种颜色的条纹</h2>
        <pre>
.demo7 {
  background: linear-gradient(#fb3 33.3%, #58a 0, #58a 66.6%, yellowgreen 0);
  background-size: 100% 45px;
}
        </pre>
      </div>
    </template>
  </CSSLearnItem>
</template>

<style lang="scss" scoped>
.demo {
  width: 50%;
  height: 200px;

  h2 {
    background: rgba(56, 226, 175, 0.74);
    color: white;
  }
}

.demo1 {
  background: linear-gradient(#fb3, #58a);
}

.demo2 {
  background: linear-gradient(#fb3 20%, #58a 80%);
}

.demo3 {
  background: linear-gradient(#fb3 40%, #58a 60%);
}

.demo4 {
  background: linear-gradient(#fb3 50%, #58a 50%);
}

.demo5 {
  background: linear-gradient(#fb3 50%, #58a 50%);
  background-size: 100% 30px;
}

.demo6 {
  background: linear-gradient(#fb3 30%, #58a 0);
  background-size: 100% 30px;
}

.demo7 {
  background: linear-gradient(#fb3 33.3%, #58a 0, #58a 66.6%, yellowgreen 0);
  background-size: 100% 45px;
}
</style>
