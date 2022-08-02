// import which is supported in v16.0.0+ and v14.18.0+. v15 does not support this.
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        // 配置路径别名
        alias: {
            '@': resolve(__dirname, './src')
        }
    }
})
