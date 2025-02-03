<script setup lang="ts">
import CSSLearnMainTitle from '../layouts/CSSLearnMainTitle.vue'
import CSSLearnItem from '../CSSLearnItem.vue'
</script>
<template>
  <CSSLearnMainTitle title="三角形小箭头" />
  <CSSLearnItem>
    <template #heading>TriangleArrow</template>
    <template #content>
      <div class="callout">
        Labore duis nostrud nostrud excepteur fugiat voluptate aliquip incididunt occaecat nulla et.
        Culpa eiusmod deserunt ipsum in nostrud laborum esse ut velit anim laborum. Aliqua aliquip
        eiusmod nulla in esse tempor magna fugiat. Nostrud ut aliquip magna sint qui excepteur
        nostrud sunt.
      </div>
    </template>
  </CSSLearnItem>
</template>

<style lang="css" scoped>
.callout {
  top: 0;
  left: 0;
  position: relative;
  width: 400px;
  background: green;
  padding: 1em;
  color: white;
  font-size: 1.5em;
  border-radius: 0.5em;
}

.callout::before {
  content: '';
  position: absolute;
  top: -0.3em;
  left: 1em;
  padding: 0.35em;
  background: inherit;
  border: inherit;
  border-bottom: 0;
  transform: rotate(45deg);
}
</style>
