<template>
  <div class="demo-create">
    <demo-form :is-edit="false" />
  </div>
</template>

<script>
import DemoForm from '../components/demo-form.vue'
export default {
  name: 'DemoList',
  components: {
    DemoForm,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped></style>
