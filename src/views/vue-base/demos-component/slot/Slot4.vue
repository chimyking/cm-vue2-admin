<!--
 created by chimy 
-->
<template>
  <div class="container">
    <div><slot v-bind:user="user"></slot></div>

    <div><slot name="other" v-bind:user2="user2"></slot></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: 'child'
      },
      user2: {
        name: 'child2'
      }
    }
  }
}
</script>
<style lang="less" scoped></style>
