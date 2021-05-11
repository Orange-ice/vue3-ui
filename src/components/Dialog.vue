<template>
  <div>
    Dialog 示例
    <Button @click="toggle">Toggle</Button>
    <Dialog v-model:visible="visible" :confirm="confirm" :cancel="cancel">
      <template v-slot:title>
        <p style="color: red;">标题</p>
      </template>
      <template v-slot:content>
        <div>Dialog 组件</div>
        <div>hello</div>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue';
import { ref } from 'vue';
export default {
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value
    }
    const confirm = () => {
      console.log('confirm');
      return false
    };
    const cancel = () => {
      console.log('cancel');
    }
    return { visible, toggle, confirm, cancel }
  }
}
</script>
