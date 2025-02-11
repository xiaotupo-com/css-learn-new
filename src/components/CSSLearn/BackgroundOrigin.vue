<script setup lang="ts">
import CSSLearnItem from '../CSSLearnItem.vue'
import AlignLeft from '../AlignLeft.vue'
import CSSLearnMainTitle from '../layouts/CSSLearnMainTitle.vue'
</script>

<template>
  <CSSLearnMainTitle title="Background-Origin 属性" />
  <CSSLearnItem>
    <template #heading>默认值为 padding-box</template>
    <template #content>
      <div class="demo demo1">
        这个例子演示了<code>background-origin</code>为<code>border-box</code>的情况，可以看到背景图片是从<strong>边框</strong>的左上角开始的。
      </div>
      <div class="demo demo2">
        这个例子演示了<code>background-origin</code>为<code>content-box</code>的情况，可以看到背景图片是从<strong>内容</strong>的左上角开始的。图片的左侧和上册紧挨着内边距，内边距为
        8px。
      </div>
      <div class="demo demo3">
        这个例子演示了<code>background-origin</code>为<code>padding-box</code>的情况，可以看到背景图片是从<strong>内边距</strong>的左上角开始的，图片的左侧和上册紧挨着边框。
      </div>
    </template>
  </CSSLearnItem>
</template>
<style lang="scss" scoped>
.demo {
  width: 700px;
  height: 550px;
  background: rgb(240, 240, 231);
  font-size: 1.15rem;

  h2 {
    font-size: 2.5rem;
    padding: 1rem;
    background: rgba(52, 53, 52, 0.123);
    color: white;
  }
}

.demo1 {
  padding: 8px;
  background-image: url("../../assets/hand.jpg");
  background-repeat: no-repeat;
  border: 15px dotted rgba(202, 87, 87, 0.253);
  background-origin: border-box;
}

.demo2 {
  padding: 8px;
  background-image: url("../../assets/hand.jpg");
  background-repeat: no-repeat;
  border: 15px solid rgb(185, 25, 25);
  background-origin: content-box;
}

.demo3 {
  padding: 12px;
  background-image: url("../../assets/hand.jpg");
  background-repeat: no-repeat;
  border: 15px solid rgba(153, 65, 65, 0.205);

  background-origin: padding-box; // 默认值
}
</style>
