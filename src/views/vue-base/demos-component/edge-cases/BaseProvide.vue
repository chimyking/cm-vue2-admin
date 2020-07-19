<!--
 created by chimy 
-->
<template>
  <div class="page">
    <p>provide</p>
    <slot></slot>
  </div>
</template>
<script>
export default {
  provide: function() {
    return {
      getMap: this.getMap,
      provideName: this.provideName
    }
  },
  data() {
    return {
      provideName: 'provideName'
    }
  },
  methods: {
    getMap() {
      return 'map'
    }
  },
  computed: {},
  mounted() {},
  components: {}
}
</script>
<style lang="less" scoped></style>
