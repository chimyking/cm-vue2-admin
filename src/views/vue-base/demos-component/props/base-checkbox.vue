<!--
 created by chimy 
 自定义v-model
-->
<template>
  <input type="checkbox" v-bind:checked="checked" v-on:change="$emit('change', $event.target.checked)" />
</template>
<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  }
}
</script>
<style lang="less" scoped></style>
