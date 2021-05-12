<template>
  <div class="ice-tabs">
    <div class="ice-tabs-nav" ref="container">
      <div
          class="ice-tabs-nav-item"
          :class="{selected: t===selected}"
          v-for="(t, index) in titles"
          :key="index"
          @click="changeSelected(t)"
          :ref="el => {if(el) navItems[index] = el }"
      >
        {{t}}
      </div>
      <div class="ice-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="ice-tabs-content">
      <component class="ice-tabs-content-item" :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue';
import { computed, onMounted, onUpdated, ref } from 'vue';

export default {
  props: {
    selected: String
  },
  setup (props, context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const container = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
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
    const location = () => {
      const divs = navItems.value
      const result = divs.filter(div => div.classList.contains('selected'))[0];
      const { width, left: resultLeft } = result.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const { left: containerLeft } = container.value.getBoundingClientRect();
      const left = resultLeft - containerLeft;
      indicator.value.style.left = left + 'px'
    }
    onMounted(location);
    onUpdated(location)
    return { defaults, titles, changeSelected, current, container, indicator, navItems };
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
    position: relative;

    &-item{
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child{margin-left: 0;}
      &.selected{color: $blue;}
    }

    &-indicator{
      position: absolute;
      height: 3px;
      width: 100px;
      background: $blue;
      left: 0;
      bottom: -1px;
      transition: all 250ms;
    }
  }

  &-content{
    padding: 8px 0;
  }
}
</style>
