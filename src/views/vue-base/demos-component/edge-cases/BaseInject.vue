<!--
 created by chimy 
-->
<template>
  <div class="page">
    <p>inject</p>
  </div>
</template>
<script>
export default {
  inject: ['getMap', 'provideName'],
  data() {
    return {}
  },
  methods: {},
  computed: {},
  mounted() {
    console.log(this.provideName)
    console.log(this.getMap())
  },
  components: {}
}
</script>
<style lang="less" scoped></style>
