<!--
 created by chimy 
-->
<template>
  <article class="page">
    <section>
      <h3>1.常规用法</h3>
      <section>
        <Component1 :level="1">
          常规用法
        </Component1>
        <Component1 :level="2">常规用法</Component1>
        <Component1 :level="3">常规用法</Component1>
        <Component1 :level="4">常规用法</Component1>
        <Component1 :level="5">常规用法</Component1>
        <Component1 :level="6">常规用法</Component1>
      </section>
      <hr />
    </section>
    <section>
      <h3>2.render</h3>
      <section>
        <Component2 :level="1">
          常规用法
        </Component2>
        <Component2 :level="2">常规用法</Component2>
        <Component2 :level="3">常规用法</Component2>
        <Component2 :level="4">常规用法</Component2>
        <Component2 :level="5">常规用法</Component2>
        <Component2 :level="6">常规用法</Component2>
      </section>
      <hr />
    </section>
  </article>
</template>
<script>
export default {
  name: 'ComponentNormal',
  data() {
    return {}
  },
  methods: {},
  computed: {},
  mounted() {},
  components: {
    Component1: () => import('./components/component1.vue'),
    Component2: () => import('./components/component2.vue')
  }
}
</script>
<style lang="less" scoped></style>
