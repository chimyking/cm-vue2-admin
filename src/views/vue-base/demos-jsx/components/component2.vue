<!--
 created by chimy 
 render写法
-->
<script>
export default {
  props: ['level'],
  data() {
    return {}
  },
  render(h) {
    return h(
      'h' + this.level, // 便签名称
      this.$slots.default // 子节点数组
    )
  }
}
</script>
<style lang="less" scoped></style>
