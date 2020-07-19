<!--
 created by chimy 
-->
<template>
  <div class="page">
    child2
    <br />
    parentName:{{ this.parent }}
    <input type="text" v-model="child2" />
  </div>
</template>
<script>
export default {
  props: ['parent'],
  data() {
    return {
      child2: 'child2'
    }
  },
  beforeCreate() {
    console.log('beforeCreate---child2')
  },
  created() {
    console.log('created---child2')
  },
  beforeMount() {
    console.log('beforeMount---child2')
  },
  mounted() {
    console.log('mounted---child2')
  },
  render() {
    console.log('render---child2')
    return (
      <div>
        <p>父组件</p>
        <hr />
        <child2 />
      </div>
    )
  },
  beforeUpdate() {
    console.log('beforeUpdate---child2')
  },
  updated() {
    console.log('updated---child2')
  },
  beforeDestroy() {
    console.log('beforeDestroy---child2')
  },
  destroyed() {
    console.log('destroyed---child2')
  },
  beforeRouteEnter(to, from, next) {
    // ...
    console.log('beforeRouteEnter---child2')
    next()
  },
  activated() {
    console.log('activated---child2')
  },
  beforeRouteLeave(to, from, next) {
    // ...
    console.log('beforeRouteLeave---child2')
    next()
  },
  beforeEnter: (to, from, next) => {
    // ...
    console.log('beforeEnter---child2')
    next()
  },
  deactivated() {
    console.log('deactivated---child2')
  }
}
</script>
<style lang="less" scoped></style>
