<!--
 created by chimy 
测试
-->
<template>
  <article class="page">
    <section>
      <h3>1.访问元素 & 组件</h3>
      <section>
        <h6>访问根实例(this.$root)</h6>
        <BaseRoot />
      </section>
      <section>
        <h6>访问父级组件实例(this.$parent)</h6>
        <BaseParent />
      </section>
      <section>
        <h6>依赖注入(inject-provide)</h6>
        <BaseProvide> <BaseInject></BaseInject></BaseProvide>
      </section>
      <hr />
    </section>
    <section>
      <h3>2.程序化的事件侦听器</h3>
      <section></section>
      <hr />
    </section>
    <section>
      <h3>3.访问元素 & 组件</h3>
      <section></section>
      <hr />
    </section>
    <section>
      <h3>4.循环引用</h3>
      <section></section>
      <hr />
    </section>
    <section>
      <h3>5.模板定义的替代品</h3>
      <section></section>
      <hr />
    </section>
    <section>
      <h3>6.控制更新</h3>
      <section></section>
      <hr />
    </section>
  </article>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: 'parent'
      }
    }
  },
  methods: {},
  computed: {
    foo() {
      return this.user.name + 1
    }
  },
  mounted() {},
  components: {
    BaseRoot: () => import('./edge-cases/root'),
    BaseParent: () => import('./edge-cases/parent'),
    BaseInject: () => import('./edge-cases/BaseInject'),
    BaseProvide: () => import('./edge-cases/BaseProvide')
  }
}
</script>
<style lang="less" scoped></style>
