<template>
  <div class="app-wrapper">
    <app-head />
    <div class="main-container">
      <app-aside />
      <app-main />
    </div>
  </div>
</template>

<script>
import AppHead from './components/app-head.vue'
import AppAside from './components/app-aside.vue'
import AppMain from './components/app-main.vue'
export default {
  name: 'Layout',
  components: {
    AppHead,
    AppAside,
    AppMain,
  },
}
</script>

<style lang="less" scoped>
.app-wrapper {
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;

  .main-container {
    display: flex;
    flex: 1;
  }
}
</style>
