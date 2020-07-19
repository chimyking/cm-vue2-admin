<!--
 created by chimy 
 动态组件
-->
<template>
  <div class="page">
    <button @click="componentId = 'componentA'">componentA</button>
    <button @click="componentId = 'componentB'">componentB</button>
    <button @click="componentId = 'componentC'">componentC</button>
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      componentId: 'componentA'
    }
  },
  methods: {},
  computed: {},
  mounted() {},
  components: {
    componentA: () => import('./components/componentA'),
    componentB: () => import('./components/componentB'),
    componentC: () => import('./components/componentB')
  }
}
</script>
<style lang="less" scoped></style>
