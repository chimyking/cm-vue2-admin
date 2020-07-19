<!--
 created by chimy 
 自定义v-model
-->
<template>
  <input type="text" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: [String, Number]
  }
}
</script>
<style lang="less" scoped></style>
