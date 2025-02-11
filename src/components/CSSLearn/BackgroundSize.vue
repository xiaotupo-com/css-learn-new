<script setup lang="ts">
import CSSLearnMainTitle from '../layouts/CSSLearnMainTitle.vue';
import CSSLearnItem from '../CSSLearnItem.vue';
import AlignLeft from '../AlignLeft.vue';
</script>

<template>
  <CSSLearnMainTitle title="背景大小" />
  <CSSLearnItem>
    <template #heading>示例1</template>
    <template #content>
      <div class="demo demo1">
        <h2>cover</h2>
      </div>
      <AlignLeft>
        <pre>
.demo1 {
  background-image: url("../../assets/hand.jpg");
  background-size: cover;
}
        </pre>
      </AlignLeft>

      <div class="demo demo2">
        <h2>contain</h2>
      </div>
      <AlignLeft>
        <pre>
.demo2 {
  background-image: url("../../assets/hand.jpg");
  background-size: contain;
}
        </pre>
      </AlignLeft>

      <div class="demo demo3">
        <h2>contain & no-repeat 不重复</h2>
      </div>
      <AlignLeft>
        <pre>
.demo3 {
  background-image: url("../../assets/hand.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}
        </pre>
      </AlignLeft>

      <div class="demo demo4">
        <h2>指定背景图片宽度为 100px，重复</h2>
      </div>
      <AlignLeft>
        <pre>
.demo4 {
  background-image: url("../../assets/hand.jpg");
  background-size: 100px;
}
        </pre>
      </AlignLeft>

      <div class="demo demo5">
        <h2>宽度为父容器的百分之五十</h2>
      </div>
      <AlignLeft>
        <pre>
.demo5 {
  background-image: url("../../assets/hand.jpg");
  /* 宽度为父容器的百分之五十 */
  background-size: 50%;
}
        </pre>
      </AlignLeft>

      <div class="demo demo6">
        <h2>宽度为父容器的百分之五十，不重复</h2>
      </div>
      <AlignLeft>
        <pre>
.demo6 {
  background-image: url("../../assets/hand.jpg");
  /* 宽度为父容器的百分之五十 */
  background-size: 50%;
  background-repeat: no-repeat;
}
        </pre>
      </AlignLeft>

      <div class="demo demo7">
        <h2>高度为父容器高度的50%，宽度为 auto，不重复</h2>
      </div>
      <AlignLeft>
        <pre>
.demo6 {
  background-image: url("../../assets/hand.jpg");
  /* 宽度为父容器的百分之五十 */
  background-size: 50%;
  background-repeat: no-repeat;
}
        </pre>
      </AlignLeft>


    </template>
  </CSSLearnItem>
</template>

<style lang="scss" scoped>
.demo {
  width: 700px;
  height: 550px;
  background: #665;

  h2 {
    font-size: 2.5rem;
    padding: 1rem;
    background: rgba(52, 53, 52, 0.123);
    color: white;
  }
}

.demo1 {
  background-image: url("../../assets/hand.jpg");
  background-size: cover;
}

.demo2 {
  background-image: url("../../assets/hand.jpg");
  background-size: contain;
}

.demo3 {
  background-image: url("../../assets/hand.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}

.demo4 {
  background-image: url("../../assets/hand.jpg");
  background-size: 100px;
}

.demo5 {
  background-image: url("../../assets/hand.jpg");
  /* 宽度为父容器的百分之五十 */
  background-size: 50%;
}

.demo6 {
  background-image: url("../../assets/hand.jpg");
  /* 宽度为父容器的百分之五十 */
  background-size: 50%;
  background-repeat: no-repeat;
}

.demo7 {
  background-image: url("../../assets/hand.jpg");
  /* 高度为父容器高度的50%，宽度为 auto */
  background-size: auto 50%;
  background-repeat: no-repeat;
}
</style>
