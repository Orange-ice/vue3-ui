<template>
  <header>
    <span>导航</span> | <router-link to="/">ice</router-link> | <router-link to="/ice">ice2</router-link>
  </header>
  <br/>
  <router-view/>
</template>

<script>

export default {
  name: 'App'
}
</script>
