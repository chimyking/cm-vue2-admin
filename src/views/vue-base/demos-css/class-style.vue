<!--
 created by chimy 
-->
<template>
  <article>
    <section>
      <head>
        class: 对象语法
      </head>
      <section v-pre>
        <div v-bind:class="{ active: isActive }">class: 对象语法</div>
      </section>
      <section v-pre>
        <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">class: 对象语法</div>
      </section>
    </section>
    <section>
      <head>
        class: 数组语法
      </head>
      <section v-pre>
        <div v-bind:class="[activeClass, errorClass]">class: 数组语法</div>
      </section>
    </section>
    <section>
      <head>
        style: 对象语法
      </head>
      <section v-pre>
        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
      </section>
      <section v-pre>
        <div v-bind:style="styleObject"></div>
      </section>
    </section>
    <section>
      <head>
        style: 数组语法
      </head>

      <section v-pre>
        <div v-bind:style="[baseStyles, overridingStyles]">style: 数组语法</div>
      </section>
    </section>
  </article>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      baseStyles: {
        color: 'red'
      },
      overridingStyles: {
        fontSize: '13px'
      }
    }
  },
  methods: {},
  watch: {},
  computed: {},
  mounted() {},
  components: {}
}
</script>
<style lang="less" scoped></style>
