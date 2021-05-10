<template>
  <h3>Button 示例</h3>
  <Button>你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button }
}
</script>
