<!--
 created by chimy 
测试
-->
<template>
  <article class="page">
    <section>
      <h3>自定义v-model</h3>
      <section>
        <BaseCheckbox v-model="checked" />
        <div>checked:{{ checked }}</div>
        <br />
        <BaseText v-model="text" />
        <div>text:{{ text }}</div>
        <br />
        <BaseSelect v-model="selected" :options="options" />
        <div>selected:{{ selected }}</div>
        <br />
      </section>
      <hr />
    </section>
    <section>
      <h3>将原生事件绑定到组件</h3>
      <section>
        <BaseListeners @focus="onFocus" label="$listeners" />
        <br />
      </section>
      <hr />
      <section>
        <BaseSync :title.sync="syncTitle" :obj.sync="syncObj" />
        <div>{{ syncTitle }}</div>
        <div>{{ syncObj }}</div>
        <br />
      </section>
      <hr />
    </section>
  </article>
</template>
<script>
import BaseCheckbox from './props/base-checkbox'
import BaseText from './props/base-text'
import BaseSelect from './props/base-select'
import BaseListeners from './props/base-listeners'
import BaseSync from './props/base-sync'
export default {
  data() {
    return {
      checked: true,
      text: 'aa',
      selected: 'b',
      syncTitle: 'syncTitle',
      syncObj: {
        a: 'a',
        b: 'b'
      },
      options: [
        { name: 'a', label: 'a' },
        { name: 'b', label: 'b' }
      ]
    }
  },
  methods: {
    onFocus() {
      console.log('onFocus')
    }
  },
  computed: {},
  mounted() {},
  components: {
    BaseCheckbox,
    BaseText,
    BaseListeners,
    BaseSync,
    BaseSelect
  }
}
</script>
<style lang="less" scoped></style>
