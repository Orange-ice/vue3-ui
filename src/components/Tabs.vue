<template>
  <div>
    <h3>Tabs 示例</h3>
    <Tabs>
      <Tab title="标题一">内容1</Tab>
      <Tab title="标题二">内容二</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {}
}
</script>
