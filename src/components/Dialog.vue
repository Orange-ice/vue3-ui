<template>
  <div>
    <h3 style="margin-bottom: 20px">Dialog 示例</h3>
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

    <h3 style="margin: 20px 0">js触发直接打开Dialog</h3>
    <Button @click="showDialog">Open</Button>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue';
import { openDialog } from '../lib/openDialog';
import { h, ref } from 'vue';
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
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '注意'),
        content: '各单位请注意',
        confirm,
        cancel
      })
    };
    return { visible, toggle, confirm, cancel, showDialog }
  }
}
</script>
