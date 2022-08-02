# Note

-   vite.config.js 文件中使用 resolve, node 的版本要求如下: import which is supported in v16.0.0+ and v14.18.0+. v15 does not support this.
-   eslint 中设置 "vue/multi-word-component-names":"off", 禁止检查 vue 文件命名规范(默认规范为驼峰或者 '-' 连接)
-   配置 vite 指定传递给 CSS 预处理器的选项来引入全局 mixin 样式: vite.config.js 中配置 additionalData: '@import "src/styles/index.scss";'
-
