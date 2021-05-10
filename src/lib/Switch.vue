<template>
  <div>
    <button><span></span></button>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button{
  height: $h;
  width: $h*2;
  border: none;
  background: blue;
  border-radius: $h/2;
  position: relative;
}
span{
  position: absolute;
  top: 2px;
  left: 2px;
  width: $h2;
  height: $h2;
  border-radius: $h2/2;
  background: #ffffff;
}
</style>
