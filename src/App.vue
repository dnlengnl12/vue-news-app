<template>
  <div id="app">
    <tool-bar></tool-bar>
    <Transition name="page">
      <router-view></router-view>
    </Transition>
    <spinner-component :loading="loadingStatus"></spinner-component>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import SpinnerComponent from './components/SpinnerComponent.vue';
import bus from './utils/bus';

export default {
  components: {
    'tool-bar': ToolBar,
    SpinnerComponent
  },
  data() {
    return {
      loadingStatus: false
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
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
  color: #354952;
}

a:hover {
  color: #42b883;
}

a.router-link-exact-active {
  text-decoration: underline;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>