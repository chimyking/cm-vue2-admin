<!--
 created by chimy 
-->
<template>
  <div class="page">ComponentB</div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  computed: {},
  beforeCreate() {
    console.log('beforeCreate bb')
  },
  created() {
    console.log('created bb')
  },
  beforeMount() {
    console.log('beforeMount bb')
  },
  activated() {
    console.log('activated bb')
  },
  deactivated() {
    console.log('deactivated bb')
  },
  mounted() {
    console.log('mounted bb')
  },
  beforeUpdate() {
    console.log('beforeUpdate bb')
  },
  updated() {
    console.log('updated bb')
  },
  beforeDestroy() {
    console.log('beforeDestroy bb')
  },
  destroyed() {
    console.log('destroyed bb')
  },
  components: {}
}
</script>
<style lang="less" scoped></style>
