<!--
 created by chimy 
-->
<template>
  <div class="page">
    <h1 v-if="level === 1">
      <slot></slot>
    </h1>
    <h2 v-else-if="level === 2">
      <slot></slot>
    </h2>
    <h3 v-else-if="level === 3">
      <slot></slot>
    </h3>
    <h4 v-else-if="level === 4">
      <slot></slot>
    </h4>
    <h5 v-else-if="level === 5">
      <slot></slot>
    </h5>
    <h6 v-else-if="level === 6">
      <slot></slot>
    </h6>
  </div>
</template>
<script>
export default {
  props: ['level'],
  data() {
    return {}
  },
  methods: {},
  computed: {},
  mounted() {},
  components: {}
}
</script>
<style lang="less" scoped></style>
