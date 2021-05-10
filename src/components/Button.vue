<template>
  <h3>Button theme 示例</h3>
  <Button>你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
  <h3>Button size 示例</h3>
  <Button size="large">Large</Button>
  <Button>Normal</Button>
  <Button size="small">Small</Button>
  <h3>Button level 示例</h3>
  <Button level="primary">Primary</Button>
  <Button level="success">Success</Button>
  <Button level="warning">Warning</Button>
  <Button level="error">Error</Button>
  <Button level="info">Info</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button }
}
</script>

<style lang="scss" scoped>
h3{margin-top: 40px;}
button{
  margin-right: 16px;
  margin-top: 10px;
}
</style>
