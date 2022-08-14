import { createApp } from 'vue'
import router from '@/router'
import svgIcon from '@/components/SvgIcon/index.vue'
import App from '@/App.vue'
import i18n from '@/language/i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import { airbnbDB, languageObjectStore, usersObjectStore } from '@/database'

router.beforeEach((to, from, next) => {
    airbnbDB
        .open([
            {
                ...languageObjectStore,
                ...usersObjectStore
            }
        ])
        .then(() => {
            console.log('初始化所有数据库')
            next()
        })
})

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.use(pinia)
app.component('svg-icon', svgIcon)
app.mount('#app')
