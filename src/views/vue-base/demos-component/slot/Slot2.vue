<!--
 created by chimy 
-->
<template>
  <a v-bind:href="url" class="nav-link">
    <slot>默认</slot>
    {{ user.name }}
  </a>
</template>
<script>
export default {
  props: ['url'],
  data() {
    return {
      user: {
        name: 'child'
      }
    }
  }
}
</script>
<style lang="less" scoped></style>
