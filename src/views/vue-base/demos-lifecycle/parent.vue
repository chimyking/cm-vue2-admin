<!--
 created by chimy 
-->
<script>
import Child1 from './child1'
import Child2 from './child2'
export default {
  name: 'LifeCycleParent',
  data() {
    return {
      parent: 'parent'
    }
  },
  methods: {
    handleInput(e) {
      this.parent = e.target.value
    }
  },
  // 生命周期
  beforeCreate() {
    console.log('beforeCreate---parent')
  },
  created() {
    console.log('created---parent')
  },
  beforeMount() {
    console.log('beforeMount---parent')
  },
  mounted() {
    console.log('mounted---parent')
  },
  render() {
    console.log('render---parent')
    return (
      <div>
        <p>父组件</p>
        <input value={this.parent} onInput={this.handleInput} />
        {this.parent}
        <hr />

        <Child1 parent={this.parent} />
        <Child2 parent={this.parent} />
      </div>
    )
  },
  beforeUpdate() {
    console.log('beforeUpdate---parent')
  },
  updated() {
    console.log('updated---parent')
  },
  beforeDestroy() {
    console.log('beforeDestroy---parent')
  },
  destroyed() {
    console.log('destroyed---parent')
  },
  beforeRouteEnter(to, from, next) {
    // ...
    console.log('beforeRouteEnter---parent')
    next()
  },
  activated() {
    console.log('activated---parent')
  },
  beforeRouteLeave(to, from, next) {
    // ...
    console.log('beforeRouteLeave---parent')
    next()
  },
  beforeEnter: (to, from, next) => {
    // ...
    console.log('beforeEnter---parent')
    next()
  },
  deactivated() {
    console.log('deactivated---parent')
  }
}
</script>
