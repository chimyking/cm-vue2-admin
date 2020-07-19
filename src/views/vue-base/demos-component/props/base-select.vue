<!--
 created by chimy 
 自定义v-model
-->
<template>
  <select :selected="selected" @change="$emit('change', $event.target.value)">
    <option :value="option.name" v-for="option in options" :key="option.name">{{ option.label }}</option>
  </select>
</template>
<script>
export default {
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    selected: [String, Number],
    options: Array
  }
}
</script>
<style lang="less" scoped></style>
