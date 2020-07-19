<!--
 created by chimy 
-->
<script>
export default {
  props: ['msg'],
  render() {
    return (
      <div>
        <p>子组件</p>
        <p>msg: {this.msg}</p>
      </div>
    )
  }
}
</script>
