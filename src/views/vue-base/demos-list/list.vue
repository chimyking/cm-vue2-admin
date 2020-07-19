<!--
 created by chimy 
-->
<template>
  <article>
    <section>
      <li v-for="item in arr" :key="item.key">{{ item.name }}</li>
      <button v-for="button in buttons" :key="button.name" @click="button.fn">{{ button.name }}</button>
    </section>
  </article>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        { key: 1, name: 'tom' },
        { key: 3, name: 'amy' },
        { key: 2, name: 'lihua' }
      ],
      buttons: [
        { name: 'push', fn: this.push },
        { name: 'pop', fn: this.pop },
        { name: 'shift', fn: this.shift },
        { name: 'unshift', fn: this.unshift },
        { name: 'splice', fn: this.splice },
        { name: 'sort', fn: this.sort },
        { name: 'reverse', fn: this.reverse }
      ]
    }
  },
  methods: {
    push() {
      this.arr.push({ key: 4, name: 'aa' })
      console.log('push')
    },
    pop() {
      this.arr.pop()
      console.log('pop')
    },
    shift() {
      this.arr.shift()
      console.log('shift')
    },
    unshift() {
      this.arr.unshift({ key: 0, name: '000' })
      console.log('unshift')
    },
    splice() {
      this.arr.splice(0, 1)
      console.log('splice')
    },
    sort() {
      this.arr.sort((a, b) => {
        if (a.key < b.key) {
          // 按某种排序标准进行比较, a 小于 b
          return -1
        }
        if (a.key > b.key) {
          return 1
        }
        // a must be equal to b
        return 0
      })
      console.log('sort')
    },
    reverse() {
      this.arr.reverse()
      console.log('reverse')
    }
  },
  computed: {},
  mounted() {},
  components: {}
}
</script>
<style lang="less" scoped></style>
