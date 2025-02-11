<script setup lang="ts">
import AlignLeft from '../AlignLeft.vue'
import CSSLearnMainTitle from '../layouts/CSSLearnMainTitle.vue'
import CSSLearnItem from '../CSSLearnItem.vue'
</script>
<template>
  <CSSLearnMainTitle title="BoxShadow" />
  <CSSLearnItem>
    <template #heading>BoxShadow</template>
    <template #content>
      <div class="container">
        <div class="item">水平偏移，垂直偏移，模糊半径设为 0，然后设置扩展半径</div>
        <AlignLeft>
          <pre>
.item {
  margin: 50px;
  width: 300px;
  height: 100px;
  background: yellowgreen;
  box-shadow: 0 0 0 10px rgb(189, 52, 52),
              0 0 0 20px hsla(143, 61%, 61%, 0.863),
              0 0 0 30px hsla(209, 67%, 62%, 0.863);
}
      </pre>
        </AlignLeft>
      </div>
      <hr>
      <div class="container">
        <button class="btn">Ok</button>
        <AlignLeft>
          <pre>
.item {
  margin: 50px;
  width: 300px;
  height: 100px;
  background: yellowgreen;
  box-shadow: 0 0 0 10px rgb(189, 52, 52),
              0 0 0 20px hsla(143, 61%, 61%, 0.863),
              0 0 0 30px hsla(209, 67%, 62%, 0.863);
}
      </pre>
        </AlignLeft>
      </div>
    </template>
  </CSSLearnItem>
</template>

<style lang="css" scoped>
.item {
  margin: 50px;
  width: 300px;
  height: 100px;
  background: yellowgreen;
  box-shadow:
    0 0 0 10px rgb(189, 52, 52),
    0 0 0 20px hsla(143, 61%, 61%, 0.863),
    0 0 0 30px hsla(209, 67%, 62%, 0.863);
}

.btn {
  padding: 6px 12px;
}
</style>
