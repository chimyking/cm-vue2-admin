<!--
 created by chimy 
 自定义v-model
-->
<template>
  <div>
    <input type="text" v-bind:value="value" v-on:input="$emit('update:title', $event.target.value)" />
    <button @click="$emit('update:obj', { a: 'a1', b: 'b1' })">update</button>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    obj: Object
  }
}
</script>
<style lang="less" scoped></style>
