// import which is supported in v16.0.0+ and v14.18.0+. v15 does not support this.
import { resolve } from 'path'
// import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvg } from './src/components/SvgIcon'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        }),
        createSvg('./src/components/SvgIcon/icons/')
    ],
    resolve: {
        // 配置路径别名
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "src/assets/styles/index.scss";'
            }
        }
    }
})
