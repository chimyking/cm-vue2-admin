<!--
 created by chimy 
-->
<template>
  <article class="page">
    <section>
      <p>
        Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡
      </p>
      <ul>
        <li>条件渲染 (使用 v-if)</li>
        <li>条件展示 (使用 v-show)</li>
        <li>动态组件</li>
        <li>组件根节点</li>
      </ul>
      <p>
        当插入或删除包含在 transition 组件中的元素时，Vue 将会做以下处理：
      </p>
      <ul>
        <li>1.自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。</li>
        <li>2.如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用。</li>
        <li>
          3.果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除)
          在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 Vue 的 nextTick 概念不同)
        </li>
      </ul>
    </section>
    <section>
      <h3>1.单元素/组件的过渡</h3>
      <section>
        <h5>1.基本过度</h5>
        <Transitions1 />
        <br />
        <h5>2.基本过度</h5>
        <br />
        <h5>3.CSS 过渡</h5>
        <br />
        <h5>4.CSS 动画</h5>
        <br />
        <h5>5.自定义过渡的类名</h5>
        <br />
        <h5>6.同时使用过渡和动画</h5>
        <br />
        <h5>7.显性的过渡持续时间</h5>
        <br />
        <h5>8.JavaScript 钩子</h5>
        <br />
      </section>
      <hr />
    </section>
    <section>
      <h3>2.初始渲染的过渡</h3>
      <section>
        <br />
      </section>
      <hr />
    </section>
    <section>
      <h3>3.多个元素的过渡</h3>
      <section>
        <br />
      </section>
      <hr />
    </section>
    <section>
      <h3>4.多个组件的过渡</h3>
      <section>
        <br />
      </section>
      <hr />
    </section>
    <section>
      <h3>5.列表过渡</h3>
      <section>
        <br />
      </section>
      <hr />
    </section>
    <section>
      <h3>6.可复用的过渡</h3>
      <section>
        <br />
      </section>
      <hr />
    </section>
    <section>
      <h3>6.动态过渡</h3>
      <section>
        <br />
      </section>
      <hr />
    </section>
  </article>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  computed: {},
  mounted() {},
  components: {
    Transitions1: () => import('./components/Transitions1.vue')
  }
}
</script>
<style scoped></style>
