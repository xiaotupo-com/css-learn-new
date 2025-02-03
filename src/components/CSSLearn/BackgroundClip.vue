<script setup lang="ts">
import CSSLearnItem from '../CSSLearnItem.vue'
import AlignLeft from '../AlignLeft.vue'
import CSSLearnMainTitle from '../layouts/CSSLearnMainTitle.vue'
</script>
<template>
  <CSSLearnMainTitle title="BackgroundClip" />
  <p class="p">
    background-clip 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。
  </p>
  <p class="p">
    如果没有设置背景图片（background-image）或背景颜色（background-color），那么这个属性只有在边框（
    border）被设置为非固实（soild）、透明或半透明时才能看到视觉效果（与 border-style 或 border-image
    有关），否则，本属性产生的样式变化会被边框覆盖。
  </p>
  <CSSLearnItem>
    <template #heading>padding-box</template>
    <template #content>
      <div class="item item1">padding-box</div>
      <AlignLeft>
        <pre>
.item1 {
  border: 10px solid hsla(0, 70%, 75%, 0.315);
  background: rgb(219, 63, 63);
  background-clip: padding-box;
}
  </pre
        >
      </AlignLeft>
    </template>
  </CSSLearnItem>

  <CSSLearnItem>
    <template #heading>border-box</template>
    <template #content>
      <div class="item item2">border-box</div>
      <AlignLeft>
        <pre>
.item2 {
  border: 10px solid hsla(0, 70%, 75%, 0.315);
  background: rgb(44, 139, 35);
  background-clip: border-box;
}
  </pre
        >
      </AlignLeft>
    </template>
  </CSSLearnItem>

  <CSSLearnItem>
    <template #heading>content-box</template>
    <template #content>
      <div class="item item3">content-box</div>
      <AlignLeft>
        <pre>
.item3 {
  border: 10px dashed hsla(0, 70%, 75%, 0.315);
  background: rgb(38, 115, 151);
  background-clip: content-box;
}
  </pre
        >
      </AlignLeft>
    </template>
  </CSSLearnItem>

  <CSSLearnItem>
    <template #heading>text</template>
    <template #content>
      <div class="item item4">text</div>
      <AlignLeft>
        <pre>
.item4 {
  font-size: 5rem;
  border: 10px dashed hsla(0, 70%, 75%, 0.315);
  background: linear-gradient(45deg, red, blue);
  background-clip: text;
  color: transparent;
}
  </pre
        >
      </AlignLeft>
    </template>
  </CSSLearnItem>
</template>

<style lang="css" scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  width: 300px;
  height: 300px;
}

.item1 {
  border: 10px solid hsla(0, 70%, 75%, 0.315);
  background: rgb(219, 63, 63);
  background-clip: padding-box;
}

.item2 {
  border: 10px solid hsla(0, 70%, 75%, 0.315);
  background: rgb(44, 139, 35);
  background-clip: border-box;
}

.item3 {
  border: 10px dashed hsla(0, 70%, 75%, 0.315);
  background: rgb(38, 115, 151);
  background-clip: content-box;
}

.item4 {
  font-size: 5rem;
  border: 10px dashed hsla(0, 70%, 75%, 0.315);
  background: linear-gradient(45deg, red, blue);
  background-clip: text;
  color: transparent;
}

.p {
  padding-left: 22px;
  padding-right: 22px;
  padding-bottom: 25px;
  padding-top: 25px;
}
</style>
