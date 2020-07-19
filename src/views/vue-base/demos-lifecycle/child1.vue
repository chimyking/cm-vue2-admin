<!--
 created by chimy 
-->
<template>
  <div class="page">
    child1
    <br />
    parentName:{{ this.parent }}
    <input type="text" v-model="child1" />
  </div>
</template>
<script>
export default {
  props: ['parent'],
  data() {
    return {
      child1: 'child1'
    }
  },
  beforeCreate() {
    console.log('beforeCreate---child1')
  },
  created() {
    console.log('created---child1')
  },
  beforeMount() {
    console.log('beforeMount---child1')
  },
  mounted() {
    console.log('mounted---child1')
  },
  render() {
    console.log('render---child1')
    return (
      <div>
        <p>父组件</p>
        <hr />
        <Child1 />
      </div>
    )
  },
  beforeUpdate() {
    console.log('beforeUpdate---child1')
  },
  updated() {
    console.log('updated---child1')
  },
  beforeDestroy() {
    console.log('beforeDestroy---child1')
  },
  destroyed() {
    console.log('destroyed---child1')
  },
  beforeRouteEnter(to, from, next) {
    // ...
    console.log('beforeRouteEnter---child1')
  },
  activated() {
    console.log('activated---child1')
  },
  beforeRouteLeave(to, from, next) {
    // ...
    console.log('beforeRouteLeave---child1')
  },
  beforeEnter: (to, from, next) => {
    // ...
    console.log('beforeEnter---child1')
  },
  deactivated() {
    console.log('deactivated---child1')
  }
}
</script>
<style lang="less" scoped></style>
