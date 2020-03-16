# wechat

> # 微信小程序ui标准

## 单位px

- 必须是8的倍数

## 项目目录结构

- component 自定义组件

- pages 页面

- store  vuex

- utils 辅助函数

- static 静态资源

- api 封装好的接口

## 状态控制

- 用vuex做全局状态控制

## css预处理器

- 使用less

## ui框架

https://github.com/iview/iview-mpvue

# 注意
新增页面需要重新npm  run  build

参考链接： https://www.jianshu.com/p/4ee222b64f58


## Build Setup


``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
