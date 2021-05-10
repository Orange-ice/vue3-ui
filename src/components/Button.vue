<template>
  <h3>Button theme 示例</h3>
  <Button theme="button">你好</Button>
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

  <h3>Button disabled 示例</h3>
  <Button disabled>Disabled</Button>
  <Button theme="text" disabled>Disabled</Button>
  <br/>
  <Button level="primary" disabled>Primary</Button>
  <Button level="success" disabled>Success</Button>
  <Button level="warning" disabled>Warning</Button>
  <Button level="error" disabled>Error</Button>
  <Button level="info" disabled>Info</Button>

  <h3>Button Loading 示例</h3>
  <Button :loading="loading" @click="toggle">Loading</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import { ref } from 'vue';
export default {
  components: { Button },
  setup() {
    const loading = ref(true);
    const toggle = () => {
      loading.value = !loading.value
    }
    return { loading, toggle }
  }
}
</script>

<style lang="scss" scoped>
h3{margin-top: 40px;}
button{
  margin-right: 16px;
  margin-top: 10px;
}
</style>
