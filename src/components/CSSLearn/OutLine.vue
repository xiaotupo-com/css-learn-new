<script setup lang="ts">
import CSSLearnItem from '../CSSLearnItem.vue'
import CSSLearnMainTitle from '../layouts/CSSLearnMainTitle.vue'
</script>
<template>
  <CSSLearnMainTitle title="OutLine" />
  <CSSLearnItem>
    <template #heading>1</template>
    <template #content>
      <div class="item1">
        <pre>
.item1 {
  background: yellowgreen;
  border: 10px solid #655;
  outline: 5px solid deeppink;
}
        </pre>
      </div>
    </template>
  </CSSLearnItem>

  <CSSLearnItem>
    <template #heading>2</template>
    <template #content>
      <div class="item2">
        <pre>
.item2 {
  background: yellowgreen;
  outline: 2px dashed rgb(63, 62, 62);
  padding: 30px;
  padding-left: 35px;
  outline-offset: -30px;
}
        </pre>
      </div>
    </template>
  </CSSLearnItem>
</template>

<style lang="css" scoped>
.item1 {
  background: yellowgreen;
  border: 10px solid #655;
  outline: 5px solid deeppink;
}

.item2 {
  background: yellowgreen;
  outline: 2px dashed rgb(63, 62, 62);
  padding: 30px;
  padding-left: 35px;
  outline-offset: -20px;
}
</style>
