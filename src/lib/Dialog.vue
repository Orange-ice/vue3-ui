<template>
  <div class="ice-dialog-overlay"></div>
  <div class="ice-dialog-wrapper">
    <header>Title</header>
    <main>
      <p>content1</p>
      <p>content2</p>
    </main>
    <footer>
      <Button level="primary">确定</Button>
      <Button>取消</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
  components: { Button }
}
</script>
