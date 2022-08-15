import App from '@/App.vue'
import i18n from '@/language/i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import { createSSRApp } from 'vue'
import { createSSRRouter } from '@/router'
import { createHead } from '@vueuse/head'

export function createApp() {
    const app = createSSRApp(App)
    const pinia = createPinia()
    const head = createHead()
    const router = createSSRRouter()

    app.use(pinia)
    app.use(head)
    app.use(router)
    app.use(i18n)
    app.use(ElementPlus)

    return { app, pinia, head, router }
}
