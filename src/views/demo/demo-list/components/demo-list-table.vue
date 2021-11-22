<template>
  <el-table
    border
    :data="tableData"
  >
    <el-table-column
      prop="name"
      :label="$t('demo.field.nameLabel')"
      width="180"
    ></el-table-column>
    <el-table-column
      prop="age"
      :label="$t('demo.field.ageLabel')"
      width="180"
    ></el-table-column>
    <el-table-column
      prop="status"
      :label="$t('demo.field.statusLabel')"
    >
      <template slot-scope="scope">{{ DEMO_STATUS_TEXT_MAP[scope.row.status] }}</template>
    </el-table-column>
    <el-table-column
      prop="type"
      :label="$t('demo.field.typeLabel')"
    >
      <template slot-scope="scope">{{ DEMO_TYPE_TEXT_MAP[scope.row.type] }}</template>
    </el-table-column>
  </el-table>
</template>

<script>
import { DEMO_STATUS_TEXT_MAP, DEMO_TYPE_TEXT_MAP } from '@/constants'
export default {
  name: 'DemoListTable',
  data() {
    return {
      DEMO_STATUS_TEXT_MAP,
      DEMO_TYPE_TEXT_MAP,
      tableData: [
        {
          name: '张三',
          age: '年龄',
          status: 1,
          type: 1,
        },
        {
          name: '张三',
          age: '年龄',
          status: 2,
          type: 2,
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped></style>
