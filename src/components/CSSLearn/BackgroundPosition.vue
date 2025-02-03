<script setup lang="ts">
import CSSLearnMainTitle from '../layouts/CSSLearnMainTitle.vue'
import CSSLearnItem from '../CSSLearnItem.vue'
</script>
<template>
  <CSSLearnMainTitle title="背景定位" />
  <CSSLearnItem content-class="box-wrap" title-color-style="#299764">
    <template #heading>背景定位</template>
    <template #content>
      <!-- s-center -->
      <div class="box">
        <div class="s-center">
          <p>background-position: center;</p>
        </div>
      </div>
      <!-- s-left -->
      <div class="box">
        <div class="s-left">
          <p>background-position: left;</p>
        </div>
      </div>
      <!-- s-top -->
      <div class="box">
        <div class="s-top">
          <p>background-position: top;</p>
        </div>
      </div>

      <!-- s-right -->
      <div class="box">
        <div class="s-right">
          <p>background-position: right;</p>
        </div>
      </div>

      <!-- s-bottom -->
      <div class="box">
        <div class="s-bottom">
          <p>background-position: bottom;</p>
        </div>
      </div>

      <!-- s-bottom-30-left-30 -->
      <div class="box">
        <div class="s-bottom-30-left-30">
          <p>background-position: bottom 30px left 30px;</p>
        </div>
      </div>

      <!-- s-bottom-25-left-75 -->
      <div class="box">
        <div class="s-bottom-25-left-75">
          <p>background-position: 25% 75%;</p>
        </div>
      </div>

      <!-- s-bottom-25-left-75 -->
      <div class="box">
        <div class="s-right-35-botton-45">
          <p>background-position: right 35% botton 45%;</p>
        </div>
      </div>
    </template>
  </CSSLearnItem>

  <CSSLearnMainTitle title="background-origin" />
  <CSSLearnItem title-color-style="#299764">
    <template #heading> background-origin </template>
    <template #content>
      <div class="wrap">
        <div class="box1">
          <pre>
.box1 {
  padding: 25px;
  background: url(../../assets/star.png) no-repeat var(--sft-c-gray);
  height: 200px;
}
          </pre>
        </div>
        <div class="box2">
          <pre>
.box2 {
  padding: 25px;
  background: url(../../assets/star.png) no-repeat var(--sft-c-gray);
  background-origin: content-box;
  height: 200px;
}
        </pre>
        </div>
      </div>

    </template>
  </CSSLearnItem>
</template>

<style lang="scss" scoped>
.box {
  height: 250px;
  background: rgb(210, 226, 210);

  div {
    height: inherit;
    background: url(../../assets/star.png) no-repeat;

    p {
      color: var(--sft-c-gray);
      padding: 1rem;
      font-size: 1rem;
      font-weight: bold;
      background: #8cd86067;
    }
  }

  .s-center {
    background-position: center;
  }

  .s-left {
    background-position: left;
  }

  .s-top {
    background-position: top;
  }

  .s-right {
    background-position: right;
  }

  .s-bottom {
    background-position: bottom;
  }

  .s-bottom-30-left-30 {
    background-position: bottom 30px left 30px;
  }

  .s-bottom-25-left-75 {
    background-position: 25% 75%;
  }

  .s-right-35-botton-45 {
    background-position: right 35% bottom 45%;
  }
}

.wrap {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.box1 {
  padding: 25px;
  background: url(../../assets/star.png) no-repeat var(--sft-c-gray);
  height: 200px;
}

.box2 {
  padding: 25px;
  background: url(../../assets/star.png) no-repeat var(--sft-c-gray);
  background-origin: content-box;
  height: 200px;
}
</style>
