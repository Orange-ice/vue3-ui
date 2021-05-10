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
    },
    level: String
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`ice-theme-${theme}`]: theme,
        [`ice-size-${size}`]: size,
        [`ice-level-${level}`]: level,
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
$primary: #2d8cf0;
$success: #19be6b;
$warning: #ff9900;
$error: #ed4014;
$info: #909399;
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
  transition: background 250ms;
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

  &.ice-theme-button{
    &.ice-level-primary{
      background: $primary;
      color: white;
      border-color: $primary;
      &:hover, &:focus{
        background: darken($primary, 8%);
        border-color: darken($primary, 8%);
      }
    }
    &.ice-level-success{
      background: $success;
      color: white;
      border-color: $success;
      &:hover, &:focus{
        background: darken($success, 8%);
        border-color: darken($success, 8%);
      }
    }
    &.ice-level-warning{
      background: $warning;
      color: white;
      border-color: $warning;
      &:hover, &:focus{
        background: darken($warning, 8%);
        border-color: darken($warning, 8%);
      }
    }
    &.ice-level-error{
      background: $error;
      color: white;
      border-color: $error;
      &:hover, &:focus{
        background: darken($error, 8%);
        border-color: darken($error, 8%);
      }
    }
    &.ice-level-info{
      background: $info;
      color: white;
      border-color: $info;
      &:hover, &:focus{
        background: darken($info, 8%);
        border-color: darken($info, 8%);
      }
    }
  }

}
</style>
