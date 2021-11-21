import { $t } from '@/locales'

// Demo状态
export const DEMO_STATUS = {
  STATUS_ONE: 1,
  STATUS_TWO: 2,
}

// Demo状态文案映射
export const DEMO_STATUS_TEXT_MAP = {
  [DEMO_STATUS.STATUS_ONE]: $t('demo.field.statusOne'),
  [DEMO_STATUS.STATUS_TWO]: $t('demo.field.statusTwo'),
}

// Demo状态文案映射列表
export const DEMO_STATUS_TEXT_MAP_LIST = Object.entries(DEMO_STATUS).map(item => {
  return {
    label: DEMO_STATUS_TEXT_MAP[item[1]],
    value: item[0],
  }
})

// Demo类型
export const DEMO_TYPE = {
  TYPE_ONE: 1,
  TYPE_TWO: 2,
}

// Demo类型文案映射
export const DEMO_TYPE_TEXT_MAP = {
  [DEMO_TYPE.TYPE_ONE]: $t('demo.field.typeOne'),
  [DEMO_TYPE.TYPE_TWO]: $t('demo.field.typeOne'),
}

// Demo类型文案映射列表
export const DEMO_TYPE_TEXT_MAP_LIST = Object.entries(DEMO_TYPE).map(item => {
  return {
    label: DEMO_TYPE_TEXT_MAP[item[1]],
    value: item[0],
  }
})
