<template>
  <div>
    <h3>Tabs 示例</h3>
    <Tabs v-model:selected="selected">
      <Tab title="标题一">内容1</Tab>
      <Tab title="标题2222">内容2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import { ref } from 'vue';
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const selected = ref('标题2222')
    return { selected }
  }
}
</script>
