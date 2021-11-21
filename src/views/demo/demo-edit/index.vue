<template>
  <div class="demo-edit">
    <demo-form :is-edit="true" />
  </div>
</template>

<script>
import DemoForm from '../components/demo-form.vue'
export default {
  name: 'DemoEdit',
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
