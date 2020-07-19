<!--
 created by chimy 
-->
<template>
  <div class="page">ComponentA</div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  computed: {},

  beforeCreate() {
    console.log('beforeCreate a')
  },
  created() {
    console.log('created a')
  },
  beforeMount() {
    console.log('beforeMount a')
  },
  mounted() {
    console.log('mounted a')
  },
  activated() {
    console.log('activated aa')
  },
  deactivated() {
    console.log('deactivated aa')
  },
  beforeUpdate() {
    console.log('beforeUpdate a')
  },
  updated() {
    console.log('updated a')
  },
  beforeDestroy() {
    console.log('beforeDestroy a')
  },
  destroyed() {
    console.log('destroyed a')
  },
  components: {}
}
</script>
<style lang="less" scoped></style>
