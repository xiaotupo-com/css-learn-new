<!-- 径向渐变 -->
<script setup lang="ts">
import CSSLearnMainTitle from '@/components/layouts/CSSLearnMainTitle.vue';
import CSSLearnItem from '@/components/CSSLearnItem.vue';
</script>

<template>
  <CSSLearnMainTitle title="径向渐变" />
  <CSSLearnItem>
    <template #heading>径向渐变</template>
    <template #content>
      <div class="demo demo1">
        <pre>
.demo1 {
  background: #655;
  background-image: radial-gradient(tan 30%, transparent 0);
  background-size: 30px 30px;
}
        </pre>
      </div>

      <div class="demo demo2">
        <pre>
.demo2 {
  background: #655;
  background-image: radial-gradient(tan 30%, transparent 0),
    radial-gradient(tan 30%, transparent 0);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
}
        </pre>
      </div>

      <div class="demo demo3">
        <pre>
.demo2 {
  background: #655;
  background-image: radial-gradient(tan 30%, transparent 0),
    radial-gradient(tan 30%, transparent 0);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
}
        </pre>
      </div>

      <div class="demo demo4">
        <pre>
.demo4 {
  background: #ffffff5d;
  background-image: linear-gradient(90deg, #c2c2c2dc 50%, transparent 0),
    linear-gradient(180deg, #c2c2c2dc 50%, transparent 0);
  background-size: 35px 35px;
}
        </pre>
      </div>
    </template>
  </CSSLearnItem>
</template>

<style lang="scss" scoped>
.demo {
  // height: 200px;
  color: rgba(255, 255, 255, 0.651);

  >pre {
    opacity: 0;

    &:hover {
      opacity: 1;
      background: black;
    }
  }
}

.demo1 {
  background: rgb(228, 193, 193);
  background-image: radial-gradient(rgb(56, 141, 71) 30%, transparent 0);
  background-size: 30px 30px;
}

.demo2 {
  background: #655;
  background-image: radial-gradient(tan 30%, transparent 0),
    radial-gradient(tan 30%, transparent 0);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
}

.demo3 {
  @include polka(100px, 45%, #655, rgb(68, 208, 218));
}

.demo4 {
  background: #ffffff5d;
  background-image: linear-gradient(90deg, #c2c2c2dc 50%, transparent 0),
    linear-gradient(180deg, #c2c2c2dc 50%, transparent 0);
  background-size: 35px 35px;
}
</style>
