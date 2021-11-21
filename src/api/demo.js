import request from '@/utils/request'

// 获取用户列表
export const getDemoList = params => {
  return request.get('/api/getDemoList', { params })
}

// 获取Demo
export const getDemo = params => {
  return request.get('/api/getDemo', { params })
}

// 添加Demo
export const addDemo = params => {
  return request.post('/api/addDemo', params)
}

// 更新Demo
export const updateDemo = params => {
  return request.post('/api/updateDemo', params)
}

// 删除Demo
export const deleteDemo = params => {
  return request.post('/api/deleteDemo', params)
}
