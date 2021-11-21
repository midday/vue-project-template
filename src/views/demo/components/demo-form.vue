<template>
  <div class="demo-form">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
    >
      <el-form-item :label="$t('demo.field.nameLabel')">
        <el-input
          v-model="form.name"
          :placeholder="$t('demo.field.namePlaceholder')"
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('demo.field.ageLabel')">
        <el-input
          v-model="form.age"
          :placeholder="$t('demo.field.agePlaceholder')"
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('demo.field.statusLabel')">
        <el-select
          v-model="form.status"
          :placeholder="$t('demo.field.statusPlaceholder')"
        >
          <el-option
            v-for="item in DEMO_STATUS_TEXT_MAP_LIST"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('demo.field.typeLabel')">
        <el-select
          v-model="form.type"
          :placeholder="$t('demo.field.typePlaceholder')"
        >
          <el-option
            v-for="item in DEMO_TYPE_TEXT_MAP_LIST"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submit"
        >{{ $t('demo.operateType.submit') }}</el-button>
        <el-button>{{ $t('demo.operateType.cancel') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { DEMO_STATUS_TEXT_MAP_LIST, DEMO_TYPE_TEXT_MAP_LIST } from '@/constants'

export default {
  name: 'DemoForm',
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      DEMO_STATUS_TEXT_MAP_LIST,
      DEMO_TYPE_TEXT_MAP_LIST,
      form: {
        name: '',
        age: '',
        status: '',
        type: '',
      },
    }
  },
  methods: {
    submit() {
      console.log('submit!')
    },
  },
}
</script>

<style></style>
