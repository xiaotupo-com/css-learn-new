<script setup lang="ts">
import CSSLearnMainTitle from '../../layouts/CSSLearnMainTitle.vue';
import CSSLearnItem from '../../CSSLearnItem.vue';
</script>

<template>
  <CSSLearnMainTitle title="竖条纹学习" />
  <CSSLearnItem>
    <template #heading>竖条纹学习</template>
    <template #content>
      <div class="demo demo4">
        <h2>80px 竖条纹</h2>
        <pre>
.demo4 {
  background: linear-gradient(90deg, #fb3 50%, #58a 0);
  background-size: 80px 100%;
}
        </pre>
      </div>

      <div class="demo demo5">
        <h2>等宽条纹</h2>
        <pre>
.demo5 {
  background: linear-gradient(45deg, #fb3 50%, #58a 50%);
  background-size: 30px 30px;
}
        </pre>
      </div>

      <div class="demo demo6">
        <h2>45度斜条纹</h2>
        <pre>
.demo6 {
  background: repeating-linear-gradient(45deg, #fb3, #fb3 15px, #58a 0, #58a 30px);
}
        </pre>
      </div>

      <div class="demo demo7">
        <h2>60度条纹</h2>
        <pre>
.demo7 {
  background: repeating-linear-gradient(60deg, #fb3, #fb3 33.3%, #58a 0, #58a 66.6%);
}
        </pre>
      </div>

      <div class="demo demo8">
        <h2>60度条纹</h2>
        <pre>
.demo8 {
  background: linear-gradient(60deg, #fb3 33.3%, #58a 0, #58a 66.6%, yellowgreen 0);
}
        </pre>
      </div>

      <div class="demo demo9">
        <h2>60度条纹</h2>
        <pre>
.demo9 {
  background: repeating-linear-gradient(45deg,
      rgba(255, 0, 0, 0.5) 0,
      rgba(255, 0, 0, 0.5) 10px,
      rgba(0, 255, 0, 0.5) 10px,
      rgba(0, 255, 0, 0.5) 20px),
    repeating-linear-gradient(-45deg,
      rgba(0, 0, 255, 0.5) 0,
      rgba(0, 0, 255, 0.5) 10px,
      rgba(255, 255, 0, 0.5) 10px,
      rgba(255, 255, 0, 0.5) 20px);radial-gradient
}
        </pre>
      </div>

      <div class="demo demo10">
        <h2>60度条纹</h2>
        <pre>
.demo10 {
  background: repeating-linear-gradient(45deg,
      transparent,
      transparent 10px,
      black 30px,
      rgb(231, 229, 70) 100px);

  pre {
    background: rgba(56, 226, 175, 0.24);
  }
}
        </pre>
      </div>
    </template>
  </CSSLearnItem>
</template>

<style lang="scss" scoped>
.demo {
  width: 50%;
  // height: 200px;

  h2 {
    background: rgba(56, 226, 175, 0.74);
    color: white;
  }
}

.demo4 {
  background: linear-gradient(90deg, #fb3 50%, #58a 0);
  background-size: 80px 100%;
}

.demo5 {
  background: linear-gradient(45deg, #fb3 50%, #58a 50%);
  background-size: 30px 30px;
}

.demo6 {
  background: repeating-linear-gradient(45deg, #fb3, #fb3 15px, #58a 0, #58a 30px);
}

.demo7 {
  background: repeating-linear-gradient(60deg, #fb3, #fb3 33.3%, #58a 0, #58a 66.6%);
}

.demo8 {
  background: linear-gradient(60deg, #fb3 33.3%, #58a 0, #58a 66.6%, yellowgreen 0);
}

.demo9 {
  background: repeating-linear-gradient(45deg,
      rgba(255, 0, 0, 0.5) 0,
      rgba(255, 0, 0, 0.5) 10px,
      rgba(0, 255, 0, 0.5) 10px,
      rgba(0, 255, 0, 0.5) 20px),
    repeating-linear-gradient(-45deg,
      rgba(0, 0, 255, 0.5) 0,
      rgba(0, 0, 255, 0.5) 10px,
      rgba(255, 255, 0, 0.5) 10px,
      rgba(255, 255, 0, 0.5) 20px);
}

.demo10 {
  background: repeating-linear-gradient(45deg,
      transparent,
      transparent 10px,
      black 30px,
      rgb(231, 229, 70) 100px);

  pre {
    color: white;
    background: rgba(56, 226, 175, 0.24);
  }
}
</style>
