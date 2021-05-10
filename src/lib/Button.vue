<template>
  <button class="ice-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="ice-loadingIndicator"></span>
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
    level: String,
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
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
$disabled: #c5d0e0;
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

  &.ice-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    background: none;
    &:focus, &:hover{
      color: lighten($blue, 10%);
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
    &.ice-level-primary:not([disabled]){
      background: $primary;
      color: white;
      border-color: $primary;
      &:hover, &:focus{
        background: darken($primary, 8%);
        border-color: darken($primary, 8%);
      }
    }
    &.ice-level-success:not([disabled]){
      background: $success;
      color: white;
      border-color: $success;
      &:hover, &:focus{
        background: darken($success, 8%);
        border-color: darken($success, 8%);
      }
    }
    &.ice-level-warning:not([disabled]){
      background: $warning;
      color: white;
      border-color: $warning;
      &:hover, &:focus{
        background: darken($warning, 8%);
        border-color: darken($warning, 8%);
      }
    }
    &.ice-level-error:not([disabled]){
      background: $error;
      color: white;
      border-color: $error;
      &:hover, &:focus{
        background: darken($error, 8%);
        border-color: darken($error, 8%);
      }
    }
    &.ice-level-info:not([disabled]){
      background: $info;
      color: white;
      border-color: $info;
      &:hover, &:focus{
        background: darken($info, 8%);
        border-color: darken($info, 8%);
      }
    }
  }

  &.ice-theme-button{
    &[disabled]{
      cursor: not-allowed;
      color: $disabled;
      &:hover{border-color: $disabled}
    }
    &.ice-level-primary[disabled]{
      background: lighten($primary, 20%);
      color: white;
      border-color: lighten($primary, 20%);
    }
    &.ice-level-success[disabled] {
      background: lighten($success, 20%);
      color: white;
      border-color: lighten($success, 20%);
    }
    &.ice-level-warning[disabled] {
      background: lighten($warning, 20%);
      color: white;
      border-color: lighten($warning, 20%);
    }
    &.ice-level-error[disabled] {
      background: lighten($error, 20%);
      color: white;
      border-color: lighten($error, 20%);
    }
    &.ice-level-info[disabled] {
      background: lighten($info, 20%);
      color: white;
      border-color: lighten($info, 20%);
    }
  }
  &.ice-theme-text{
    &[disabled]{
      cursor: not-allowed;
      color: $disabled;
    }
  }

  > .ice-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-radius: 8px;
    border-width: 1px;
    animation: ice-span 1s infinite linear;
  }
}
@keyframes ice-span {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>
