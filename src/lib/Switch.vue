<template>
  <div>
    <button class="ice-switch" :class="{'ice-checked': value}" @click="toggle"><span></span></button>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return { toggle }
  }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.ice-switch{
  height: $h;
  width: $h*2;
  border: none;
  background: #cccccc;
  border-radius: $h/2;
  position: relative;
  cursor: pointer;
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    border-radius: $h2/2;
    background: #ffffff;
    transition: all 250ms;
  }
  &.ice-checked{
    background: #2d8cf0;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:active{
    > span{width: $h2 + 4px;}
  }
  &.ice-checked:active{
    >span{width: $h2 + 4px;margin-right: -4px;}
  }
}
</style>
