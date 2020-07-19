<!--
 created by chimy 
-->
<template>
  <a v-bind:href="url" class="nav-link">
    <slot>默认</slot>
  </a>
</template>
<script>
export default {
  props: ['url']
}
</script>
<style lang="less" scoped></style>
