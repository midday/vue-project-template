<template>
  <div class="demo-list">
    <demo-list-search />
    <demo-list-table />
  </div>
</template>

<script>
import DemoListSearch from './components/demo-list-search.vue'
import DemoListTable from './components/demo-list-table.vue'

export default {
  name: 'DemoList',
  components: {
    DemoListSearch,
    DemoListTable,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped></style>
