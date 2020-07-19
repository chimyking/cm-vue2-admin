<!--
 created by chimy 
-->
<script>
import Component4 from './components/component4.vue'
export default {
  name: 'ComponentNormal',
  data() {
    return { msg: 'default' }
  },
  render() {
    return (
      <div>
        <p>父组件</p>
        <hr />
        <Component4 msg={this.msg} />
      </div>
    )
  },
  methods: {},
  computed: {},
  mounted() {}
}
</script>
<style lang="less" scoped></style>
