<!--
 created by chimy 
-->
<template>
  <article class="page">
    <section>
      <h3>1.template functional</h3>
      <section>
        <input type="text" v-model="level" />
        <Component3 :level="level">parent </Component3>
      </section>
      <hr />
    </section>
  </article>
</template>
<script>
export default {
  name: 'ComponentFunctional',
  data() {
    return {
      level: 1
    }
  },
  methods: {},
  computed: {},
  mounted() {},
  components: {
    Component3: () => import('./components/component3.vue')
  }
}
</script>
<style lang="less" scoped></style>
