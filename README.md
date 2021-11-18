# demo

## 项目启动

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 技术选型

- 前端框架 [Vue](https://cn.vuejs.org/index.html) + [Vuex](https://vuex.vuejs.org/zh/) + [Vue Router](https://router.vuejs.org/zh/) + [axios](https://github.com/axios/axios) + [Less](http://lesscss.cn/) + [Element UI](https://element.eleme.cn/#/zh-CN/guide/design)
- 脚本代码规范 [ESLint](https://github.com/eslint/eslint) + [standard](https://github.com/vuejs/eslint-config-standard#readme) + [plugin:vue/essential、plugin:vue/strongly-recommended、plugin:vue/recommended](https://eslint.vuejs.org/rules/) 对标：[Vue 风格指南](https://cn.vuejs.org/v2/style-guide/)
- 样式代码规范 [StyleLint](http://npm.sankuai.com/package/stylelint) + [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) + [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order) + [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)
- 仓库提交规范 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint)
- GitHook 工具 [Husky](https://github.com/typicode/husky)

## 目录说明

> 必须遵守：目录及文件统一使用短横线命名(kebab-case)，如：first-name、user-phone、hello

```bash
src                               源码目录
|-- api                              所有api接口
|-- assets                           静态资源，images, icons, styles等
|   |-- icons                           图标
|   |-- images                          样式
|   |-- styles                          图片
|-- components                       公用组件
|-- config                           配置信息
|-- constants                        常量信息，项目所有Enum, 全局常量等
|-- directives                       自定义指令
|-- filters                          过滤器
|-- i18n                             国际化
|-- mock                             模拟接口，临时存放
|-- plugins                          插件，全局使用
|-- router                           路由，统一管理
|-- store                            vuex, 统一管理
|-- views                            视图目录
|   |-- role                             role模块名
|   |-- |-- role-list.vue                    role列表页面
|   |-- |-- role-add.vue                     role新建页面
|   |-- |-- role-update.vue                  role更新页面
|   |-- |-- index.less                      role模块样式
|   |-- |-- components                      role模块通用组件文件夹
|   |-- employee                         employee模块
```
