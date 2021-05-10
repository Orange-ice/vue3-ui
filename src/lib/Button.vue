<template>
  <button class="ice-button" :class="classes">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  setup(props) {
    const { theme, size } = props;
    const classes = computed(() => {
      return {
        [`ice-theme-${theme}`]: theme,
        [`ice-size-${size}`]: size,
      }
    })
    return { classes };
  }
}
</script>

<style lang="scss">
$h:32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.ice-button{
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: #ffffff;
  color: $color;
  border: solid 1px $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  //& + & {margin-left: 8px;}
  &:hover, &:focus {color: $blue;border-color: $blue;}
  &:focus {outline: none;}
  &::-moz-focus-inner {border: 0;}

  &.ice-theme-link{
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    background: none;
    &:hover, &:focus{
      color: lighten($blue, 10%);
    }
  }
  &.ice-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    background: none;
    &:focus, &:hover{
      background: darken(white, 5%);
    }
  }

  &.ice-size-large{
    font-size: 20px;
    height: 40px;
    padding: 0 16px;
  }
  &.ice-size-small{
    font-size: 12px;
    height: 24px;
    padding: 0 8px;
  }

}
</style>
