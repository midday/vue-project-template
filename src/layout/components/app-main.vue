<template>
  <div class="app-main">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AppMain',
}
</script>

<style lang="less" scoped>
.app-main {
  flex: 1;
  padding: 20px;
}
</style>
