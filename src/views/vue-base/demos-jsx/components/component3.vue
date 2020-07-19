<!--
 created by chimy 
-->
<script>
export default {
  functional: true,
  props: ['level'],
  render(createElement, context) {
    console.log(context)
    return createElement('h' + context.props.level, 'Text')
  }
}
</script>
