<template>
  <div class="ice-tabs">
    <div class="ice-tabs-nav">
      <div
          class="ice-tabs-nav-item"
          :class="{selected: t===selected}"
          v-for="(t, index) in titles"
          :key="index"
          @click="changeSelected(t)"
      >
        {{t}}
      </div>
    </div>
    <div class="ice-tabs-content">
      <component class="ice-tabs-content-item" :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue';
import { computed } from 'vue';

export default {
  props: {
    selected: String
  },
  setup (props, context) {
    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw Error('Tabs 的子标签必须是 Tab')
      }
    });
    const current = computed(() => {
      return defaults.filter(tag => {
        return tag.props.title === props.selected
      })[0]
    })
    const titles = defaults.map(tag => {
      return tag.props.title
    })
    const changeSelected = (title: string) => {
      context.emit('update:selected', title)
    }
    return { defaults, titles, changeSelected, current };
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.ice-tabs{
  &-nav{
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item{
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child{margin-left: 0;}
      &.selected{color: $blue;}
    }
  }

  &-content{
    padding: 8px 0;
  }
}
</style>
