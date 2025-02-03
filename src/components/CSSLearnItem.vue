<script setup lang="ts">
defineProps({
  contentClass: {
    type: String,
    default: 'flex-column',
  },
  titleColorStyle: {
    type: String,
    default: '#202020',
  },
})
</script>

<template>
  <section class="css-part">
    <h2 class="title" :style="{ color: titleColorStyle }">
      <slot name="heading"></slot>
    </h2>
    <div :class="contentClass">
      <slot name="content"></slot>
    </div>
  </section>
</template>

<style lang="css" scoped>
.css-part {
  padding: 20px;
  background: rgb(187, 221, 205);
  margin: 0 var(--sft-margin-x);
  margin-bottom: 24px;
  border-radius: var(--sft-border-radius);
}

.title {
  font-size: 2.25rem;
  padding: 4px 0;
  padding-left: 4px;
  border-bottom: 1px solid #aaaaaa69;
  margin-bottom: 1rem;
  border-left: 8px solid yellowgreen;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flex-row {
  display: flex;
  gap: 12px;
}

.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box-wrap {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
</style>
