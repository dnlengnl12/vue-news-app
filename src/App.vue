<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
export default {
  components: {
    'tool-bar': ToolBar,
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
ul {
  display: flex;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
}
</style>