<script setup lang="ts">
import CSSLearnMainTitle from '../layouts/CSSLearnMainTitle.vue';
import CSSLearnItem from '../CSSLearnItem.vue';
</script>

<template>
  <CSSLearnMainTitle title="边框内圆角" />
  <CSSLearnItem>
    <template #heading>使用两个元素嵌套实现边框内圆角</template>
    <template #content>
      <div class="something-meaningful">
        <div>使用两个元素嵌套实现边框内圆角</div>
        <pre>
.something-meaningful {
  background: #655;
  padding: .8rem;

  >div {
    background: tan;
    border-radius: .8rem;
    padding: 1rem;
  }
}
</pre>
      </div>
    </template>
  </CSSLearnItem>
</template>

<style lang="scss" scoped>
.something-meaningful {
  background: #655;
  padding: .8rem;
  color: white;

  >div {
    background: tan;
    border-radius: .8rem;
    padding: 1rem;
  }
}
</style>
